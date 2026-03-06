const Booking = require("../models/Booking");
const Trip = require("../models/Trip");

// Book a trip
const bookTrip = async (req, res) => {
  const { tripId } = req.body;
  const userId = req.user._id;

  try {
    const trip = await Trip.findById(tripId);
    if (!trip) return res.status(404).json({ message: "Trip not found" });

    const booking = await Booking.create({
      trip: tripId,
      customer: userId,
    });

    res.status(201).json({
      message: "Trip booked successfully",
      booking,
    });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get latest trip bookings (for customers only)
const getLatestBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({}) // or { customer: req.user._id } to show user-specific
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("trip", "title destinations")
      .populate("customer", "name email");

    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Get bookings error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  bookTrip,
  getLatestBookings,
};
