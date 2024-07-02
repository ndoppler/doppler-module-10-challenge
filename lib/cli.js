const inquirer = require("inquirer");

class CLI {
    constructor() {
        this.initials = '';
        this.textColor = '';
        this.backgroundColor = '';
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'initials',
                    message: 'Please enter your initials. Please choose up to three letters maximum.'
                },
            ])
            .then(({ initials }) => {
                if (initials.length <= 3) {
                    this.initials = initials;
                    return this.colorSelector('text');
                }
                else {
                    console.log('You entered too many letters. Please try again.');
                    return this.run();
                }
            })
    }
    colorSelector(colorType) {
        let colorPromptMessage = '';
        let colorVariable = '';

        if (colorType === 'text') {
            colorPromptMessage = 'Please select how you would like to input your text color.';
            colorVariable = 'textColor';
        } else if (colorType === 'background') {
            colorPromptMessage = 'Please select how you would like to input your background color.';
            colorVariable = 'backgroundColor';
        }

        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: `${colorType}ColorType`,
                    message: colorPromptMessage,
                    choices: ['Standard Color Options', 'Hexadecimal Input']

                }
            ])
            .then((response) => {
                if (response[`${colorType}ColorType`] === 'Standard Color Options') {
                    return this.standardColorSelector(colorType, colorVariable);
                }
                else if (response[`${colorType}ColorType`] === 'Hexadecimal Input') {
                    return this.hexadecimalColorSelector(colorType, colorVariable);
                }
            });
    }
    standardColorSelector(colorType, colorVariable) {
        let colorMessage = '';

        if (colorType === 'text') {
            colorMessage = 'Please select a color from our standard list for the text:';
        } else if (colorType === 'background') {
            colorMessage = 'Please select a color from our standard list for the background:';
        }

        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: colorVariable,
                    message: colorMessage,
                    choices: ['Red', 'Blue', 'Green', 'Orange', 'Yellow']
                }
            ])
            .then(({ [colorVariable]: color }) => {
                this[colorVariable] = color;
                return this.shapeSelector();
            })
    }
    hexadecimalColorSelector() {
        let colorMessage = '';

        if (colorType === 'text') {
            colorMessage = 'Enter a hexadecimal color value for the text (e.g., #FF0000):';
            let route = 'shape'
        } else if (colorType === 'background') {
            colorMessage = 'Enter a hexadecimal color value for the background (e.g., #FF0000):';
        }
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: colorVariable,
                    message: colorMessage
                }
            ])
            .then(({ [colorVariable]: color }) => {
                const regex = /#[a-fA-F0-9]{6}/;
                if (regex.test(color)) {
                    this[colorVariable] = color;
                    return this.shapeSelector();
                }
                else {
                    console.log('You entered an incorrect Hexadecimal input. Please try again.');
                    return this.hexadecimalColorSelector(colorType, colorVariable);
                }
            })
    }
    shapeSelector() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please select the shape you would like to use:',
                    choices: ['Circle', 'Triangle', 'Square']
                }
            ])
            .then(() =>
            {
                return this.colorSelector('background');
            })
    }
}



module.exports = CLI;