const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// Get the latest 10 customers
const getLatestCustomers = asyncHandler(async (req, res) => {
  const customers = await User.find({ role: "user" })
    .sort({ createdAt: -1 })
    .limit(10)
    .select("-password");

  res.status(200).json({ customers });
});

// Get all customers (admin only)
const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await User.find({ role: "user" }).select("-password");
  res.status(200).json({ customers });
});

module.exports = {
  getLatestCustomers,
  getAllCustomers,
};
