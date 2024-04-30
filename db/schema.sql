DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- Creating table for Department --
CREATE TABLE Department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_Name VARCHAR(30) NOT NULL
);

-- Creating table for Role --
CREATE TABLE Role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- Creating table for Employee --
CREATE TABLE Employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_Name VARCHAR(30) NOT NULL,
    last_Name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) 
    REFERENCES Role(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES Employee(id)
    ON DELETE SET NULL
);