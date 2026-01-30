// frontend/src/components/TodoItem.jsx
import "../styles/TodoItem.css";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "is-completed" : ""}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdate(todo._id, { completed: !todo.completed })}
          />
          <span className="checkmark"></span>
        </label>
        <span className="todo-text">
          {todo.title}
        </span>
      </div>
      <div className="todo-actions">
        <button 
          className="todo-delete-btn" 
          onClick={() => onDelete(todo._id)}
          title="Delete task"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;