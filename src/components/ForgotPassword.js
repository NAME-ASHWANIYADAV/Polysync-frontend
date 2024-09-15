import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [secretQuestion, setSecretQuestion] = useState('');
    const [secretAnswer, setSecretAnswer] = useState('');
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://polysync-backend-1.onrender.com/auth/secret-question/${email}`);
            setSecretQuestion(res.data.secretQuestion);
        } catch (err) {
            console.error(err.response.data);
            alert('Error fetching secret question');
        }
    };

    const handleAnswerSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://polysync-backend-1.onrender.com/auth/forgot-password', { email, secretAnswer });
            if (res.data.success) {
                navigate(`/reset-password?email=${email}`);
            } else {
                alert('Incorrect answer');
            }
        } catch (err) {
            console.error(err.response.data);
            alert('Error validating secret answer');
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                {!secretQuestion ? (
                    <form onSubmit={handleEmailSubmit}>
                        <h1>Forgot Password</h1>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <form onSubmit={handleAnswerSubmit}>
                        <h1>Answer Secret Question</h1>
                        <p>{secretQuestion}</p>
                        <input
                            type="text"
                            placeholder="Enter your answer"
                            value={secretAnswer}
                            onChange={(e) => setSecretAnswer(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
