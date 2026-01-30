import { useNavigate } from "react-router-dom";

const BoardCard = ({ board, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "15px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{board.title}</span>
      <div>
        <button
          onClick={() => navigate(`/board/${board._id}`)}
          style={{ marginRight: "10px" }}
        >
          Open
        </button>
        <button onClick={() => onDelete(board._id)}>Delete</button>
      </div>
    </div>
  );
};

export default BoardCard;
