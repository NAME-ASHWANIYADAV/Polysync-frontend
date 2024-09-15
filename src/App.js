import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import ForgotPassword from '../src/components/ForgotPassword';
import ResetPassword from '../src/components/ResetPassword';
import Dashboard from '../src/pages/DashboardPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path= "/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
