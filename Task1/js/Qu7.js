"use strict";

let circleSize = 50;
let fillColor;

function setup() {
    createCanvas(800, 600);
    fillColor = color(random(255), random(255), random(255));
}

function draw() {
    background(225, 225, 225);
    fill(fillColor);
     for (let col = 0; col < width / circleSize; col++) {
        for (let row = 0; row < height / circleSize; row++) {
            let x = col * circleSize + circleSize / 2;
            let y = row * circleSize + circleSize / 2;
            ellipse(x, y, circleSize * 0.8, circleSize * 0.8);
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        changeRandomFill();
    }
}

function changeRandomFill() {
    fillColor = color(random(255), random(255), random(255));
}