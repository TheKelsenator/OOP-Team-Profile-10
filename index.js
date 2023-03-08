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

// var body = $('.container-body')

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
      console.log(managerArray);
      console.log(internArray);
      console.log(engineerArray);
      function writeToFile(data) {
        return fs.writeFileSync(path.join(process.cwd(), generate), data);
      }
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







// From here down is code I pulled from previous projects that I thought 
// might help me figure out how to create cards $('.body-container'), and
// code to help initiate prompts. 



// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }




// // TODO: Create a function to initialize app

// function init() {
//   inquirer.prompt(questions).then((inquirerResponses) => {
//     writeToFile('READ.md', generateMarkdown(inquirerResponses));
// });
// }

// Function call to initialize app
// init();




// Possible way to display cards with employee information

// Employee.forEach(function (this) {
//   body.append(`<div class="container-fluid px-5">
//   <div id=${thisHour.id} class="time-block row">
//     <div class="hour col-2 col-md-1 py-3 ${colorCode}">${thisHour.hour} ${thisHour.ampm}</div>
//     <textarea class="col-8 col-md-10 description ${colorCode}" rows="3"></textarea>
//     <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//     <i class="fas fa-save" aria-hidden="true"></i>
//     </button>
//   </div>
//   </div>`)
// })

