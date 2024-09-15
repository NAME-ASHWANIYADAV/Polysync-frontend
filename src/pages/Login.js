import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://polysync-backend-1.onrender.com/auth/login', formData);
            // Assuming the backend returns a success message or user data
            if (res.status === 200) {
                alert('Login successful');
                // Redirect to the dashboard page
                navigate('/dashboard');
            }
        } catch (err) {
            console.error(err.response.data);
            alert(err.response.data.msg || 'Login failed');
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Login</button>
                    <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
