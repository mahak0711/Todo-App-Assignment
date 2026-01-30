// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const goDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={goDashboard}>
        <span className="brand-dot"></span>
        To-Do App
      </div>
      
      <div className="navbar-actions">
        {/* We can add a placeholder for user info here if needed later */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;