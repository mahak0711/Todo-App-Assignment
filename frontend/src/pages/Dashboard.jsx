import { useState, useEffect } from "react";
import { getBoards, createBoard, deleteBoard } from "../services/api";
import BoardCard from "../components/BoardCard";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState(""); // <-- make sure this exists

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

  // Correctly use the `title` state here
  const handleCreate = async () => {
    if (!title.trim()) return alert("Board title cannot be empty");
    try {
      await createBoard({ title }); // <-- send { title } to backend
      setTitle(""); // clear input
      fetchBoards(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to create board");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this board?")) return;
    try {
      await deleteBoard(id);
      fetchBoards();
    } catch (err) {
      console.error(err);
      alert("Failed to delete board");
    }
  };

  return (
    <>
    <Navbar />
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h2>Your Boards</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="New Board Title"
          value={title} // <-- must match useState
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "70%" }}
        />
        <button onClick={handleCreate} style={{ padding: "10px 15px" }}>
          Create Board
        </button>
      </div>

      {boards.length === 0 ? (
        <p>No boards yet. Create one!</p>
      ) : (
        boards.map((board) => (
          <BoardCard
            key={board._id}
            board={board}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
    </>
  );
};

export default Dashboard;
