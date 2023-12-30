import React, { useState } from "react";
import { toast } from "react-toastify";
const BASE_URL=process.env.REACT_APP_API_KEY
const Form = ({ type }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = type === "signup" ? `${BASE_URL}/auth/register` : `${BASE_URL}/auth/login`;

      if (type === "signup" && password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

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

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.error || (type === "signup" ? "Registration failed" : "Login failed"));
      } else {
        toast.success(type === "signup" ? "Registration successful! Please check your email." : "Login successful!");
      }
    } catch (error) {
      toast.error("Error during form submission:", error);
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
