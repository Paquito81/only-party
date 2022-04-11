const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Teammanager = require('./lib/Teammanager');
const inquirer = require('inquirer');
const fs = require('fs');

//create an empty array to store team members
//let teamMembers = [];
const engineers= [];
const intern = [];
const teammanager =[];
// create questions for team
const addTeammanager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the team manager's Employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's phone number?",
        },
    ])
        .then((answers) => {
            //console.log('Answer:', answers.name, answers.employeeId, answers.email, answers.officeNumber);
            const manager = new Teammanager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
            console.log(manager);
            teamMembers.push(manager)

        });
}
 
const addEngineer = () => {
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
            name: 'github',
            message: "What is the pizzamaker's Github username?",
        },

    ])
         .then((answers) => {
            //console.log('Answer:', answers.name, answers.employeeId, answers.email, answers.officeNumber);
            const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
            console.log(engineer);
            teamMembers.push(engineer)

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
        //console.log('Answer:', answers.name, answers.employeeId, answers.email, answers.officeNumber);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        console.log(intern);
        teamMembers.push(intern)

    });
} 

//create a function to display the menu for building team members

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "What team would you like to add?",
            choices: ["Engineer", "Intern", "none"]
        },
    ]) 

}
function buildTeam() {
    addTeammanager();

}
buildTeam()