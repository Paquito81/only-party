const Pizzamaker = require('./lib/Pizzamaker');
const Delivery = require('./lib/Delivery');
const Teammanager = require('./lib/Teammeanager');
const inquirer = require('inquirer');
const fs = require('fs');

// create questions for team
const addTeammanager =
    inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: 'What is the team manager name?',
    },
    {
        type: 'input',
        name: 'Employee ID',
        message: 'What is the team managers Employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team managers email?',
    },
    {
        type: 'input',
        name: 'office number',
        message: 'What is the team managers phone number?',
    }
])
.then((answers) => {

})

const addPizzamaker =
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'EmployeeID', 
        message: 'What is the engineers Employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email?',
    },
    {
        type: 'input',
        name: 'Github', 
        message: 'What is the engineers Github username?',
    },

])
.then((answers) => {

})

const addDelivery =
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'Employee ID',
        message: 'What is the interns employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the inters email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where does the inter go to school?',
    },
])
.then((answers) => {

})