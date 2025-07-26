const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Trip title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    destinations: {
      type: [
        {
          location: {
            type: String,
            required: [true, "Destination location is required"],
            trim: true,
          },
          activities: [
            {
              type: String,
              trim: true,
            },
          ],
        },
      ],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one destination is required",
      },
      required: [true, "Destinations are required"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Trip must have a creator"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);
