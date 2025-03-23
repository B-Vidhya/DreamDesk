import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import './RecruterHome.css';

const RecruterHome = () => {
  return (
    <div className="recruiter-home-container">
      <Navbar />
      
      <div className="hero-section bg-blue-100 p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome, Recruiter!</h1>
        <p className="text-lg">Easily register your company and start posting jobs today.</p>
      </div>

      {/* Procedure to Register a Company */}
      <div className="procedure-section bg-white p-10">
        <h2 className="text-3xl font-bold mb-5">How to Register Your Company</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700">
          <li>Navigate to the <strong>Companies</strong> section from the navbar.</li>
          <li>Click on the <strong>"Create Company"</strong> button.</li>
          <li>Fill in the necessary details such as Company Name, Industry, Location, and Description.</li>
          <li>Upload your company logo and relevant documents.</li>
          <li>Submit the form and wait for verification approval.</li>
        </ol>
      </div>

      {/* Procedure to Post a Job */}
      <div className="procedure-section bg-gray-100 p-10">
        <h2 className="text-3xl font-bold mb-5">How to Post a Job</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700">
          <li>Go to the <strong>Jobs</strong> section from the navbar.</li>
          <li>Click on the <strong>"Post a Job"</strong> button.</li>
          <li>Enter job details including Title, Description, Requirements, Salary, and Location.</li>
          <li>Choose an application deadline and job type (Full-time, Part-time, Remote, etc.).</li>
          <li>Click <strong>Submit</strong> to publish the job listing.</li>
        </ol>
      </div>

      <Footer />
    </div>
  );
};

export default RecruterHome;