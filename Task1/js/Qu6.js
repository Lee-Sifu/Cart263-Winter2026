"use strict";

const myText = {
    name: "test",
    color: [255],
    textSize: 28,
    positionX: 400,
    positionY: 300,
}

function setup() {
    createCanvas(800, 700);
}

function draw() {
    background(0, 0, 0);
    let i = 0;
    for (i = 0; i < 10; i++) { 
        displayText(i);
    }
    for (i = 15; i >= 1; i--) {
        displayTextVertical(i);
    }
}

function displayText(index) {
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(CENTER, CENTER);
    text(String(index), myText.positionX + index * 20, myText.positionY);  
}

function displayTextVertical(index) { 
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(CENTER, CENTER);
    text(String(index), myText.positionX, myText.positionY + index * 20);
}