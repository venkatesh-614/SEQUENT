import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">
            Your Logical Path to <span>SQL </span>.
          </h1>

          <p className="hero-subtitle">
            Experience the seamless way to learn SQL. Transform complex syntax
            into second nature through progressive levels, streaks, and AI
            guidance.
          </p>

          <div className="hero-buttons">
            <button
              className="start-btn"
              onClick={() => navigate("/features")} // Navigate to Features page
            >
              Start Learning
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/levels")} // Navigate to Levels page
            >
              Explore Levels
            </button>
          </div>
        </section>

        {/* Floating gradient orbs */}
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
      </div>
    </div>
  );
}
