import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Left Side - Illustration */}
      <div className="home-image-container">
        <img
          src="/images/image2.jpg"
          alt="Person at Laptop"
          className="home-image"
        />
      </div>

      {/* Right Side - Text + Buttons */}
      <div className="home-text-container">
        <h1 className="home-title">
          Smart Waste<br />Management<br />System
        </h1>

        <div className="home-action">
          <p>
            If you don’t have an account,
            <button
              onClick={() => navigate('/register')}
              className="login-button-home"
            >
              SIGN UP
            </button>
          </p>
        </div>

        <div className="home-action">
          <p>
            If you already have an account,
            <button
              onClick={() => navigate('/login')}
              className="login-button-home"
            >
              LOGIN
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
