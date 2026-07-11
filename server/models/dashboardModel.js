const db = require("../config/db");

// Dashboard Summary
async function getDashboardSummary(userId) {
  const [summaryRows] = await db.execute(
    `
    SELECT
      COUNT(*) AS totalLogs,
      ROUND(AVG(weight_kg),2) AS averageWeight,
      ROUND(AVG(sleep_hours),2) AS averageSleep,
      ROUND(AVG(water_intake_l),2) AS averageWater,
      ROUND(AVG(exercise_minutes),2) AS averageExercise
    FROM health_logs
    WHERE user_id = ?
    `,
    [userId]
  );

  const [moodRows] = await db.execute(
    `
    SELECT mood
    FROM health_logs
    WHERE user_id = ?
    ORDER BY log_date DESC
    LIMIT 1
    `,
    [userId]
  );

  const summary = summaryRows[0];
  summary.latestMood = moodRows.length ? moodRows[0].mood : null;

  return summary;
}

// Weight Trend
async function getWeightTrend(userId) {
  const [rows] = await db.execute(
    `
    SELECT
      log_date AS date,
      weight_kg AS weight
    FROM health_logs
    WHERE user_id = ?
    ORDER BY log_date ASC
    `,
    [userId]
  );

  return rows;
}

async function getAllHealthLogs(userId) {
  const [rows] = await db.execute(
    `
    SELECT
      log_date,
      weight_kg,
      sleep_hours,
      water_intake_l,
      exercise_minutes,
      mood,
      systolic_bp,
      diastolic_bp,
      notes
    FROM health_logs
    WHERE user_id = ?
    ORDER BY log_date ASC
    `,
    [userId]
  );

  return rows;
}

module.exports = {
  getDashboardSummary,
  getWeightTrend,
  getAllHealthLogs,
};