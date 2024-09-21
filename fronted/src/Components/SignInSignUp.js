import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography, Divider } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import './SignInSignUp.css'

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="xs" className="form-container" style={{ marginTop: '5rem' }} sx={{ backgroundColor: '#1a1d29' }}>
      <Typography variant="h4" gutterBottom>
        {isSignIn ? 'Sign in' : 'Sign up'}
      </Typography>
      <form onSubmit={handleSubmit}>
        {!isSignIn && (
          <div className="form-group">
            <label htmlFor="fullName" className="input-label">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="custom-input"
              placeholder="Full name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email" className="input-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="custom-input"
            placeholder="Email"
            required
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

      <Button variant="contained" startIcon={<GoogleIcon />} fullWidth className="social-btn google"  style={{ color: 'white', backgroundColor: "blue"}}>
        {isSignIn ? 'Sign in with Google' : 'Sign up with Google'}
      </Button>
      <Button variant="outlined" startIcon={<FacebookIcon />} fullWidth className="social-btn facebook" style={{  color: 'white', marginTop: '10px',backgroundColor: "blue" }}>
        {isSignIn ? 'Sign in with Facebook' : 'Sign up with Facebook'}
      </Button>
    </Container>
  );
}

export default SignInSignUp;