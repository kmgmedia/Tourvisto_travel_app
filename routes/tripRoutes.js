const express = require("express");
const router = express.Router();
const { createTrip } = require("../controllers/tripController");
const { protect } = require("../middleware/auth");
const { adminOnly } = require("../middleware/admin");

router.post("/create-trip", protect, adminOnly, createTrip);

module.exports = router;
