"use strict";


function setup() {
    createCanvas(800, 600);
}

function draw() {
    drawEllipses1();
    drawEllipses2();
    drawEllipses3();
}
// Functions to draw ellipses
function drawEllipses1() {
    fill(255, 0, 0);
    ellipse(100, 100, 50, 50);
}
// Second function to draw ellipses
function drawEllipses2() {
    fill(0, 0, 255);
    ellipse(300, 200, 50, 50);
}
// Third function to draw ellipses
function drawEllipses3() {
    fill(0, 255, 0);
    ellipse(600, 400, 50, 50);
}