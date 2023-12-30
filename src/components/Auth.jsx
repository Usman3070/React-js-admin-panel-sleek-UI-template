import React, { useState } from 'react';
import Form from './Form';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`container ${isSignup ? 'change' : ''}`}>
      <div className="forms-container">
        <Form type={isSignup ? 'signup' : 'signin'}/>
      </div>
      <div className="intros-container">
        <div className="intro-control signin-intro">
          <div className="intro-control__inner">
            <h2>Welcome back!</h2>
            <p>
              Welcome back! We are so happy to have you here. It's great to see you again.
              We hope you had a safe and enjoyable time away.
            </p>
            <button id="signup-btn" onClick={() => setIsSignup(true)}>
              No account yet? Signup.
            </button>
          </div>
        </div>
        <div className="intro-control signup-intro">
          <div className="intro-control__inner">
            <h2>Come join us!</h2>
            <p>
              We are so excited to have you here. If you haven't already, create an account
              to get access to exclusive offers, rewards, and discounts.
            </p>
            <button id="signin-btn" onClick={() => setIsSignup(false)}>
              Already have an account? Signin.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
