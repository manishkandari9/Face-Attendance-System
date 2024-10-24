import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography, Divider } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import './SignInSignUp.css';

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const endpoint = isSignIn ? '/api/signin' : '/api/signup';
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Handle success (e.g., save token, user info, etc.)
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display a message)
    }
  };

  return (
    <Container maxWidth="xs" className="form-container" style={{ marginTop: '5rem' }} sx={{ backgroundColor: '#1a1d29' }}>
      <Typography variant="h4" gutterBottom>
        {isSignIn ? 'Sign in' : 'Sign up'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="input-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="custom-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="input-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="custom-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isSignIn && (
          <Typography variant="body1" align="center" className="forgot-password" style={{ marginTop: '10px' }}>
            <span onClick={() => console.log('Forgot password clicked')} style={{ cursor: 'pointer' }}>
              Forgot password?
            </span>
          </Typography>
        )}
        <Button variant="contained" fullWidth type="submit" className="submit-btn" style={{ marginTop: '10px', backgroundColor:"#00ff00", color:"black"}}>
          {isSignIn ? 'Sign in' : 'Sign up'}
        </Button>
      </form>

      <Typography variant="body1" align="center" className="toggle-text" style={{ marginTop: '10px' }}>
        {isSignIn ? "Don't have an account?" : 'Already have an account?'}
        <span onClick={handleToggle} style={{ cursor: 'pointer', marginLeft: '20px' }}>
          {isSignIn ? 'Sign up' : 'Sign in'}
        </span>
      </Typography>

      <Divider style={{ margin: '10px 0' }}>or</Divider>

      <Button variant="contained" startIcon={<GoogleIcon />} fullWidth className="social-btn google" style={{ color: 'white', backgroundColor: "blue" }}>
        {isSignIn ? 'Sign in with Google' : 'Sign up with Google'}
      </Button>
    </Container>
  );
}

export default SignInSignUp;
