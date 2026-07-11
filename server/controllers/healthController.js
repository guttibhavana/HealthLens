const healthModel = require("../models/healthModel");

// ===============================
// Add Health Log
// ===============================
async function addHealthLog(req, res) {
  try {
    const userId = req.user.id;

    const {
      log_date,
      weight_kg,
      sleep_hours,
      water_intake_l,
      exercise_minutes,
      mood,
      systolic_bp,
      diastolic_bp,
      notes,
    } = req.body;

    // Basic validation
    if (!log_date) {
      return res.status(400).json({
        success: false,
        message: "Log date is required",
      });
    }

    await healthModel.addHealthLog(userId, {
      log_date,
      weight_kg,
      sleep_hours,
      water_intake_l,
      exercise_minutes,
      mood,
      systolic_bp,
      diastolic_bp,
      notes,
    });

    return res.status(201).json({
      success: true,
      message: "Health log added successfully",
    });

  } catch (err) {
    console.error("Add Health Log Error:", err);

    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "Health log for this date already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// ===============================
// Get All Health Logs
// ===============================
async function getHealthLogs(req, res) {
  try {
    const userId = req.user.id;

    const logs = await healthModel.getHealthLogs(userId);

    return res.status(200).json({
      success: true,
      logs,
    });

  } catch (err) {
    console.error("Get Health Logs Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// ===============================
// Get Single Health Log
// ===============================
async function getHealthLog(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const log = await healthModel.getHealthLogById(id, userId);

    if (log.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Health log not found",
      });
    }

    return res.status(200).json({
      success: true,
      log: log[0],
    });

  } catch (err) {
    console.error("Get Health Log Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// ===============================
// Update Health Log
// ===============================
async function updateHealthLog(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const result = await healthModel.updateHealthLog(
      id,
      userId,
      req.body
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Health log not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Health log updated successfully",
    });

  } catch (err) {
    console.error("Update Health Log Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// ===============================
// Delete Health Log
// ===============================
async function deleteHealthLog(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const result = await healthModel.deleteHealthLog(id, userId);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Health log not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Health log deleted successfully",
    });

  } catch (err) {
    console.error("Delete Health Log Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  addHealthLog,
  getHealthLogs,
  getHealthLog,
  updateHealthLog,
  deleteHealthLog,
};