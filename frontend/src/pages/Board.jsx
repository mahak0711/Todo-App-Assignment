// frontend/src/pages/Board.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/api";
import TodoItem from "../components/TodoItem";
import Navbar from "../components/Navbar";
import "../styles/Board.css";

const Board = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await getTodos(id);
      setTodos(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [id]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await createTodo(id, { title });
      setTitle("");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (todoId, updatedData) => {
    try {
      await updateTodo(id, todoId, updatedData);
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (todoId) => {
    if (!window.confirm("Delete this todo?")) return;
    try {
      await deleteTodo(id, todoId);
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="board-page-wrapper">
      <Navbar />
      <main className="board-container">
        <header className="board-header">
          <button className="back-btn" onClick={() => navigate("/dashboard")}>
            ← Back to Workspace
          </button>
          <h2>Board Tasks</h2>
        </header>

        <section className="todo-input-section">
          <form className="todo-form" onSubmit={handleCreate}>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="todo-input"
              required
            />
            <button type="submit" className="todo-add-btn">Add Task</button>
          </form>
        </section>

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-todo-state">
              <p>Your task list is empty. Start adding some!</p>
            </div>
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
      </main>
    </div>
  );
};

export default Board;