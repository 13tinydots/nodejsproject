const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([questions]) { 
    }

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    {
        type: 'input', 
        name: 'contributing',
        message: 'How can users contribute to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test the application?'
    },

];

 //Table of Contents incl page links, Installation, Usage Information, 
        //License, Tests, and Questions (Includes Github Username and link)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
