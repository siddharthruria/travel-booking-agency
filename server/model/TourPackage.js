const mongoose = require("mongoose");

const tourPackageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerPerson: {
    type: Number,
    required: true,
  },
  availableDates: [
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
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TourPackage", tourPackageSchema);
