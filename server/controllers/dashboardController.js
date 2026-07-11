const dashboardModel = require("../models/dashboardModel");

async function getDashboard(req, res) {
  try {
    const userId = req.user.id;

    const summary = await dashboardModel.getDashboardSummary(userId);
    const weightTrend = await dashboardModel.getWeightTrend(userId);

    return res.status(200).json({
      success: true,
      summary,
      weightTrend,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  getDashboard,
};