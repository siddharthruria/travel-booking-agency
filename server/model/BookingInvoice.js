const mongoose = require("mongoose");

const bookingInvoiceSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PackageBooking",
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TourPackage",
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("BookingInvoice", bookingInvoiceSchema);
