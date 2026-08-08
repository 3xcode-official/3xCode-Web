-- 3xCode database schema
-- The landing page does NOT require MySQL for its basic contact form.
-- This schema is optional if you later decide to save inquiries in MySQL.

CREATE DATABASE IF NOT EXISTS xcode;
USE xcode;

CREATE TABLE IF NOT EXISTS contact_messages (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(190) NOT NULL,
    phone VARCHAR(40) NULL,
    service VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
