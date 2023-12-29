import React, { useState } from 'react';
import Form from './Form';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleFormSubmit = (data) => {
    console.log(`Form submitted: ${isSignup ? 'signup' : 'signin'}`, data);
    // Example: Send a POST request to your backend API
    // fetch('your-backend-api-url', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch(error => console.error('Error:', error));
  };

  return (
    <div className={`container ${isSignup ? 'change' : ''}`}>
      <div className="forms-container">
        <Form type={isSignup ? 'signup' : 'signin'} onSubmit={handleFormSubmit} />
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
