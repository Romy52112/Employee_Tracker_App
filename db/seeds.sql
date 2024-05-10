INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Salesperson", 80000, 4),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 2),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 250000, 3),
       ("Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id, title, department_name, salary)
VALUES ("John", "Doe", 1, NULL, "Sales Lead", "Sales", 100000),
       ("Mike", "Chan", 2, 1, "Salesperson", "Sales", 80000),
       ("Ashley", "Rodriguez", 3, NULL, "Lead Engineer", "Engineering", 150000),
       ("Kevin", "Tupik", 4, 3, "Software Engineer", "Engineering", 120000),
       ("Kunal", "Singh", 5, NULL, "Account Manager", "Finance", 160000),
       ("Malia", "Brown", 6, 5, "Accountant", "Finance", 125000),
       ("Sarah", "Lourd", 7, NULL, "Legal Team Lead", "Legal", 250000),
       ("Tom", "Allen", 8, 7, "Lawyer", "Legal", 190000);


