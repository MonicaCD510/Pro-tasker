const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/auth");

const router = express.Router();

// CREATE project
router.post("/", auth, async (req, res) => {
  try {
    const project = await Project.create({
      name: req.body.name,
      description: req.body.description,
      owner: req.user.id,
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET logged-in user's projects
router.get("/", auth, async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user.id });

    res.json(projects);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;