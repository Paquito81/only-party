const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Teammanager = require('./lib/Teammanager');
const Employee = require('./lib/Employee');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')

//create an empty array to store team members
let teamMembers = []
// const engineer= [];
// const intern = []; 
// const teammanager =[];

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
            name: 'id',
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
            const noobManager = new Teammanager(answers.name, answers.id, answers.email, answers.officeNumber);
            // console.log(noobManager);
            teamMembers.push(noobManager);
            console.log(teamMembers);
            addTeamMembers();

        });
}
 
const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's Employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username?",
        },

    ])
        .then((answers) => {
            //console.log('Answer:', answers.name, answers.employeeId, answers.email, answers.officeNumber);
            const noobEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            //console.log(noobEngineer);
            teamMembers.push(noobEngineer);
            console.log(teamMembers); 
            addTeamMembers();

        });
}


const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "Where does the intern go to school?",
        },
    ])
    .then((answers) => {
        //console.log('Answer:', answers.name, answers.employeeId, answers.email, answers.officeNumber);
        const noobIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        //console.log(noobIntern);
        teamMembers.push(noobIntern);
        console.log(teamMembers);
        addTeamMembers();

    });
} 

//create a function to display the menu for building team members

function addTeamMembers () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What teammate would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "none"]
        },
    ])
    .then((answers) => {
        switch(answers.role) {
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "Manager":
                addTeammanager();
                break;
                
            case "none":
                createHTML();    
                
                
            default:
                console.log(teamMembers);
                writeToFile(teamMembers);    
        };
    });


};

function createHTML() {
    console.log("creating HTML");
    writeToFile();
} 

addTeamMembers();

function writeToFile() {
    fs.writeFileSync("./dist/index.html", generateHTML(teamMembers), err => {
        if (err) throw new Error(err);

    });
}
// function buildTeam() {
//     addTeammanager();

// }
