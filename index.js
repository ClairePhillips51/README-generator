const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a short decscription of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Give the steps required to install your project:',
      name: 'install',
    },
    {
      type: 'list',
      message: 'Choose a license:',
      choices: [
        "No License",
        "GNU GPLv3",
        "MIT License"
      ],
      name: 'license',
    },
    {
      type: "input",
      message: "Provide instructions and examples for use:",
      name: "usage"
    },
    {
      type: "input",
      message: "Enter instructions for making contributions:",
      name: "contributions" 
    },
    {
      type: "input",
      message: "Enter test instructions:",
      name: "test" 
    },
    {
      type: "input",
      message: "Please enter your GitHub username:",
      name: "github" 
    },
    {
      type: "input",
      message: "Please enter your email address:",
      name: "email" 
    },
  ])
  .then((responses) => {
    
    let licInfo = "This project does not have a license.";
    if(responses.license === "MIT License"){
      licInfo = "This project uses a MIT License.";
    }else if(responses.license === "GNU GPLv3"){
      licInfo = "This project uses a GNU GPLv3 License.";
    }

    // Use ${responses.<name>} to access users answers
    const infoDisplay = `# ${responses.title}
${responses.description}

## Table of Contents:
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${responses.install}

## Usage
${responses.usage}

## License
${licInfo}

## Contributing
${responses.contributions}

## Tests
${responses.test}

## Questions
    `;
  fs.writeFile('README.md', infoDisplay, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
    );   
  });