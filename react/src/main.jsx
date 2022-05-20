import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import RegisterPage from './features/auth/register/RegisterPage';
import LoginPage from './features/auth/login/LoginPage';
import WelcomePage from './features/welcome/WelcomePage';
import HomePage from './features/home/HomePage';
import './index.css';

axios.defaults.baseURL = 'http://localhost';
axios.defaults.withCredentials = true;

function EmergencyOut() {
  useEffect(() => {
    axios.post('/logout');
  }, []);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/out" element={<EmergencyOut />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);