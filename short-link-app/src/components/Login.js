// short-link-app/src/components/Login.js
import React, { useState } from 'react';
import AuthService from './AuthService';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(credentials);
      // Handle login success, store token, etc.
      console.log('Login Successful:', response);
    } catch (error) {
      // Handle login failure
      console.error('Login Failed:', error);
    }
  };

  return (
    <div className="login-container">
      <label>Username:</label>
      <input type="text" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />

      <label>Password:</label>
      <input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
