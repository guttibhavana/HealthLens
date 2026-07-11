const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const healthRoutes = require("./routes/healthRoutes");
const aiRoutes = require("./routes/aiRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const authenticateToken = require("./middleware/authMiddleware");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);


// Test Route
app.get("/", (req, res) => {
    res.send("🚀 HealthLens Backend Running...");
});

app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

module.exports = app;