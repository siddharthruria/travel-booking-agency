require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT;

const app = express();

// function for connecting the server to the mongodb database through mongoose
connectDB();

app.use(express.json());

// home route "/" for the backend
app.get("/", (_req, res) => {
  res.send("express server is running here...");
});

// connecting to port 5555
app.listen(PORT, () => {
  console.log(`server listening to requests on port ${PORT}`);
});
