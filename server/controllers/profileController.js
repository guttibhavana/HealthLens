const profileModel = require("../models/profileModel");

// Get Profile
async function getProfile(req, res) {
  try {
    const userId = req.user.id;

    const user = await profileModel.getProfileById(userId);

    if (user.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user: user[0],
    });

  } catch (err) {
    console.error("Get Profile Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// Update Profile
async function updateProfile(req, res) {
  try {
    const userId = req.user.id;

    const {
      name,
      age,
      gender,
      height_cm,
      health_goal,
    } = req.body;

    await profileModel.updateProfile(userId, {
      name,
      age,
      gender,
      height_cm,
      health_goal,
    });

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
    });

  } catch (err) {
    console.error("Update Profile Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  getProfile,
  updateProfile,
};