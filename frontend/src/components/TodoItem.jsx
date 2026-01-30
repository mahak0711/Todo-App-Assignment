// frontend/src/components/TodoItem.jsx
const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #ccc"
    }}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onUpdate(todo._id, { completed: !todo.completed })}
          style={{ marginRight: "10px" }}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </span>
      </div>
      <div>
        <button onClick={() => onDelete(todo._id)} style={{ color: "red" }}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
