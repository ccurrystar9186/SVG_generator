const inquirer = require("inquirer");

const { Circle, Square, Triangle } = require("./lib/shapes");

class SVG {
  constructor() {
    this.color = '';
  }
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to (3) letters'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color'
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a background color'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose which shape',
    choices: ['Circle', 'Square', 'Triangle']
  }
];

function run() {
  let svgString = '';
  let svgFile = 'logo.svg';
  let user_text = '';
  let user_text_color;
  let user_shape;
  let user_shape_color;

  inquirer.prompt(questions)
    .then((answers) => {
      user_text = answers.text;
      user_text_color = answers.textColor;
      user_shape = answers.shape;
      user_shape_color = answers.shapeColor;

      //console.log(`the user chose text ${user_text}, this text has a color ${user_text_color}, inside the ${user_shape} shape which has a background color of ${user_shape_color}`)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

run();
