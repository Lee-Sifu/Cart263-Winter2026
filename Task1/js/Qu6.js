"use strict";

const myText = {
    name: "test",
    color: [255],
    textSize: 28,
    positionX: 400,
    positionY: 300,
}

const horizontalY = 8;  
const verticalX = 9;    

function setup() {
    createCanvas(800, 700);
}

function draw() {
    background(0, 0, 0);
    
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(CENTER, CENTER);
    text(myText.name, myText.positionX, myText.positionY);
    
    for (let i = 0; i < 10; i++) { 
        displayText(i);
    }
    for (let i = 15; i >= 1; i--) {
        displayTextVertical(i);
    }
}

function displayText(index) {
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(CENTER, CENTER);
    text(String(index), index * 30, horizontalY);  
}

function displayTextVertical(index) { 
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(LEFT, CENTER);
    text(String(index), verticalX, index * 30); 
}