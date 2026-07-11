-- ==========================================
-- HealthLens Database Schema
-- ==========================================

CREATE DATABASE IF NOT EXISTS healthlens;

USE healthlens;

-- ==========================================
-- Users Table
-- ==========================================

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,

    age INT DEFAULT NULL,

    gender ENUM('Male','Female','Other') DEFAULT NULL,

    height_cm DECIMAL(5,2) DEFAULT NULL,

    health_goal VARCHAR(100) DEFAULT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id)
);

-- ==========================================
-- Health Logs Table
-- ==========================================

CREATE TABLE IF NOT EXISTS health_logs (

    id INT NOT NULL AUTO_INCREMENT,

    user_id INT NOT NULL,

    log_date DATE NOT NULL,

    weight_kg DECIMAL(5,2) DEFAULT NULL,

    sleep_hours DECIMAL(3,1) DEFAULT NULL,

    water_intake_l DECIMAL(3,1) DEFAULT NULL,

    exercise_minutes INT DEFAULT NULL,

    mood VARCHAR(20) DEFAULT NULL,

    systolic_bp SMALLINT DEFAULT NULL,

    diastolic_bp SMALLINT DEFAULT NULL,

    notes TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    CONSTRAINT fk_health_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT unique_user_log
        UNIQUE(user_id, log_date)

);

-- ==========================================
-- End of Schema
-- ==========================================