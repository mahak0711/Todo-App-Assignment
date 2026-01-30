// src/components/BoardCard.jsx
import { useNavigate } from "react-router-dom";

const BoardCard = ({ board, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      display: "inline-block",
      width: "200px",
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{board.name}</h3>
      <button 
        onClick={() => navigate(`/board/${board._id}`)} 
        style={{ margin: "5px", padding: "5px 10px" }}
      >
        Open
      </button>
      <button 
        onClick={() => onDelete(board._id)} 
        style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#ff4d4f", color: "white" }}
      >
        Delete
      </button>
    </div>
  );
};

export default BoardCard;
