"use strict";

let counter = 0;

// Variable of the square button
const square = {
x: 50,
y: 50,
w: 50,
h: 50,
color: 'orange'
};

// radius of the first ellipse
let radius = 30;

// alpha value of the first ellipse
let ellipseAlpha = 20;


function setup() {
createCanvas(600, 600);
}

function draw() {
background(0);

displaySquare();

// Do not draw anything if the counter is greater than 10 or less than 1
if (counter < 1 || counter > 10) {
return;
}

// Reset radius and transparency for each frame
let currentRadius = radius;
let currentAlpha = ellipseAlpha;

// variable for while loop counter
let i = 0;

while (i < counter) {

// set fill color with current alpha
fill(255, currentAlpha);
noStroke();

// draw ellipse at center of canvas
ellipse(width / 2, height / 2, currentRadius, currentRadius);

// increase radius for next ellipse
currentRadius += 25;

// increase alpha for next ellipse
currentAlpha += 20;

i++;
}
}


function displaySquare() {

// if mouse is inside the square, change coolor to light orange
if (checkCollisionWithSquare()) {
fill(255, 200, 120);
} else {
fill(square.color);
}

noStroke();
rect(square.x, square.y, square.w, square.h);
}


// check if mouse is inside the square
function checkCollisionWithSquare() {

if (
mouseX > square.x &&
mouseX < square.x + square.w &&
mouseY > square.y &&
mouseY < square.y + square.h
) {
return true;
} else {
return false;
}
}

function mousePressed() {
if (checkCollisionWithSquare()) {
counter++;
}
}