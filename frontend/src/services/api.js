import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Your backend URL
});

// Auth APIs
export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

// Boards APIs
export const getBoards = () => API.get("/boards");
export const createBoard = (data) => API.post("/boards", data);
export const updateBoard = (id, data) => API.put(`/boards/${id}`, data);
export const deleteBoard = (id) => API.delete(`/boards/${id}`);

// Todos APIs
export const getTodos = (boardId) => API.get(`/boards/${boardId}/todos`);
export const createTodo = (boardId, data) => API.post(`/boards/${boardId}/todos`, data);
export const updateTodo = (boardId, todoId, data) => API.put(`/boards/${boardId}/todos/${todoId}`, data);
export const deleteTodo = (boardId, todoId) => API.delete(`/boards/${boardId}/todos/${todoId}`);

export default API;
