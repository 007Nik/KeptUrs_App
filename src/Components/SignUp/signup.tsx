import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isPasswordValid && email) {
      // Perform sign up logic here
      console.log('Form submitted:', { email, password });
      // Navigate to login page after successful sign-up (optional)
      navigate('/login');
    }
  };

  // Handle email change
  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  // Handle password change
  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
    setIsPasswordTouched(true);
    setIsPasswordValid(e.target.value.length >= 6); // simple validation for password length
  };

  return (
    <div className="container">
      <div className="content"></div>
      <div className="firstdiv">
        <br />
        <p className="step">Step 1 of 2</p>
        <h2>Create an account</h2>
        <p className="step">Sign up with email</p>
        <p className="newUser">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <form className="item" onSubmit={handleSubmit}>
          <div>
            <label className="labels">Email address</label>
            <br />
            <input
              className="inp"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <br />
            <br />
          </div>
          <div>
            <label className="labels">Password</label>
            <br />
            <input
              className={`inp ${!isPasswordValid && isPasswordTouched ? 'invalid-password' : ''}`}
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <br />
          </div>
          {!isPasswordValid && isPasswordTouched && (
            <p>Please enter a valid password (at least 6 characters)</p>
          )}
          <button>Continue</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignUp;