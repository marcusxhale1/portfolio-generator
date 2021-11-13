const inquirer = require('inquirer');

console.log(inquirer)

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input', 
      name: 'name', 
      message: 'What is your name?'

    }, 
    {
      type: 'input', 
      name: 'github', 
      message: 'Please enter your GitHub username.'
    
    },
    {
      type: 'input', 
      name: 'about',
      message: 'Please tell us a little information about yourself'
    }

  ])}
  const promptProject = portfolioData => {
    console.log(`
//   =================
//   Add a New Project
//  =============== ==
  `);
  portfolioData.projects = [];
 // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}
  
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
      
    ]);
    
  };
  
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
  
  