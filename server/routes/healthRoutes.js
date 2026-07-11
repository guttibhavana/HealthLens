const express = require("express");
const router = express.Router();

const healthController = require("../controllers/healthController");
const authenticateToken = require("../middleware/authMiddleware");

// =========================
// Add Health Log
// POST /api/health
// =========================
router.post("/", authenticateToken, healthController.addHealthLog);

// =========================
// Get All Health Logs
// GET /api/health
// =========================
router.get("/", authenticateToken, healthController.getHealthLogs);

// =========================
// Get Single Health Log
// GET /api/health/:id
// =========================
router.get("/:id", authenticateToken, healthController.getHealthLog);

// =========================
// Update Health Log
// PUT /api/health/:id
// =========================
router.put("/:id", authenticateToken, healthController.updateHealthLog);

// =========================
// Delete Health Log
// DELETE /api/health/:id
// =========================
router.delete("/:id", authenticateToken, healthController.deleteHealthLog);

module.exports = router;