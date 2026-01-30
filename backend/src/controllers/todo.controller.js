const Todo = require("../models/Todo");

// CREATE TODO
const createTodo = async (req, res) => {
  try {
    const { title} = req.body;
    const { boardId } = req.params;
    if (!title || !boardId) {
      return res.status(400).json({ message: "Title and boardId are required" });
    }

    const todo = await Todo.create({
      title,
      board: boardId,
      user: req.userId,
    });

    res.status(201).json({ success: true, data: todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET TODOS BY BOARD
const getTodos = async (req, res) => {
  try {
    const { boardId } = req.params;

    const todos = await Todo.find({
      board: boardId,
      user: req.userId,
    }).sort({ createdAt: -1 });

    res.json({ success: true, data: todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE TODO
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.userId },
      req.body,
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ success: true, data: todo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE TODO
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({
      _id: id,
      user: req.userId,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ success: true, message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
