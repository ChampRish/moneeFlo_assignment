import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MultiStepFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Keeps track of the current step

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You must be logged in to access this page.');
      navigate('/'); // Redirect to login page
    }
  }, [navigate]);

  // Step navigation handlers
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => Math.max(1, prevStep - 1));

  // Components for each step
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Basic Details</h2>
            <form>
              <label>Name:</label>
              <input type="text" required />
              <label>Email:</label>
              <input type="email" required />
              <label>Phone Number:</label>
              <input type="tel" required />
              <button type="button" onClick={nextStep}>Next</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Address</h2>
            <form>
              <label>Address Line 1:</label>
              <input type="text" required />
              <label>Address Line 2:</label>
              <input type="text" />
              <label>City:</label>
              <input type="text" required />
              <label>State:</label>
              <input type="text" required />
              <label>Pincode:</label>
              <input type="text" required />
              <label>Country:</label>
              <input type="text" required />
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: File Upload</h2>
            <form>
              <label>Upload a File (PNG, PDF):</label>
              <input type="file" accept=".png, .pdf" required />
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </form>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Multi File Upload</h2>
            <form>
              <label>Upload up to 5 Files (PNG, PDF):</label>
              <input type="file" accept=".png, .pdf" multiple required />
              <p>Geolocation: {navigator.geolocation ? 'Enabled' : 'Not Supported'}</p>
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </form>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Step 5: Status</h2>
            <p>Form submitted successfully!</p>
            <button type="button" onClick={() => navigate('/')}>Return Home</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Multi-Step Form</h1>
      <div className="progress-bar">
        <div style={{ width: `${(step / 5) * 100}%` }} className="progress"></div>
      </div>
      {renderStep()}
    </div>
  );
};

export default MultiStepFormPage;
