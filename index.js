const fs = require('fs');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const logo = require('./lib/generateSVG');

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const questions = [
    {
        message: 'Enter text for SVG image: (up to three characters)',
        name: 'text'
    },
    {
        message: 'Enter text color: (color keyword or hexadecimal number)',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Please select a shape:',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',
    },
    {
        message: 'Enter shape color: (color keyword or hexadecimal number)',
        name: 'shapeColor'
    },
]


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    prompt(questions).then((data) => {
        writeToFile('./examples/test.svg', logo(data));
    })
}

// Function call to initialize app
init();