# svg-logo-maker

## Description

The SVG logo maker is a simple command-line application that accepts user input and generates a SVG file based on specifications made by the user. It allows the developer to create their own custom SVG image without the need to outsource. This project was built using Node.js and inquirer version 8.2.4, and Jest was used for running unit tests to ensure the application works properly.

## Installation

N/A

## Usage

In order to run the application, the user must run the command 'node index.js' in the command-line prompt. Once done, the user will be prompted with a series of questions that pertains to the information needed for the SVG file. The prompts will allow the user to choose an SVG shape (triangle, square, or circle), shape color, text to go inside the shape, and text color. When the user finishes answering the questions, the application will generate a logo.svg file that can be opened in the browser and viewed.

[Demo]

## Credits

Sources that helped with generating SVG code:

![W3Schools](https://www.w3schools.com/graphics/svg_intro.asp)
![Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)
![Text in SVG](https://www.w3schools.com/graphics/svg_text.asp)

Googled how to get SVG to display properly in web browser. Had to include attribute "xmlns="http://www.w3.org/2000/svg" in svg tag.