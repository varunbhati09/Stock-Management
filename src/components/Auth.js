import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
import { Link } from 'react-router-dom'; 
import './Auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
     
      await signInWithEmailAndPassword(auth, email, password);

      
      if (email === 'admin@gmail.com' && password === 'password') {
      
        window.location.replace('/admin');
      } else if (email === 'staff@gmail.com' && password === 'password') {
     
        window.location.replace('/staff');
      } else {
      
        window.location.replace('/');
      }
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Auth;
