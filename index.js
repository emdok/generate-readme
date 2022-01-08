const {generateMarkdown} = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

//

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('./README.md', data, (err) => {
        if (err) throw err;
        console.log('Readme has been created!');
      });
}

// TODO: Create a function to initialize app
const init =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?"
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please input the description of your project'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please input your installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please input your usage information.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please add any contributors to your project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter any tests your users can use'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select a license for your project',
            choices: ['Apache', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'Zlib']
        }
    ]); 
};

// Function call to initialize app
init().then((answers) => {
    console.log(answers);
    writeToFile(generateMarkdown(answers));
});



/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/