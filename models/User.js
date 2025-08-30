const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  city: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
