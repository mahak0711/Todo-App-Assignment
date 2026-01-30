// src/components/BoardCard.jsx
import { useNavigate } from "react-router-dom";
import "../styles/BoardCard.css";

const BoardCard = ({ board, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="board-card">
      <div className="board-card-info" onClick={() => navigate(`/board/${board._id}`)}>
        <h3 className="board-card-title">{board.title}</h3>
        <span className="board-card-badge">Project Board</span>
      </div>
      
      <div className="board-card-actions">
        <button 
          className="btn-open"
          onClick={() => navigate(`/board/${board._id}`)}
        >
          Open
        </button>
        <button 
          className="btn-delete"
          onClick={(e) => {
            e.stopPropagation(); // Prevents navigating when clicking delete
            onDelete(board._id);
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BoardCard;