import React, { useState } from 'react';
import InputField from '../components/InputField';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4">Forgot Password</h2>
      <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handlePasswordReset} className="w-full py-2 bg-indigo-500 text-white rounded-md mt-4">
        Send Reset Link
      </button>
    </div>
  );
};

export default ForgotPasswordPage;
