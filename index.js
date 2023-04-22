const inquirer = require('inquirer');
const fs = require('fs');
const { Shapes } = require('./lib/Shape')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 Letters for your logo',
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

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // console.log(answers);
            const shape = new Shapes(answers.text, answers.color, answers.shapeColor, answers.shape)

            fs.writeFile('./examples/logo.svg', shape.render(), (err) =>
                err ? console.error(err) : console.log("Generated logo.svg"))

        })
}

init();