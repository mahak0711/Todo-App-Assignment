// frontend/src/pages/Board.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/api";
import TodoItem from "../components/TodoItem";

const Board = () => {
  const { id } = useParams(); // board id
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await getTodos(id);
      setTodos(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch todos");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [id]);

  const handleCreate = async () => {
    if (!title.trim()) return alert("Todo title cannot be empty");
    try {
      await createTodo(id, { title });
      setTitle("");
      fetchTodos();
    } catch (err) {
      console.error(err);
      alert("Failed to create todo");
    }
  };

  const handleUpdate = async (todoId, updatedData) => {
    try {
      await updateTodo(id, todoId, updatedData);
      fetchTodos();
    } catch (err) {
      console.error(err);
      alert("Failed to update todo");
    }
  };

  const handleDelete = async (todoId) => {
    if (!window.confirm("Delete this todo?")) return;
    try {
      await deleteTodo(id, todoId);
      fetchTodos();
    } catch (err) {
      console.error(err);
      alert("Failed to delete todo");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h2>Board Todos</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="New Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "70%" }}
        />
        <button onClick={handleCreate} style={{ padding: "10px 15px" }}>Add Todo</button>
      </div>
      <div>
        {todos.length === 0 ? (
          <p>No todos yet. Add one!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
