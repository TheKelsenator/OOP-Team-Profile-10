const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

const managerQuestions = [
  {
    name: 'managerName',
    type: 'input',
    message: 'Who is the team manager?',
  },
  {
    name: 'managerID',
    type: 'input',
    message: "What is the manager's employee ID#?",
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
    // getName()
    // getId()
    // getEmail()
    // getOfficePhone()
    // getRole() Returns 'Manager'

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
    // getName()
    // getId()
    // getEmail()
    // getRole() Returns 'Employee'

const internQuestions = [
  {
    name: 'internName',
    type: 'input',
    message: "What is the intern's name?",
  },
  {
    name: 'internID',
    type: 'input',
    message: "What is the interns's employee ID#?",
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
    // getName()
    // getId()
    // getEmail()
    // getSchool
    // getRole() Returns 'Intern'

const engineerQuestions = [
  {
    name: 'engineerName',
    type: 'input',
    message: "What is the engineer's name?",
  },
  {
    name: 'engineerID',
    type: 'input',
    message: "What is the engineer's employee ID#?",
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
    // getName()
    // getId()
    // getEmail()
    // getGithub()
    // getRole() Returns 'Engineer'































// questions = {
//   Who manages the team?
//   What is the manager's Employee ID #?
//   What is the manager's email address?
//   What is the manager's office telephone number?
//   Are there any more members of the team needing added? Yes, an Engineer
//   What is the engineer's name?
//   What is the engineer's Employee ID #?
//   What is the engineer's email address?
//   What is the engineer's Github username?
//   Are there any more members of the team needing added? Yes, an Engineer
//   What is the engineer's name?
//   What is the engineer's Employee ID #?
//   What is the engineer's email address?
//   What is the engineer's Github username?
//   Are there any more members of the team needing added? Indeed, an Intern
//   What is the inter's name?
//   What is the inter's Employee ID #?
//   What is the inter's email address?
//   What is the inter's Github username?
//   Are there any more members of the team needing added?
//     Yes, an engineer
//     Indeed, an Intern
//     Nope, all team members have been added!
//   }

