// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme =  ({ name }) =>
`  # ${name}

## ${name}

## ${name}


## ${name}


## ${name}


## ${name}



## ${name}
`;

// TODO: Create an array of questions for user input
inquirer
.prompt (  [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project ?',
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
        name: 'installetion',
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

])
.then((answers) => {
    const readme = generateReadme(answers);

    fs.writeFile('readme.md', generateReadme, (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md!')
  );
});


//     // TODO: Create a function to write README file
    // const  generateReadme (fileName, data) {}
    
//     // TODO: Create a function to initialize app
//     function init() {}

//     // Function call to initialize app
//     init();
// })

