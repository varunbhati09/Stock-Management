import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
  
      await createUserWithEmailAndPassword(auth, email, password);
   
      window.location.replace('/');
    } catch (error) {
      console.error('Error registering user: ', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
