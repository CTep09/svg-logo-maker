// Importing packages and classes
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle } = require('./lib/Circle')
const { Square } = require('./lib/Square')
const { Triangle } = require('./lib/Triangle')

// Questions the user will be asked
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 Letters for your logo',
        // Logo cannot contain more than three letters
        validate: function (letters) {
            if (letters.length > 3) {
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please pick the text color, enter color name or hexadecimal number'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please pick the shape from the list',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please pick the shape color, enter color name or hexadecimal number'
    }
]

// Function created to start initialize CLI Application
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        let shape;
        // Switch case to allow correct code to be selected based on user input
        switch (answers.shape) {
          case 'Circle':
            shape = new Circle(answers.text, answers.color, answers.shapeColor);
            break;
          case 'Square':
            shape = new Square(answers.text, answers.color, answers.shapeColor);
            break;
          case 'Triangle':
            shape = new Triangle(answers.text, answers.color, answers.shapeColor);
            break;
          default:
            throw new Error('Invalid shape selected');
        }
  
        // SVG Logo created and saved in examples folder
        fs.writeFile('./examples/logo.svg', shape.render(), (err) =>
          err ? console.error(err) : console.log("Generated logo.svg")
        );
      })
  }
  
// Calling function to begin
init();