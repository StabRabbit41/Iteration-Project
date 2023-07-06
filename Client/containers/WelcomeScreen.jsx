import React from 'react';
import Login from '../components/login.jsx';
import Signup from '../components/signup.jsx';

const WelcomeScreen = () => {
  return (
    <div className="overlay">
      <div className="overlayDiv">
        <div className="welcomeHead">
          <h1>Welcome to Flexios</h1>
        </div>
        <div>
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
