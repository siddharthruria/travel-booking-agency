const express = require("express");
const TourPackage = require("../model/TourPackage");

const router = express.Router();

// ------------------------------- ROUTE 1 -------------------------------

// route (/api/package/all)

// GET -> get all the listed tour packages

router.get("/all", async (_req, res) => {
  try {
    const tourPackages = await TourPackage.find();
    if (!tourPackages.length) {
      return res.status(404).json({
        success: false,
        error: "no packages available at the moment.",
      });
    }

    res.status(200).json({
      success: true,
      total: tourPackages.length,
      tourPackages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 2 -------------------------------

// route (/api/package/:id)

// GET -> get a specific tour packages

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const package = await TourPackage.findById(id);
    if (!package) {
      return res.status(404).json({
        success: false,
        error: "package not found",
      });
    }

    res.status(200).json({
      success: true,
      package,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "internal server error :/",
    });
  }
});

module.exports = router;
