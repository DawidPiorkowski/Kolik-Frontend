import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Terms from './pages/Terms.tsx';
import Privacy from './pages/Privacy.tsx';
import MFASetup from './pages/MFASetup.tsx';
import MFALogin from './pages/MFALogin.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} /> 
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/mfa-setup" element={<MFASetup />} />
        <Route path="/mfa-login" element={<MFALogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
