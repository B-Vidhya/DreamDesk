//import React from 'react';
import './AdminJobsTable.css';

const AdminJobsTable = () => {
  const jobs = [
    { id: 1, name: 'Software Engineer', role: 'Developer' },
    { id: 2, name: 'Project Manager', role: 'Management' },
    { id: 3, name: 'Data Scientist', role: 'Analyst' }
  ];

  return (
    <table className="admin-jobs-table">
      <thead>
        <tr>
          <th>Job Name</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
          <tr key={job.id}>
            <td>{job.name}</td>
            <td>{job.role}</td>
            <td className="admin-jobs-action">
              <div>Edit</div>
              <div>Delete</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// export default AdminJobsTable;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { toast } from "sonner";
// import "./AdminJobsTable.css";

// const AdminJobsTable = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get logged-in user details from Redux store
//   const { user } = useSelector((store) => store.auth); // Assuming auth state contains user info
//   const companyId = user?.companyId; // Extract companyId from user

//   useEffect(() => {
//     if (!companyId) return;

//     const fetchJobs = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`/api/jobs?companyId=${companyId}`);
//         setJobs(response.data.jobs);
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to load jobs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, [companyId]);

//   const handleDelete = async (jobId) => {
//     try {
//       await axios.delete(`/api/jobs/${jobId}`);
//       setJobs(jobs.filter((job) => job.id !== jobId)); // Update UI
//       toast.success("Job deleted successfully.");
//     } catch (err) {
//       toast.error("Failed to delete job.");
//     }
//   };

//   return (
//     <div>
//       <h2>Company Jobs</h2>
//       {loading && <p>Loading jobs...</p>}
//       {error && <p className="error">{error}</p>}

//       {!loading && !error && (
//         <table className="admin-jobs-table">
//           <thead>
//             <tr>
//               <th>Job Name</th>
//               <th>Role</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.length > 0 ? (
//               jobs.map((job) => (
//                 <tr key={job.id}>
//                   <td>{job.name}</td>
//                   <td>{job.role}</td>
//                   <td className="admin-jobs-action">
//                     <div>Edit</div>
//                     <div
//                       onClick={() => handleDelete(job.id)}
//                       className="delete-btn"
//                     >
//                       Delete
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No jobs found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

export default AdminJobsTable;
