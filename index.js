const inquirer = require('inquirer');
const Text = require('./lib/text.js');
const Shape = require('./lib/shape.js');
const fs=require('fs');
const { default: generate } = require('@babel/generator');

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
    //   console.log(response);
        // const logoText = new Text(response.text);
        const logoShape =new Shape(response.text,response.textColor,response.shape,response.bgColor);
        console.log(logoShape);
        writeToFile("logo.svg",logoShape)
    //   writeToFile("READMEnew.md",response)
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

function generateLogo(data){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${data.shape}
    ${data.text} 
    </svg>`
}