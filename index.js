const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// connection
mongoose.connect(
  process.env.connect,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connection successfully")
);

const app = express();

/// available routes

const userRoutes = require("./routes/user");

///  middleware
app.use(express.json());

app.use(cors());

/// route middleware
app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("server started"));
