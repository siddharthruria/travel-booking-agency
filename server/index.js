require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT;

const app = express();

app.get("/", (_req, res) => {
  res.send("express server is running here...");
});

app.listen(PORT, () => {
  console.log(`server listening to requests on port ${PORT}`);
});
