import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css"; // Import CSS

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleResponse = useCallback((response) => {
    console.log("Google Credential:", response);
    alert("Google Sign-In successful!");
    navigate("/home");
  }, [navigate]);

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "243730593042-6adfuu59hphnth5hi1d6jih3441v7aho.apps.googleusercontent.com",
        callback: handleGoogleResponse,
      });
    }
  }, [handleGoogleResponse]);

  const handleGoogleLogin = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    } else {
      alert("Google API not loaded. Please refresh the page.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    const passwordRegex = new RegExp(
      "^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?\":{}|<>_\\-]).{8,}$"
    );
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, include one uppercase letter and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Add validation for phone number
    if (!phoneNumber || phoneNumber.length < 10) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    if (email && password && confirmPassword && phoneNumber) {
      alert("Registration successful, please Login");
      navigate("/");
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="register-page">
      <img src="/assets/videobelajar-logo.png" alt="Logo" className="logo" />

      <div className="register-container">
        <h2>Create an Account</h2>

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

          {/* Phone Number */}
          <label className="input-label">
            Phone Number <span className="required">*</span>
          </label>
          <div className="phone-input">
            <span className="phone-prefix">+62</span>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

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

          {/* Confirm Password */}
          <label className="input-label">
            Confirm Password <span className="required">*</span>
          </label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="toggle-eye"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          {/* Submit Button */}
          <button type="submit" className="btn-register">
            Register
          </button>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Google Register Button */}
          <button
            type="button"
            className="google-login"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Register with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
