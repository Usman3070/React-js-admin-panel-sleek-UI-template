import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous error message
    setErrorMessage("");

    try {
      // Determine the endpoint based on the form type
      const endpoint = type === "signup" ? "http://127.0.0.1:8000/auth/register" : "http://127.0.0.1:8000/auth/login";

      // Check if passwords match (only for signup)
      if (type === "signup" && password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }

      // Send data to the backend
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          ...(type === "signup" ? { confirm_password: confirmPassword,username:username } : {}),
        }),
      });

      // Handle the response from the backend
      if (!response.ok) {
        // Handle registration or login failure
        const data = await response.json();
        setErrorMessage(data.error || (type === "signup" ? "Registration failed" : "Login failed"));
      } else {
        // Handle successful registration or login
        console.log(type === "signup" ? "Registration successful!" : "Login successful!");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className={`form-control ${type}-form`}>
      <form onSubmit={handleSubmit}>
        <h2>{type === "signup" ? "signup" : "signin"}</h2>

        {type === "signup" && (
          <>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}
        {type === "signin" && (
          <>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}
        <button type="submit">{type === "signup" ? "Signup" : "Signin"}</button>
      </form>
      <span>or {type === "signup" ? "signup" : "signin"} with</span>
      <div className="socials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-google-plus-g"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
  );
};

export default Form;
