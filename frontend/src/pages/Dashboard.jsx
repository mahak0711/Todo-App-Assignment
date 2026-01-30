// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { getBoards, createBoard, deleteBoard } from "../services/api";
import BoardCard from "../components/BoardCard";
import Navbar from "../components/Navbar";
import "../styles/DashBoard.css";

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState("");

  const fetchBoards = async () => {
    try {
      const res = await getBoards();
      setBoards(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const handleCreate = async (e) => {
    // 1. Prevent the page from refreshing
    e.preventDefault();
    
    if (!title.trim()) return;

    try {
      // 2. Add a log to see if this is actually running
      console.log("Creating board with title:", title);
      
      await createBoard({ title });
      setTitle(""); // Clear input
      fetchBoards(); // Refresh the list
    } catch (err) {
      console.error("Create Error:", err);
      alert("Could not create board. Is the backend running?");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this board?")) return;
    try {
      await deleteBoard(id);
      fetchBoards();
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-text">
            <h1>Workspace</h1>
            <p>Manage your projects and tasks</p>
          </div>
          
          {/* Use a form to ensure the button triggers correctly */}
          <form className="create-board-box" onSubmit={handleCreate}>
            <input
              type="text"
              placeholder="Enter board title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="dashboard-input"
              required
            />
            <button type="submit" className="create-btn">
              + New Board
            </button>
          </form>
        </header>

        <section className="boards-grid">
          {boards.length === 0 ? (
            <div className="empty-state">
              <p>No boards found. Start by creating one above!</p>
            </div>
          ) : (
            boards.map((board) => (
              <BoardCard
                key={board._id}
                board={board}
                onDelete={handleDelete}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;