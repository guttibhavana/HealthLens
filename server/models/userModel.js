const db = require("../config/db");

async function createUser(user) {
  const sql = `
    INSERT INTO users
    (name, email, password, age, gender, height_cm, health_goal)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    user.name,
    user.email,
    user.password,
    user.age,
    user.gender,
    user.height_cm,
    user.health_goal,
  ];

  const [result] = await db.execute(sql, values);

  return result;
}

async function findUserByEmail(email) {
  const sql = "SELECT * FROM users WHERE email = ?";

  const [rows] = await db.execute(sql, [email]);

  return rows;
}

module.exports = {
  createUser,
  findUserByEmail,
};