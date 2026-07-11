const express = require("express");
const router = express.Router();

const aiController = require("../controllers/aiController");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/", authenticateToken, aiController.getHealthInsights);

module.exports = router;