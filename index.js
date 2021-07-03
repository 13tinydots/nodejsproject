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
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license are you offering?',
        choices: ["MIT", "Apache 2.0", "CC0", "Attribution 4.0 International"]
    },


];

 //Table of Contents incl page links 
// Questions (Includes Github Username and link)

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
