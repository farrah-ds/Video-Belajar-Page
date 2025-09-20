import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Google sign-in response
  const handleGoogleResponse = useCallback(
    (response) => {
      console.log("Google Credential:", response);
      alert("Google Sign-In successful!");
      setIsAuthenticated(true);
      navigate("/home");
    },
    [navigate, setIsAuthenticated]
  );

  // Initialize Google API
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "243730593042-6adfuu59hphnth5hi1d6jih3441v7aho.apps.googleusercontent.com",
        callback: handleGoogleResponse,
      });
    }
  }, [handleGoogleResponse]);

  // Trigger Google sign-in popup
  const handleGoogleLogin = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    } else {
      alert("Google API not loaded. Please refresh the page.");
    }
  };

  // Handle form submission (manual login)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    // Password validation
    const passwordRegex = new RegExp(
      "^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?\":{}|<>_\\-]).{8,}$"
    );
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, include one uppercase letter and one special character."
      );
      return;
    }

    if (email && password) {
      setIsAuthenticated(true);
      navigate("/home");
      alert("Login successful, Happy Learning!");
    } else {
      setErrorMessage("Please enter both email and password.");
    }
  };

  return (
    <div className="login-page">
      <img src="/assets/videobelajar-logo.png" alt="Logo" className="logo" />

      <div className="login-card">
        <h2 className="title">Login</h2>
        <p className="subtitle">Let's expand your knowledge by learning with Videobelajar!</p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <label className="input-label">
            E-mail <span className="required">*</span>
          </label>
          <input
            type="email"
            placeholder="Input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <label className="input-label">
            Password <span className="required">*</span>
          </label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Input your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          {/* Forgot Password Link */}
          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-login">
            Login
          </button>

          {/* Register Button */}
          <button
            type="button"
            className="btn-register"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="google-login"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
