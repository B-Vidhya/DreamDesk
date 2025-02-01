import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 */
export const register = async (req, res) => {
    try {
        console.log("➡️ Register API Hit");

        const { fullname, email, phoneNumber, password, role } = req.body;
        console.log("Received Data:", req.body);

        if (!fullname || !email || !phoneNumber || !password || !role) {
            console.log("❌ Missing Fields");
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("❌ User already exists:", existingUser.email);
            return res.status(400).json({ message: "User already exists", success: false });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("✅ Password Hashed");

        // Upload profile photo (if exists)
        let profilePhoto = "";
        if (req.file) {
            console.log("Uploading Profile Photo...");
            const fileUri = getDataUri(req.file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            profilePhoto = cloudResponse.secure_url;
            console.log("✅ Profile Photo Uploaded:", profilePhoto);
        }

        // Create user
        const newUser = await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile: { profilePhoto }
        });

        console.log("✅ User Created Successfully:", newUser._id);
        return res.status(201).json({ message: "Account created successfully.", success: true });

    } catch (error) {
        console.error("❌ Register Error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

/**
 * @desc Login user
 * @route POST /api/auth/login
 */
export const login = async (req, res) => {
    try {
        console.log("➡️ Login API Hit");

        const { email, password, role } = req.body;
        console.log("Received Data:", req.body);

        if (!email || !password || !role) {
            console.log("❌ Missing Fields");
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Find user & include password field
        let user = await User.findOne({ email }).select("+password");
        if (!user) {
            console.log("❌ User Not Found:", email);
            return res.status(400).json({ message: "Incorrect email or password.", success: false });
        }

        // Check password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            console.log("❌ Password Mismatch");
            return res.status(400).json({ message: "Incorrect email or password.", success: false });
        }

        // Check role
        if (role !== user.role) {
            console.log("❌ Incorrect Role:", role);
            return res.status(400).json({ message: "Account doesn't exist with current role.", success: false });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
        console.log("✅ Token Generated");

        // Remove password before sending user object
        user.password = undefined;

        return res
            .status(200)
            .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true, sameSite: "strict" })
            .json({ message: `Welcome back ${user.fullname}`, user, success: true });

    } catch (error) {
        console.error("❌ Login Error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

/**
 * @desc Logout user
 * @route GET /api/auth/logout
 */
export const logout = async (req, res) => {
    try {
        console.log("➡️ Logout API Hit");

        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        });

    } catch (error) {
        console.error("❌ Logout Error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

/**
 * @desc Update user profile
 * @route PUT /api/auth/update-profile
 */
export const updateProfile = async (req, res) => {
    try {
        console.log("➡️ Update Profile API Hit");

        const { fullname, email, phoneNumber, bio, skills } = req.body;
        console.log("Received Data:", req.body);

        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);
        if (!user) {
            console.log("❌ User Not Found");
            return res.status(400).json({ message: "User not found.", success: false });
        }

        // Updating data
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skills.split(",");

        // Handle resume upload
        if (req.file) {
            console.log("Uploading Resume...");
            const fileUri = getDataUri(req.file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            user.profile.resume = cloudResponse.secure_url;
            user.profile.resumeOriginalName = req.file.originalname;
            console.log("✅ Resume Uploaded:", cloudResponse.secure_url);
        }

        await user.save();

        // Remove sensitive data before sending response
        user.password = undefined;

        return res.status(200).json({ message: "Profile updated successfully.", user, success: true });

    } catch (error) {
        console.error("❌ Update Profile Error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};
