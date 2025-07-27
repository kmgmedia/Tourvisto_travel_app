    const mongoose = require("mongoose");

    const tripSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        description: String,
        destinations: {
        type: [String],
        required: true,
        },
        price: {
        type: Number,
        required: true,
        },
        date: {
        type: Date,
        required: true,
        },
        duration: {
        type: String,
        required: true,
        },
        createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        },
    },
    { timestamps: true }
    );

    module.exports = mongoose.model("Trip", tripSchema);
