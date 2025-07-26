const express = require("express");
const router = express.Router();
const { createTrip } = require("../controllers/tripController");
const { protect } = require("../middleware/authMiddleware");

// Since base path is /api/trips in index.js, we just need /create here
router.post("/create", protect, createTrip);

module.exports = router;
