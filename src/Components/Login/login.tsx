import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !password) return;
    navigate('/categories');
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
    setIsPasswordTouched(true);
  };

  const isPasswordValid = password.length > 0;

  return (
    <div className="flex justify-between items-center min-h-screen bg-gray-300 p-10">
      <div className="relative w-1/2 flex items-center justify-center">
        <div className="fixed w-32 h-32 bg-blue-400 rounded-full top-10 left-10 opacity-50 animate-bounce"></div>
        <div className="fixed w-24 h-24 bg-green-400 rounded-full top-40 left-20 opacity-50 animate-bounce delay-200"></div>
        <div className="fixed w-28 h-28 bg-purple-400 rounded-full top-60 left-5 opacity-50 animate-bounce delay-500"></div>
      </div>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="User Id or E-mail"
              className="w-full p-2 border-b border-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className={`w-full p-2 border-b ${!isPasswordValid && isPasswordTouched ? 'border-red-500' : 'border-gray-400'} focus:outline-none`}
            />
          </div>
          {!isPasswordValid && isPasswordTouched && (
            <p className="text-red-500 text-sm">Please enter password</p>
          )}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600">Log In</button>
        </form>
        <p className="text-sm font-semibold mt-4">
          New User? <a href="/sign-up" className="text-blue-500 hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
