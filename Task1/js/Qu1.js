"use strict";

// ellipse variables
let ellipse1 = {
    x: 100,
    y: 100,
    w: 50,
    h: 80,
    color: [255, 0, 0]
}
let ellipse2 = {
    x: 300,
    y: 200,
    w: 80,
    h: 50,
    color: [0, 0, 255]
}
let ellipse3 = {
    x: 600, 
    y: 400,
    w: 100,
    h: 130,
    color: [0, 255, 0]
}

// setup canvas
function setup() {
 createCanvas(800, 600);
}

// draw ellipses
function draw() {
fill(ellipse1.color); 
ellipse(ellipse1.x, ellipse1.y, ellipse1.w, ellipse1.h);
fill(ellipse2.color);
ellipse(ellipse2.x, ellipse2.y, ellipse2.w, ellipse2.h);
fill(ellipse3.color);
ellipse(ellipse3.x, ellipse3.y, ellipse3.w, ellipse3.h);
}