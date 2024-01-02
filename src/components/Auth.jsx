import React, { useState } from "react";
import Form from "./Form";
import video from "../assets/videos/background.mp4";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={`data-container ${isSignup ? "data-change" : ""}`}>
        <div className="data-forms-container">
          <Form type={isSignup ? "signup" : "signin"} />
        </div>
        <div className="data-intros-container">
          <div className="data-intro-control data-signin-intro">
            <div className="data-intro-control__inner">
              <h2>Welcome back!</h2>
              <p>
                Welcome back! We are so happy to have you here. It's great to
                see you again. We hope you had a safe and enjoyable time away.
              </p>
              <button
                className="form-button"
                id="signup-btn"
                onClick={() => setIsSignup(true)}
              >
                No account yet? Signup.
              </button>
            </div>
          </div>
          <div className="data-intro-control data-signup-intro">
            <div className="data-intro-control__inner">
              <h2>Come join us!</h2>
              <p>
                We are so excited to have you here. If you haven't already,
                create an account to get access to exclusive offers, rewards,
                and discounts.
              </p>
              <button
                className="form-button"
                id="signin-btn"
                onClick={() => setIsSignup(false)}
              >
                Already have an account? Signin.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
