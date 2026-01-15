"use struct";

let counter = 0;
let radius = 75;
let ellipseAlpha = 255;

const square = {
    x: 45,
    y: 55,
    w: 50,
    h: 50,
    color: [255, 165, 0]
}
function setup() {
    createCanvas(800, 600);
}

function draw() {
background(150, 100, 200);
displaySquare();
}

function displaySquare() {
// Check if mouse is over square and highlight if true
let isHovering = checkCollisionWithSquare();

// Set color based on hover state
if (isHovering) {
    fill(255, 200, 100); // lighter orange
} else {
    fill(square.color); // orange
}

rect(square.x, square.y, square.w, square.h);
}

function checkCollisionWithSquare() {
    if (mouseX > square.x && mouseX < square.x + square.w &&
        mouseY > square.y && mouseY < square.y + square.h) {
        return true;
    }
    return false;
}

function displayEllipse() {
    fill(255, 255, 255, ellipseAlpha); // white with alpha
    ellipse(width / 2, height / 2, radius * 2, radius * 2);
}

function mousePressed() {
// Check if mouse is inside square and increment counter using while loop
let i = 0;
if (checkCollisionWithSquare()) {
    while (i < 5) {
        counter++;
        i++;
    }
}
}
