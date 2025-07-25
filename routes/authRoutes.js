const express = require("express");
const router = express.Router();
const { registerAdmin, loginUser } = require("../controllers/authController");

// Admin registration route
router.post("/admin/signup", registerAdmin);
router.post("/login", loginUser);

// Test Route
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Welcome to Tourvisto Travel App API" });
});

module.exports = router;
