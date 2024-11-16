// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MultiStepFormPage from './pages/MultiStepFormPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form" element={<MultiStepFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
