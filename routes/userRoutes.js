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
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const validPassword = await user.comparePassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
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

module.exports = router;