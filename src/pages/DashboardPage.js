import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';  // Import the CSS file

const Dashboard = () => {
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [feedback, setFeedback] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        // Fetch departments from the backend
        axios.get('https://polysync-backend-1.onrender.com/api/departments')
            .then(response => {
                setDepartments(response.data);
            })
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://polysync-backend-1.onrender.com/api/feedback', { department: selectedDepartment, feedback });
            setResponse(res.data.response);
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-form">
                <h1>Dashboard</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Department:
                        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} required>
                            <option value="">Select a department</option>
                            {departments.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Feedback:
                        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
                    </label>
                    <button type="submit">Submit Feedback</button>
                </form>
                {response && (
                    <div className="response">
                        <h2>AI Model Response</h2>
                        <p>{response}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
