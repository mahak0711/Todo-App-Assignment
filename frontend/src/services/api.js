import axios from "axios";

// Set base URL to backend
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get token from localStorage
const token = localStorage.getItem("token");

// Auth APIs
export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

// Boards APIs (with Authorization header)
export const getBoards = () =>
  API.get("/board", { headers: { Authorization: `Bearer ${token}` } });

export const createBoard = (data) =>
  API.post("/board", data, { headers: { Authorization: `Bearer ${token}` } });

export const deleteBoard = (id) =>
  API.delete(`/board/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Todos APIs (with Authorization header)
export const getTodos = (boardId) =>
  API.get(`/todo/${boardId}`, { headers: { Authorization: `Bearer ${token}` } });

export const createTodo = (boardId, data) =>
  API.post(`/todo/${boardId}`, data, { headers: { Authorization: `Bearer ${token}` } });

// UPDATED: use /item/:id
export const updateTodo = (boardId, todoId, data) =>
  API.put(`/todo/item/${todoId}`, data, { headers: { Authorization: `Bearer ${token}` } });

export const deleteTodo = (boardId, todoId) =>
  API.delete(`/todo/item/${todoId}`, { headers: { Authorization: `Bearer ${token}` } });

// Default export (optional)
export default API;
