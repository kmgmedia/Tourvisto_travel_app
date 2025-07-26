const Trip = require("../models/Trip");

const createTrip = async (req, res) => {
  const { title, description, destinations, price, date, duration } = req.body;

  // Validate required fields
  if (
    !title ||
    !Array.isArray(destinations) ||
    destinations.length === 0 ||
    !price ||
    !date ||
    !duration
  ) {
    return res
      .status(400)
      .json({
        message: "All required fields must be filled, including destinations",
      });
  }

  try {
    const newTrip = await Trip.create({
      title,
      description,
      destinations,
      price,
      date,
      duration,
      createdBy: req.user._id, // Ensure req.user is set by auth middleware
    });

    res.status(201).json({
      message: "Trip created successfully",
      trip: newTrip,
    });
  } catch (error) {
    console.error("Create Trip Error:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createTrip,
};
