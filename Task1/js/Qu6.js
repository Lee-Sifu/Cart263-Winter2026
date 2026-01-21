"use strict";

// Text object to hold properties
const myText = {
    name: "test",
    color: [255],
    textSize: 28,
    positionX: 400,
    positionY: 300,
}

// Positions for horizontal and vertical text
const horizontalY = 8;  
const verticalX = 9;    

function setup() {
    createCanvas(800, 700);
}

function draw() {
    background(0, 0, 0);
    
    // Display main text
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(CENTER, CENTER);
    text(myText.name, myText.positionX, myText.positionY);
    
    // Display numbers horizontally and vertically
    for (let i = 0; i < 10; i++) { 
        displayText(i);
    }
    // Display numbers vertically
    for (let i = 15; i >= 1; i--) {
        displayTextVertical(i);
    }
}

// Function to display text at given index
function displayText(index) {
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(CENTER, CENTER);
    text(String(index), index * 30, horizontalY);  
}

// Function to display text vertically at given index
function displayTextVertical(index) { 
    fill(myText.color);
    textSize(myText.textSize);
    textAlign(LEFT, CENTER);
    text(String(index), verticalX, index * 30); 
}