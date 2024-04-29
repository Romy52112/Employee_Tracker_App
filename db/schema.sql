CREATE DATABASE employee_db;
USE employee_db;

-- Creating table for Department --
CREATE TABLE Department (
    department_ID INT PRIMARY KEY,
    department_Name VARCHAR(30) NOT NULL
);

-- Creating table for Role --
CREATE TABLE Role (
    role_ID INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_ID INT,
    FOREIGN KEY (department_ID) REFERENCES Department(department_ID)
);

-- Creating table for Employee --
CREATE TABLE Employee (
    employee_ID INT PRIMARY KEY,
    first_Name VARCHAR(30) NOT NULL,
    last_Name VARCHAR(30) NOT NULL,
    role_ID INT,
    manager_ID INT,
    FOREIGN KEY (role_ID) REFERENCES Role(role_ID),
    FOREIGN KEY (manager_ID) REFERENCES Employee(employee_ID)
);