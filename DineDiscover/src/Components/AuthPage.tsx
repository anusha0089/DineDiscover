import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

interface AuthPageProps {
  onBack: () => void;
  onLoginClick: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onBack, onLoginClick }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors([]);  // Clear errors when toggling between login and sign-up
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePasswordStrength = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const emailError = !validateEmail(email) ? 'Invalid email format' : '';
    const passwordError = !validatePasswordStrength(password)
      ? 'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number'
      : '';
    const confirmPasswordError = !isLogin && password !== confirmPassword
      ? 'Passwords do not match'
      : '';

    const newErrors = [emailError, passwordError, confirmPasswordError].filter(Boolean);
    setErrors(newErrors);

    if (newErrors.length === 0) {
      if (isLogin) {
        // Login logic here
        console.log('Logging in with:', email, password);
        onLoginClick();  // Set login state to true
        navigate('/homepage');  // Navigate to homepage after login
      } else {
        // Signup logic here
        console.log('Signing up with:', email, password);
        onLoginClick();  // Set login state to true after signup
        navigate('/homepage');  // Navigate to homepage after signup
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Displaying errors */}
        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-text">{error}</p>
            ))}
          </div>
        )}

        <p onClick={toggleAuthMode} className="toggle-auth-mode">
          {isLogin ? "Don't have an account? Sign up here" : 'Already have an account? Login here'}
        </p>
        <p onClick={onBack} className="back-button">
          Back to Homepage
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
