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
  createdAt: {
    type: String,
    default: () => {
      const date = new Date();
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      });
    },
  },
});

module.exports = mongoose.model("BookingInvoice", bookingInvoiceSchema);
