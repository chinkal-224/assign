// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const journalRoutes = require("./routes/journalRoutes"); // ✅ Added

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/allora", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Error ❌", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes); // ✅ Added here

// Default
app.get("/", (req, res) => {
  res.send("Allora Backend Running!");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 ✅");
});
