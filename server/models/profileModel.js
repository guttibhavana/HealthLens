const db = require("../config/db");

// Get user profile
async function getProfileById(id) {
  const sql = `
    SELECT id, name, email, age, gender, height_cm, health_goal, created_at
    FROM users
    WHERE id = ?
  `;

  const [rows] = await db.execute(sql, [id]);

  return rows;
}

// Update user profile
async function updateProfile(id, userData) {
  const sql = `
    UPDATE users
    SET
      name = ?,
      age = ?,
      gender = ?,
      height_cm = ?,
      health_goal = ?
    WHERE id = ?
  `;

  const values = [
    userData.name,
    userData.age,
    userData.gender,
    userData.height_cm,
    userData.health_goal,
    id,
  ];

  const [result] = await db.execute(sql, values);

  return result;
}

module.exports = {
  getProfileById,
  updateProfile,
};