const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// =======================
// Register User
// =======================
async function register(req, res) {
  console.log("Register API hit");

  try {
    const {
      name,
      email,
      password,
      age,
      gender,
      height_cm,
      health_goal,
    } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    // Check if email already exists
    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    await userModel.createUser({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
      height_cm,
      health_goal,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });

  } catch (err) {
    console.error("Register Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// =======================
// Login User
// =======================
async function login(req, res) {
  console.log("Login API hit");

  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Check if user exists
const users = await userModel.findUserByEmail(email);

console.log("Users Found:", users);

if (users.length === 0) {
  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
}

const user = users[0];

console.log("Entered Password:", password);
console.log("Stored Password:", user.password);

const isPasswordMatch = await bcrypt.compare(password, user.password);

console.log("Password Match:", isPasswordMatch);

if (!isPasswordMatch) {
  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
}

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.error("Login Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  register,
  login,
};