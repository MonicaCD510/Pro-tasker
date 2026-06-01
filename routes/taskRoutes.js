const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;