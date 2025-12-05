import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Calendar,
  LogOut,
  Edit2,
  Save,
  X,
  Database,
  Shield,
  Clock,
  Activity,
} from "lucide-react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(() => {
    return user ? user.name : "";
  });
  const [stats] = useState(() => {
    try {
      const savedStats = localStorage.getItem("userStats");
      return savedStats
        ? JSON.parse(savedStats)
        : { queriesAsked: 0, timeSpent: 0, topicsExplored: 0 };
    } catch {
      return { queriesAsked: 0, timeSpent: 0, topicsExplored: 0 };
    }
  });

  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userStats");
    navigate("/login");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing
      setEditedName(user.name);
    }
    setIsEditing(!isEditing);
  };

  const handleSaveName = () => {
    if (editedName.trim()) {
      const updatedUser = { ...user, name: editedName };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsEditing(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!user) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <div className="header-content">
            <div className="brand-section">
              <div className="brand-icon-small">
                <Database size={24} />
              </div>
              <span className="brand-name">SQLBot</span>
            </div>
            <button
              className="back-button"
              onClick={() => navigate("/../ChatBot")}
            >
              Back to Chat
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-content">
          {/* User Card */}
          <div className="profile-card">
            <div className="card-header">
              <h2 className="card-title">Profile Information</h2>
              <button className="logout-button" onClick={handleLogout}>
                <LogOut size={18} />
                Logout
              </button>
            </div>

            <div className="user-avatar">
              <div className="avatar-circle">
                <User size={48} />
              </div>
            </div>

            <div className="user-info">
              <div className="info-row">
                <div className="info-label">
                  <User size={18} />
                  <span>Full Name</span>
                </div>
                <div className="info-value">
                  {isEditing ? (
                    <div className="edit-input-group">
                      <input
                        type="text"
                        className="edit-input"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        placeholder="Enter your name"
                      />
                      <button className="save-button" onClick={handleSaveName}>
                        <Save size={16} />
                      </button>
                      <button
                        className="cancel-button"
                        onClick={handleEditToggle}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="display-value">
                      <span>{user.name}</span>
                      <button
                        className="edit-button"
                        onClick={handleEditToggle}
                      >
                        <Edit2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="info-row">
                <div className="info-label">
                  <Mail size={18} />
                  <span>Email Address</span>
                </div>
                <div className="info-value">
                  <span>{user.email}</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-label">
                  <Calendar size={18} />
                  <span>Last Login</span>
                </div>
                <div className="info-value">
                  <span>{formatDate(user.loginTime)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon queries-icon">
                <Activity size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.queriesAsked}</div>
                <div className="stat-label">Queries Asked</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon time-icon">
                <Clock size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.timeSpent} min</div>
                <div className="stat-label">Time Spent</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon topics-icon">
                <Database size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.topicsExplored}</div>
                <div className="stat-label">Topics Explored</div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="settings-card">
            <h2 className="card-title">Account Settings</h2>

            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <Shield size={20} />
                  <div className="setting-text">
                    <div className="setting-name">Privacy & Security</div>
                    <div className="setting-description">
                      Manage your privacy settings
                    </div>
                  </div>
                </div>
                <button className="setting-action">Manage</button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <Database size={20} />
                  <div className="setting-text">
                    <div className="setting-name">Data & Storage</div>
                    <div className="setting-description">
                      View your conversation history
                    </div>
                  </div>
                </div>
                <button className="setting-action">View</button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <Activity size={20} />
                  <div className="setting-text">
                    <div className="setting-name">Activity Log</div>
                    <div className="setting-description">
                      Track your SQL learning progress
                    </div>
                  </div>
                </div>
                <button className="setting-action">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
