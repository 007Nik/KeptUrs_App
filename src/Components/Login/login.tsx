import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle the login logic here

    navigate('/categories');
  };

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
    setIsPasswordTouched(true); // Mark password field as touched when it is modified
  };

  const isPasswordValid = password.length > 0; // Simple validation for the password field

  return (
    <div className="firstdiv">
      <br />
      <h2>Sign In</h2>
      <form className="item" onSubmit={handleSubmit}>
        <div>
          <input
            className="inp"
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="User Id or E-mail"
          />
          <br />
          <br />
        </div>
        <div>
          <input
            className={`inp ${!isPasswordValid && isPasswordTouched ? 'invalid-password' : ''}`}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <br />
          <br />
        </div>
        {!isPasswordValid && isPasswordTouched && (
          <p>Please enter password</p>
        )}
        <button>Log In</button>
        <br />
        <br />
        <p className="newUser">
          New User? <a href="/sign-up">Create an account</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
