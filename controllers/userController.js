const User = require("../models/User");

// @desc    Create new user
// @route   POST /api/users
// @access  Public
const createUser = async (req, res) => {
  try {
    const { name, age, dob, gender, city } = req.body;

    // Validation
    if (!name || !age || !dob || !gender || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.create({ name, age, dob, gender, city });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all users
// @route   GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers };
