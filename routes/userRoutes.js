const express = require("express");
const User = require("../models/User");

const router = express.Router();

// REGISTER user
router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// LOGIN user
router.post("/login", async (req, res) => {
  try {
    res.json({ message: "Login route working" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;