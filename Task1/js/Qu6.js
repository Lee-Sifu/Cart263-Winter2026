"use strict";

const myText = {
    name: "test",
    color: [255],
    textSize: 28,
    positionX: 400,
    positionY: 300,
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 0, 0);
    let i = 0;
    for (i = 0; i < 1; i++) {
        displayText(i);
    }
}

function displayText(index) {
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(CENTER, CENTER);
    text(myText.name, myText.positionX + index * 20, myText.positionY);  
}