const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Teammanager = require('./lib/Teammeanager');

const createTeammanager = [
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
]

const createEngineer = [
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

]

const createIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the inters name?',
    },
    {
        type: 'input',
        name: 'Employee ID',
        message: 'What is the inters employee ID?',
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
]