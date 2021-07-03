const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

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
    {
        type: 'input',
        name: 'username',
        message: 'what is your GitHub username?'
    }

];

 //Table of Contents incl page links 
//License, and Questions (Includes Github Username and link)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err=> {
        if(err) throw err
    } )
}

function init() {
    inquirer
    .prompt(questions)  
    .then(response => {
        console.log(response)
        var readmeString = generateMarkdown(response)
        console.log(readmeString)

        writeToFile("README.md", readmeString)
    })
}

init();
