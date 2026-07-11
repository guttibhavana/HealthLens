const dashboardModel = require("../models/dashboardModel");
const aiService = require("../services/aiService");

async function getHealthInsights(req, res) {
  try {
    const userId = req.user.id;

    const logs = await dashboardModel.getAllHealthLogs(userId);

    if (logs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No health logs found",
      });
    }

    const formattedLogs = logs
      .map(
        (log) => `
Date: ${log.log_date}
Weight: ${log.weight_kg} kg
Sleep: ${log.sleep_hours} hrs
Water: ${log.water_intake_l} L
Exercise: ${log.exercise_minutes} mins
Mood: ${log.mood}
Blood Pressure: ${log.systolic_bp}/${log.diastolic_bp}
Notes: ${log.notes || "None"}
`
      )
      .join("\n-----------------\n");

    const insights = await aiService.generateHealthInsights(formattedLogs);

    return res.status(200).json({
      success: true,
      insights,
    });
  } catch (err) {
    console.error("AI Error:", err.response?.data || err.message);

    return res.status(500).json({
      success: false,
      message: "Failed to generate AI insights",
    });
  }
}

module.exports = {
  getHealthInsights,
};