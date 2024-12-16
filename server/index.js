// entry point of the backend application

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();
const allowedOrigins = ["http://localhost:3000"];

// function for connecting the server to the mongodb database through mongoose
connectDB();

// allowing CORS to communitcate between /client and /server
app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("not allowed by cors"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// importing routes
const tourPackageRoutes = require("./route/tour-package-routes");
const packageBookingRoutes = require("./route/package-booking-routes");
const adminRoutes = require("./route/admin-routes");

// mounting routes
app.use("/api/package", tourPackageRoutes); // [ http://localhost:5555/api/package/... ]
app.use("/api/booking", packageBookingRoutes); // [ http://localhost:5555/api/booking/... ]
app.use("/api/admin", adminRoutes); // [ http://localhost:5555/api/admin/... ]

// home route "/" for the backend
app.get("/", (_req, res) => {
  res.send("express server is running here...");
});

// connecting to port 5555
app.listen(PORT, () => {
  console.log(`server listening to requests on port ${PORT}`);
});
