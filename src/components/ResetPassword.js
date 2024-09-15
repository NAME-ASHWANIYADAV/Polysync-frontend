import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ResetPassword.css';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const email = new URLSearchParams(location.search).get('email');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://polysync-backend-1.onrender.com/auth/reset-password', { email, newPassword });
            alert('Password reset successfully');
            navigate('/login');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div className="reset-password-container">
            <div className="reset-password-form">
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
