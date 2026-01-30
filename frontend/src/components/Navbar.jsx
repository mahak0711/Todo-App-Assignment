// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    navigate("/"); // redirect to login
  };

  const goDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#2c3e50",
        color: "#fff",
        marginBottom: "20px",
      }}
    >
      <div
        style={{ cursor: "pointer", fontWeight: "bold", fontSize: "18px" }}
        onClick={goDashboard}
      >
        To-Do App
      </div>
      <button
        onClick={handleLogout}
        style={{
          padding: "5px 10px",
          backgroundColor: "#e74c3c",
          border: "none",
          borderRadius: "4px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
 