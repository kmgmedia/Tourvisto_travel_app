const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { createTrip } = require("../controllers/tripController");

router.post("/create", protect, createTrip);

module.exports = router;
