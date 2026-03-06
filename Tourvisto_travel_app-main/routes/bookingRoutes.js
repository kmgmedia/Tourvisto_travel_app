const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  bookTrip,
  getLatestBookings,
} = require("../controllers/bookingController");

router.post("/book", protect, bookTrip);
router.get("/latest", protect, getLatestBookings);

module.exports = router;
