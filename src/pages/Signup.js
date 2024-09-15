import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        aadhar: '',
        secretQuestion: '',
        secretAnswer: ''
    });
    const navigate = useNavigate();  // Initialize the useNavigate hook

    const commonQuestions = [
        "What is your pet's name?",
        "What is your mother's maiden name?",
        "What was your first car?",
        "What is your favorite color?",
        "What is your favorite book?"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://polysync-backend-1.onrender.com/auth/signup', formData);
            alert('Signup successful');
            // Redirect to the login page or any other page after successful signup
            navigate('/login');
        } catch (err) {
            if (err.response) {
                console.error(err.response.data);
                alert(err.response.data.msg || 'An error occurred');
            } else if (err.request) {
                console.error('No response from server');
                alert('No response from server');
            } else {
                console.error('Error', err.message);
                alert('An error occurred');
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    <input type="text" name="aadhar" placeholder="Aadhaar Card Number" onChange={handleChange} required />
                    <select name="secretQuestion" onChange={handleChange} required>
                        <option value="">Select Secret Question</option>
                        {commonQuestions.map((question, index) => (
                            <option key={index} value={question}>{question}</option>
                        ))}
                    </select>
                    <input type="text" name="secretAnswer" placeholder="Answer to Secret Question" onChange={handleChange} required />
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
