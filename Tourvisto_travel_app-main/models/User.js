const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps: true, // <-- Adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model("User", userSchema);
