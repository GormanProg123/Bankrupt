import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import "./styles/loginform.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://bankrupt-back.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();

      document.cookie = `access_token=${data.access_token}; path=/; secure; samesite=strict`;

      navigate("/");
    } catch (error: unknown) {
      console.log("Login failed: " + error);
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <p className="logo-text">Bankrupt</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Sign In</h1>
        <p className="form-description">
          Enter your credentials to access your account
        </p>

        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <div className="password-header">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>

        <p className="signup-prompt">
          Don't have an account?
          <a href="/registration" className="signup-link">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};
