const mysql2 = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'June152019!',
    database: 'employee_db'
},
console.log("Connected to the employee_db database.")
);





async function start() {
    const answers  = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role',
            ]
}
    ]);


if (answers.action === 'View All Departments') {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
if (answers.action === 'View All Roles') {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
if (answers.action === 'View All Employees') {
    connection.query('SELECT * FROM employee', function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    });
}
if (answers.action === 'Add A Department') {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What department would you like to add?'
        }
    ])
    connection.query('INSERT INTO department (department_name) VALUES (?)',[answers.newDepartment], (err, result) => {
            if (err) throw err;
            console.table(result);
            start();
    });
}
if (answers.action === 'Add A Role') {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What role would you like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of this role?'
           
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department ID of this role?'
        }


    ]).then(function (answers) {
        connection.query('INSERT INTO role SET ?',
            {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.department_id
            },
            function (err) {
                if (err) throw err;
                console.log('Your role has been added!');
                start();


        })
        });
}


if (answers.action === 'Add An Employee') {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?'
           
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role ID of this employee?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager ID of this employee?'
        },
       
    ]).then(function (answers) {
        connection.query('INSERT INTO employee SET ?',
            {
                first_name: answers.first_name,
                last_name: answers.last_name,
                role_id: answers.role_id,
                manager_id: answers.manager_id
            },
            function (err) {
                if (err) throw err;
                console.log('Your employee has been added!');
                start();
            }
    )});
}


if (answers.action === 'Update An Employee Role') {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'What is the employee ID of the employee you would like to update?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role ID of the employee you would like to update?'  
        },
       
    ]).then(function (answers) {
        connection.query('UPDATE employee SET ? WHERE ?',
            [
                {
                    role_id: answers.role_id
                },
                {
                    employee_id: answers.employee_id
                }
            ],
            function (err) {
                if (err) throw err;
                console.log('Your employee has been updated!');
                start();
            }
    )});
}}


start();


   

