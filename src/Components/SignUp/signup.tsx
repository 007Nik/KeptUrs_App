import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isPasswordValid && email) {
      console.log('Form submitted:', { email, password });
      navigate('/login');
    }
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
    setIsPasswordTouched(true);
    setIsPasswordValid(e.target.value.length >= 6);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <p className="text-gray-600 text-sm font-bold mb-2">Step 1 of 2</p>
        <h2 className="text-2xl font-bold mb-2">Create an account</h2>
        <p className="text-gray-600 text-sm">Sign up with email</p>
        <p className="text-sm text-gray-600 mt-2">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
        </p>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Email address</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="w-full mt-1 p-2 border-b border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full mt-1 p-2 border-b ${!isPasswordValid && isPasswordTouched ? 'border-red-500' : 'border-gray-400'} focus:outline-none focus:border-blue-500`}
            />
          </div>
          {!isPasswordValid && isPasswordTouched && (
            <p className="text-red-500 text-sm">Please enter a valid password (at least 6 characters)</p>
          )}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
