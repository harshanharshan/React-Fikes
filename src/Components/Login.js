// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [log , setLog] = useState(' ')
  const handleClick = ()=>{
    setLog("Succesfully Loged In")
  }
  const handleLogin = () => {
    // Add authentication logic here
    onLogin(username);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <center>
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </label>
          <br />
          <button type="button" onClick={handleClick} >
            Login
          </button>
          <h2 style={{color:'green'}}>{log}</h2>
        </form>
      </center>
    </div>
  );
};

export default Login;
