const express = require("express");
const TourPackage = require("../model/TourPackage");

const router = express.Router();

// ------------------------------- ROUTE 1 -------------------------------

// route (/api/admin/package/create)

// POST -> create tour package

router.post("/package/create", async (req, res) => {
  const { title, description, pricePerPerson, availableDates, image } =
    req.body;
  try {
    const newPackage = new TourPackage({
      title,
      description,
      pricePerPerson,
      availableDates,
      image,
    });
    await newPackage.save();

    res.status(201).json({
      success: true,
      message: "new tour package created successfully",
      newPackage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 2 -------------------------------

// route (/api/admin/package/:id)

// PUT -> update tour package

router.put("/package/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedPackage = await TourPackage.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedPackage) {
      return res.status(404).json({
        success: false,
        error: "package not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "tour package details updated successfully",
      updatedPackage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 3 -------------------------------

// route (/api/admin/package/:id)

// DELETE -> delete tour package

router.delete("/package/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackage = await TourPackage.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).json({
        success: false,
        error: "package not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "tour pacakge deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

module.exports = router;
