const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generate = require('./src/generate');

const path = require ('path');
const fs = require('fs');
const inquirer = require('inquirer');

const managerArray = [];
const internArray = [];
const engineerArray = [];
const writePath = path.resolve(__dirname, 'dist/index.html');

const managerQuestions = [
  {
    name: 'managerName',
    type: 'input',
    message: 'Who is the team manager?',
  },
  {
    name: 'managerID',
    type: 'input',
    message: "What is the manager's employee ID number?",
  },
  {
    name: 'managerEmail',
    type: 'input',
    message: "What is the manager's email address?",
  },
  {
    name: 'managerPhone',
    type: 'input',
    message: "What is the manager's office phone number?",
  },
];

const addEmployee = [
  {
    name: 'addEmployee',
    type: 'list',
    message: 'Are there any members of the team that need to be added?',
    choices: [
      'Yes, an intern.',
      'Yes, an engineer.',
      'No, all team members have been added.'
    ],
  },
];

const internQuestions = [
  {
    name: 'internName',
    type: 'input',
    message: "What is the intern's name?",
  },
  {
    name: 'internID',
    type: 'input',
    message: "What is the interns's employee ID number?",
  },
  {
    name: 'internEmail',
    type: 'input',
    message: "What is the intern's email address?",
  },
  {
    name: 'internSchool',
    type: 'input',
    message: "Where did the intern graduate from school?",
  },
];

const engineerQuestions = [
  {
    name: 'engineerName',
    type: 'input',
    message: "What is the engineer's name?",
  },
  {
    name: 'engineerID',
    type: 'input',
    message: "What is the engineer's employee ID number?",
  },
  {
    name: 'engineerEmail',
    type: 'input',
    message: "What is the engineer's email address?",
  },
  {
    name: 'engineerGithub',
    type: 'input',
    message: "What is the engineer's Github username?"
  },
];

function createManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerID,
      answers.managerEmail,
      answers.managerPhone
    );
    managerArray.push(manager);
    createEmployee();
  });
}

function createEmployee() {
  inquirer.prompt(addEmployee).then((answers) => {
    if (answers.addEmployee === 'Yes, an intern.') {
      createIntern();
    } else if (answers.addEmployee === 'Yes, an engineer.') {
      createEngineer();
    } else {
        fs.writeFileSync(writePath, generate(managerArray, internArray, engineerArray)),
        'utf-8'
    }
  });
}

function createIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.internSchool
    );
    internArray.push(intern);
    createEmployee();
  });
}

function createEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerID,
      answers.engineerEmail,
      answers.engineerGithub
    )
    engineerArray.push(engineer);
    createEmployee();
  });
}

createManager();