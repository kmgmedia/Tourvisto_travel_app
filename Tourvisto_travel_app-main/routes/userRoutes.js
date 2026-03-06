const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
  getLatestCustomers,
  getAllCustomers,
} = require("../controllers/userController");

router.get("/latest-customers", protect, adminOnly, getLatestCustomers);
router.get("/customers", protect, adminOnly, getAllCustomers);

module.exports = router;
