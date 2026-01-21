"use strict";

// Size of the circles/squares
let circleSize = 50;
let fillColor;
let isCircle = true;

function setup() {
    createCanvas(800, 600);
    fillColor = color(random(255), random(255), random(255));
}

function draw() {
    background(225, 225, 225);
    // Draw grid of circles or squares
    fill(fillColor);
    // Loop through columns and rows to create grid
     for (let col = 0; col < width / circleSize; col++) {
        for (let row = 0; row < height / circleSize; row++) {
            let x = col * circleSize + circleSize / 2;
            let y = row * circleSize + circleSize / 2;
            // Draw circle or square based on isCircle flag
            if (isCircle) {
                ellipse(x, y, circleSize * 0.8, circleSize * 0.8);
            } else {
                rect(x - circleSize * 0.4, y - circleSize * 0.4, circleSize * 0.8, circleSize * 0.8);
            }
        }
    }
}

// Toggle shape type on mouse press and change fill color on key press
function keyPressed() {
    if (key === ' ') {
        changeRandomFill();
    }
}

// Function to change fill color to a random color
function changeRandomFill() {
    fillColor = color(random(255), random(255), random(255));
}

// Function to toggle between circle and square
function mousePressed() {
    isCircle = !isCircle;
}