CREATE DATABASE IF NOT EXISTS greencommerce_users_db;
USE greencommerce_users_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    day_birth INT NOT NULL CHECK (day_birth BETWEEN 1 AND 31),
    month_birth INT NOT NULL CHECK (month_birth BETWEEN 1 AND 12),
    year_birth INT NOT NULL CHECK (year_birth BETWEEN 1925 AND 2025),
    gender VARCHAR(10) NOT NULL CHECK (gender IN ('Hombre','Mujer','Otro')),
    phone_number VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_photo varchar(200) DEFAULT NULL
);