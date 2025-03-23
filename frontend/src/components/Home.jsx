// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import HeroSection from './HeroSection'
// import CategoryCarousel from './CategoryCarousel'
// import LatestJobs from './LatestJobs'
// import Footer from './shared/Footer'
// import useGetAllJobs from '@/hooks/useGetAllJobs'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector(store => store.auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user?.role === 'recruiter') {
//       navigate("/admin/companies");
//     }
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <CategoryCarousel />
//       <LatestJobs />
//       <Footer />
//     </div>
//   )
// }

// export default Home

import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
        navigate("/RecruterHome", { replace: true });  // Force navigation
    }
}, [user, navigate]);

  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <div className="faq-section bg-gray-100 p-10">
        <h2 className="text-3xl font-bold mb-5">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>How do I create a profile?</strong>
            <p>Click on the "Sign Up" button at the top right corner and fill in your details to create a profile.</p>
          </li>
          <li>
            <strong>How can I apply for jobs?</strong>
            <p>Browse through the job listings and click on the "Apply" button for the job you are interested in.</p>
          </li>
          <li>
            <strong>How do employers post job openings?</strong>
            <p>Employers can post job openings by clicking on the "Post a Job" button and filling in the job details.</p>
          </li>
          <li>
            <strong>How can I communicate with potential employers?</strong>
            <p>You can communicate with potential employers through the messaging feature available on your profile.</p>
          </li>
        </ul>
      </div>
      <div className="steps-section bg-white p-10">
        <h2 className="text-3xl font-bold mb-5">Steps to Find Your Dream Job</h2>
        <ol className="list-decimal list-inside">
          <li>Create a profile by signing up.</li>
          <li>Browse through the available job listings.</li>
          <li>Use the search bar to find specific jobs.</li>
          <li>Apply for jobs that match your skills and interests.</li>
          <li>Communicate with potential employers through the messaging feature.</li>
          <li>Keep your profile updated with your latest skills and experiences.</li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default Home;