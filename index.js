const {generateMarkdown} = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

//

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('./dist/README.md', data, (err) => {
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
            message: 'What is your github username? (Required)',
            validate: (userInput) => {
                if (userInput) {
                  return true;
                } else {
                  console.log("Please enter your username");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address? (Required)",
            validate: (emailInput) => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter your email address.");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: (titleInput) => {
                if (titleInput) {
                  return true;
                } else {
                  console.log("Please enter a project name.");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please input the description of your project. (Required)',
            validate: (descInput) => {
                if (descInput) {
                  return true;
                } else {
                  console.log("Please enter a description.");
                  return false;
                }
              }
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
            choices: ['Apache', 'BSD', 'CreativeCommons', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla', 'OpenDataCommons', 'Perl', 'Zlib']
        }
    ]); 
};

// Function call to initialize app
init().then((answers) => {
    console.log(answers);
    writeToFile(generateMarkdown(answers));
});



/*

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/