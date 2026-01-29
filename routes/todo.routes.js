const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

const auth = require("../middleware/auth.middleware");

const router = express.Router();

router.use(auth);

// Create todo inside a board
router.post("/:boardId", createTodo);

// Get todos for a specific board
router.get("/:boardId", getTodos);

// Update & delete remain todo-specific
router.put("/item/:id", updateTodo);
router.delete("/item/:id", deleteTodo);

module.exports = router;
