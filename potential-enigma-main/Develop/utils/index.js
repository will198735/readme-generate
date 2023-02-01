// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');



// TODO: Create an array of questions for user input

 const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project ?',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },

      {
        type: 'input',
        name: 'description',
        message: 'describe your project?',
      },


      {
        type: 'input',
        name: 'content',
        message: 'table of content',
      },

      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators',
      },
      {
        type: 'input',
        name: 'license',
        message: 'provide your license?',
      },

]
    // TODO: Create a function to write README file
 function writeFile(fileName, data){
  return fs.writeFileSync(path.join(process.cwd(), fileName),data);
 }
     // TODO: Create a function to initialize app
     function init() {
      inquirer.prompt(questions).then((inquirerResponce) => {
        writeFile('README.md',generateMarkdown({...inquirerResponce}));
      })
     }

         // Function call to initialize app
         init();
    
 

         
    



