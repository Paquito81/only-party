const Pizzamaker = require('./lib/Pizzamaker');
const Delivery = require('./lib/Delivery');
const Teammanager = require('./lib/Teammeanager');
const inquirer = require('inquirer');
const fs = require('fs');

// create questions for team
const addTeammanager = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'Employee ID',
            message: "What is the team manager's Employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
        type: 'input',
        name: 'office number',
        message: "What is the team manager's phone number?",
        },
    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, ''));

    })
}
const addPizzamaker = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the pizzamaker's name?",
        },
        {
            type: 'input',
            name: 'EmployeeID', 
            message: "What is the pizzamaker's Employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the pizzamaker's email?",
        },
        {
            type: 'input',
            name: 'Github', 
            message: "What is the pizzamaker's Github username?",
        },

    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, ''));

    });
}

const addDelivery = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the delivery driver's name?",
        },
        {
            type: 'input',
            name: 'Employee ID',
            message: "What is the delivery driver's employee ID?",
        },
        {
        type: 'input',
        name: 'email',
        message: "What is the delivery driver's email?",
        },
        {
        type: 'input',
        name: 'school',
        message: "Where does the delivery driver go to school?",
        },
    ])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, ''));

    }); 
}    