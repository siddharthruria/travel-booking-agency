const mongoose = require("mongoose");

const packageBookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  numberOfTravellers: {
    type: Number,
    required: true,
  },
  specialRequest: {
    type: String,
    default: "no special requests",
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TourPackage",
    required: true,
  },
  bookingDates: [
    {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("PackageBooking", packageBookingSchema);
