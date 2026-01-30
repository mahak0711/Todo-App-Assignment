// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { getBoards, createBoard, deleteBoard } from "../services/api";
import BoardCard from "../components/BoardCard";

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [name, setName] = useState("");

  // Fetch boards from backend
  const fetchBoards = async () => {
    try {
      const res = await getBoards();
      setBoards(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch boards");
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  // Create new board
  const handleCreate = async () => {
    if (!name.trim()) return alert("Board name cannot be empty");
    try {
      await createBoard({ name });
      setName("");
      fetchBoards(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to create board");
    }
  };

  // Delete board
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this board?")) return;
    try {
      await deleteBoard(id);
      fetchBoards();
    } catch (err) {
      console.error(err);
      alert("Failed to delete board");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Boards</h2>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="New Board Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "250px" }}
        />
        <button onClick={handleCreate} style={{ padding: "10px 20px" }}>Create Board</button>
      </div>
      <div>
        {boards.length === 0 ? (
          <p>No boards available. Create one!</p>
        ) : (
          boards.map((board) => (
            <BoardCard key={board._id} board={board} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
