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

export default AdminJobsTable;
