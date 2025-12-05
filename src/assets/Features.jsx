import React from "react";
import {
  Database,
  Zap,
  Trophy,
  Target,
  Users,
  Lightbulb,
  Brain,
  Flame,
  Star,
  Code,
  Award,
  TrendingUp,
} from "lucide-react";
import "./Features.css";

export default function Features() {
  const features = [
    {
      icon: Database,
      title: "Structured SQL Levels",
      description: "Clear, progressive levels to learn SQL properly.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Real-World Queries",
      description: "Hands-on challenges that boost practical SQL skills.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "AI Skill Tracking",
      description: "Your learning progress visualized through our AI tree.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "XP, Streaks & Rewards",
      description: "Stay motivated while leveling up your SQL aura.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "See where you stand among learners globally.",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: Target,
      title: "Daily Challenges",
      description: "New SQL puzzles every day to sharpen your skills.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community Solutions",
      description: "Learn from others by exploring alternative approaches.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Award,
      title: "Certificate System",
      description: "Earn verified certificates to showcase your expertise.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Deep insights into your learning patterns and growth.",
      gradient: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <div className="features-container">
      <div className="background-overlay"></div>

      <div className="floating-orb orb-left"></div>
      <div className="floating-orb orb-right"></div>

      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="main-title">Your Toolkit for Fluency.</h1>
          <p className="subtitle">
            From AI guidance to real-world logic—everything you need to master
            the language of data.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="card-glow"></div>

                <div className="card-content">
                  <div className={`icon-box ${feature.colorClass}`}>
                    <Icon className="feature-icon" />
                  </div>

                  <h2 className="feature-title">{feature.title}</h2>

                  <p className="feature-description">{feature.description}</p>
                </div>

                <div className="corner-accent"></div>
              </div>
            );
          })}
        </div>

        <div className="cta-section">
          <div className="cta-box">
            <p className="cta-title">Ready to level up? 🚀</p>
            <p className="cta-text">
              Join thousands of learners mastering SQL today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
