const Trip = require("../models/Trip");
const asyncHandler = require("express-async-handler");

// @desc    Create a trip (admin or customer)
// @route   POST /api/trips
// @access  Private
const createTrip = asyncHandler(async (req, res) => {
  const { title, description, destinations, price, date, duration, userId } =
    req.body;

  if (!title || !destinations || !price || !date || !duration) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled" });
  }

  const trip = await Trip.create({
    title,
    description,
    destinations,
    price,
    date,
    duration,
    createdBy: userId && req.user.role === "admin" ? userId : req.user._id,
  });

  res.status(201).json({
    message: "Trip created successfully",
    trip,
  });
});

module.exports = {
  createTrip,
};
