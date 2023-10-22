const inquirer = require('inquirer');
const Text = require('./lib/text.js');
const Shape = require('./lib/shape.js');

questions=[
    {
        type: 'input',
        message: 'Enter the text for the logo',
        name: 'text',
      },
      {
        type: 'input',
        message: 'Enter the text color',
        name: 'textColor',
      },
      {
        type: 'list',
        message: 'Select the shape from the list',
        name: 'shape',
        choices: ['circle','triangle','square'],   
    },
      {
        type: 'input',
        message: 'Enter the background color',
        name: 'bgColor',
      },
]

//function to initialize app
function init() {
    // calls the prompt user function
      promptUser();
  
  }
  
  // Function call to initialize app
function promptUser() {
    //uses the library inquirer to prompt the user
  inquirer
    .prompt(questions)
    .then((response) => {
      //calls the write to file function
      console.log(response);
        // const logoText = new Text(response.text);
        const logoShape =new Shape(response.text,response.textColor,response.shape,response.bgColor);
    //   writeToFile("READMEnew.md",response)
    }
    );
}
  
init();
