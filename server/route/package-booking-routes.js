const express = require("express");
const PackageBooking = require("../model/PackageBooking");
const TourPackage = require("../model/TourPackage");
const BookingInvoice = require("../model/BookingInvoice");

const router = express.Router();

// ------------------------------- ROUTE 1 -------------------------------

// route (/api/booking/)

// POST -> create a booking

router.post("/", async (req, res) => {
  const {
    packageId,
    name,
    email,
    phone,
    numberOfTravellers,
    specialRequest,
    bookingDates,
  } = req.body;

  try {
    const newBooking = await PackageBooking({
      name,
      email,
      phone,
      numberOfTravellers,
      specialRequest,
      package: packageId,
      bookingDates,
    });
    await newBooking.save();

    const tourPackage = await TourPackage.findById(packageId);

    const totalPrice = tourPackage.pricePerPerson * numberOfTravellers;

    const bookingInvoice = new BookingInvoice({
      booking: newBooking._id,
      package: tourPackage._id,
      totalPrice,
    });
    await bookingInvoice.save();

    res.status(201).json({
      success: true,
      message: "booking created successfully",
      newBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 2 -------------------------------

// route (/api/booking/yourBookings)

// GET -> get all your bookings

router.get("/yourBookings", async (_req, res) => {
  try {
    const bookings = await PackageBooking.find();
    if (!bookings.length) {
      return res.status(404).json({
        success: false,
        error: "no bookings made yet.",
      });
    }

    res.status(200).json({
      success: true,
      total: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 3 -------------------------------

// route (/api/booking/:id)

// GET -> get a specific booking

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await PackageBooking.findById(id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: "booking not found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

module.exports = router;
