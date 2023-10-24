//imports constructors
const inquirer = require('inquirer');
const {Triangle,Square,Circle} = require('./lib/shape.js');
const fs=require('fs');

// array of questions
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
      //calls the class depending on the shape
        if (response.shape==="triangle"){
          const shape=new Triangle(response.text,response.textColor,response.bgColor);
          //calls the render function
          shape.render=shape.render();
          //writes to file
          writeToFile("logo.svg",shape);
        }
        else if (response.shape==="square"){
          const shape=new Square(response.text,response.textColor,response.bgColor);
          shape.render=shape.render();
          writeToFile("logo.svg",shape);
        }
        else if (response.shape==="circle"){
          const shape=new Circle(response.text,response.textColor,response.bgColor);
          shape.render=shape.render();
          writeToFile("logo.svg",shape);
        }

    }
    );
}
  
init();

function writeToFile(fileName,data){
    fs.writeFile(fileName,generateLogo(data), (err) =>
    // checks for an error if an error is found it gets logged to the console
    // else it console logs the that the readme has been generated
    err ? console.error(err) : console.log("Generated logo.svg"));
}

//generates the template literal for the logo
function generateLogo(data){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${data.render}
    ${data.text}
    </svg>`
}