"use strict";

// Size of the rectangles
const rectsize = 80;

// Define three rectangle objects with properties
let rect1 = {
    x: 30,
    y: 20,
    color: [255, 200, 0]
}

// Second rectangle object
let rect2 = {
    x: 80,
    y: 90,
    color: [0, 200, 255]
}
// Third rectangle object with speed property
let rect3 = {
    x: 130,
    y: 40,
    color: [200, 0, 255],
    speed: 2,
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    fill(rect1.color);
    rect(rect1.x, rect1.y, rectsize, rectsize);

    fill(rect2.color);
    rect(rect2.x, rect2.y, rectsize, rectsize);

    rect3.y += rect3.speed;
    if (rect3.y > height) {
        rect3.y = -rectsize;
    }
    fill(rect3.color);
    rect(rect3.x, rect3.y, rectsize, rectsize);
}

// Change position of rectangles based on mouse press and key press
function mousePressed() {
    if (mouseX > 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    rect1.x = random(width - rectsize);
    rect1.y = random(height - rectsize);
}
}

// Change position of rectangles based on mouse press and key press
function keyPressed() {
    if (key === ' ') {
    rect2.x = random(width - rectsize);
    rect2.y = random(height - rectsize);
}
}
