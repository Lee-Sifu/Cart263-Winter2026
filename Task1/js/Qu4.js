"use strict";

// Define canvas size
const canvasWidth = 800;
const canvasHeight = 600;

// Define rectangle properties
const rectWidth = canvasWidth / 3;
const rectHeight = canvasHeight;

// Define rectangle positions
const rect1X = 0;
const rect2X = rectWidth;
const rect3X = rectWidth * 2;

// Define rectangle colors
const rect1Color = {r: 0, g: 255, b: 255};
const rect2Color = {r: 0, g: 0, b: 255};
const rect3Color = {r: 150, g: 222, b: 209};

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(0);

    // Draw rectangles and change color on mouse hover
    if (mouseX > rect1X && mouseX < rect1X + rectWidth) {
        fill(255);
    } else {
        fill(rect1Color.r, rect1Color.g, rect1Color.b);
    }
    rect(rect1X, 0, rectWidth, rectHeight);

    if (mouseX > rect2X && mouseX < rect2X + rectWidth) {
        fill(255);
    } else {
        fill(rect2Color.r, rect2Color.g, rect2Color.b);
    }
    rect(rect2X, 0, rectWidth, rectHeight);

    if (mouseX > rect3X && mouseX < rect3X + rectWidth) {
        fill(255);
    } else {
        fill(rect3Color.r, rect3Color.g, rect3Color.b);
    }
    rect(rect3X, 0, rectWidth, rectHeight);


}

