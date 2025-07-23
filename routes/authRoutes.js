// routes/authRoutes.js
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Auth route is working for Tourvisto App!" });
});

module.exports = router;
