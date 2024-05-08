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
                'Delete A Department',
                'Delete A Role',
                'Delete An Employee',
                
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
    connection.query('INSERT INTO department (department_name) VALUES (?)',[answers.department], (err, result) => {
            if (err) throw err;
            // console.table(result);
            start();
    });
}
if (answers.action === 'Add A Role') {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'What role would you like to add?'
        },
        {
            type: 'input',
            name: 'newSalary',
            message: 'What is the salary of this role?'
           
        },
        {
            type: 'input',
            name: 'newDepartmentId',
            message: 'What is the department ID of this role?'
        }
    ])
        connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',[answers.newRole, answers.newSalary, answers.newDepartmentId], (err, result) => {
            if (err) throw err;
            // console.table(result);
            start();
});
}
if (answers.action === 'Add An Employee') {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name of the employee?'
           
        },
        {
            type: 'input',
            name: 'newRoleId',
            message: 'What is the role ID of this employee?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manager ID of this employee?'
        }
       
    ])
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',[answers.firstName, answers.lastName, answers.newRoleId, answers.managerId], (err, result) => {
            if (err) throw err;
            // console.table(result);
            start();
    });
}
if (answers.action === 'Update An Employee Role') {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'updateEmployee',
            message: 'What is the employee ID of the employee you would like to update?'
        },
        {
            type: 'input',
            name: 'updateRole',
            message: 'What is the role ID of the employee you would like to update?'  
        },
       
    ])
    connection.query('UPDATE employee SET role_id = ? WHERE id = ?',[answers.updateRole, answers.updateEmployee], (err, result) => {
        if (err) throw err;
        // console.table(result);
        start();
    });
}
if (answers.action === 'Delete A Department') {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'deleteDepartment',
            message: 'What is the department ID of the department you would like to delete?'
        }
    ]);

    connection.query('DELETE FROM department WHERE id = ?', [answers.deleteDepartment], (err, result) => {
        if (err) throw err;
        // console.table(result);
        start();
    });
}
if (answers.action === 'Delete A Role') {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'deleteRole',
                message: 'What is the role ID of the role you would like to delete?'
            }
           
        ])
        connection.query('DELETE FROM role WHERE id = ?',[answers.deleteRole], (err, result) => {
            if (err) throw err;
            // console.table(result);
            start();
        })
    }
if (answers.action === 'Delete An Employee') {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'deleteEmployee',
                message: 'What is the employee ID of the employee you would like to delete?'
            }
           
        ])
        connection.query('DELETE FROM employee WHERE id = ?',[answers.deleteEmployee], (err, result) => {
            if (err) throw err;
            // console.table(result);
            start();
        })
    }
}
start();



   

