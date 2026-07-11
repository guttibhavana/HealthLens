const db = require("../config/db");

// Add Health Log
async function addHealthLog(userId, logData) {
  const sql = `
    INSERT INTO health_logs
    (
      user_id,
      log_date,
      weight_kg,
      sleep_hours,
      water_intake_l,
      exercise_minutes,
      mood,
      systolic_bp,
      diastolic_bp,
      notes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    userId,
    logData.log_date,
    logData.weight_kg,
    logData.sleep_hours,
    logData.water_intake_l,
    logData.exercise_minutes,
    logData.mood,
    logData.systolic_bp,
    logData.diastolic_bp,
    logData.notes,
  ];

  const [result] = await db.execute(sql, values);
  return result;
}

// Get all logs
async function getHealthLogs(userId) {
  const [rows] = await db.execute(
    `SELECT * FROM health_logs
     WHERE user_id = ?
     ORDER BY log_date DESC`,
    [userId]
  );

  return rows;
}

// Get one log
async function getHealthLogById(id, userId) {
  const [rows] = await db.execute(
    `SELECT *
     FROM health_logs
     WHERE id = ? AND user_id = ?`,
    [id, userId]
  );

  return rows;
}

// Update log
async function updateHealthLog(id, userId, data) {
  const sql = `
    UPDATE health_logs
    SET
      weight_kg=?,
      sleep_hours=?,
      water_intake_l=?,
      exercise_minutes=?,
      mood=?,
      systolic_bp=?,
      diastolic_bp=?,
      notes=?
    WHERE id=? AND user_id=?
  `;

  const values = [
    data.weight_kg,
    data.sleep_hours,
    data.water_intake_l,
    data.exercise_minutes,
    data.mood,
    data.systolic_bp,
    data.diastolic_bp,
    data.notes,
    id,
    userId,
  ];

  const [result] = await db.execute(sql, values);

  return result;
}

// Delete log
async function deleteHealthLog(id, userId) {
  const [result] = await db.execute(
    `DELETE FROM health_logs
     WHERE id=? AND user_id=?`,
    [id, userId]
  );

  return result;
}

module.exports = {
  addHealthLog,
  getHealthLogs,
  getHealthLogById,
  updateHealthLog,
  deleteHealthLog,
};