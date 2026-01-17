"use strict";

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(225);

    for (let i = 0; i < 10; i++) {
        ellipse(50, i * 80, 50, 50);
    }
   for (let j = 9; j >= 0; j--) {
        ellipse(150, j * 80, 50, 50);
    }
    for (let k = 0; k < 10; k++) {
        ellipse(250, k * 80, 50, 50);
    }
    for (let l = 9; l >= 0; l--) {
        ellipse(350, l * 80, 50, 50);
    }
    for (let m = 0; m < 10; m++) {
        ellipse(450, m * 80, 50, 50);
    }
    for (let n = 9; n >= 0; n--) {
        ellipse(550, n * 80, 50, 50);
    }
    for (let o = 0; o < 10; o++) {
        ellipse(650, o * 80, 50, 50);
    }
    for (let p = 9; p >= 0; p--) {
        ellipse(750, p * 80, 50, 50);
    }
}