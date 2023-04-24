# SVG Logo Maker

![Created with SVG Logo Maker](./images/logo.svg)

[![License](https://img.shields.io/badge/license-MIT-ff69b4)](https://opensource.org/license/MIT)

## Table of Contents

- [**Description**](#📑-description)
- [**Installation**](#💾-installation)
- [**Usage**](#💻-usage)
- [**Technology**](#🦾-technology)
- [**Test**](#🧪-test)
- [**Questions**](#❓-questions)

## 📑 Description

SVG Generator enables the user to create a cool svg logo. This command-line application prompts the user with 4 questions to create a unique logo. The user can have up to three letters in their logo with the text color of their choosing. The logo can be one of three shapes: circle, triangle or a square with a fill color that the user selects.

[Walkthrough Video Here](https://youtu.be/aZxuyF5UvqI)

## 💾 Installation

From the GitHub Repository, clone down the svg-generator to your machine. Once installed, and in the folder, run `npm i` install necessary files, including inquirer@8.2.4. It is highly recommended that the user download an SVG Preview extension to view output in correct format. 

## 💻 Usage

Web developers dream, creating a personalized logo with command-line application and no CSS. Run `node index.js` to initialize the application and create as many unique logos as you would like. Files are saved as `.svg` 

![CLI Application Prompts](./images/svg-prompts.gif)


## 🦾 Technology
[![My Skills](https://skillicons.dev/icons?i=js,nodejs,jest,svg)](https://skillicons.dev)

**Inquirer 8.2.4**


## 🧪 Test

Testing with Jest completed. Testing completed for each shape to ensure shape and color were correct. 

``` js
const { Circle } = require("../Circle");
const { Triangle } = require("../Triangle");
const { Square } = require("../Square");

describe("Circle", () => {
  it("should render a circle shape in the correct color", () => {
    let text = "CAS";
    let textColor = "pink";
    let shapeColor = "red";

    let circle = new Circle(text, textColor, shapeColor);

    let output = `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <circle cx="100" cy="100" r="80" fill="${shapeColor}" />
      <text x="100" y="100" font-family="monospace" font-size="3em" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>`;
    expect(circle.render()).toEqual(output);
  });
});
```


![Jest Testing Output]()

## ❓ Questions

🖐 My name is Cassie! If you have any question about me or the project, feel free to contact me:

- Github: [CTep09](https://github.com/CTep09)

- Email: [CassandraY9@gmail.com](mailto:cassandray9@gmail.com)
