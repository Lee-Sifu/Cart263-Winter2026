"use struct";

const canvasWidth = 800;
const canvasHeight = 600;

const rectWidth = canvasWidth / 3;
const rectHeight = canvasHeight;

const rect1X = 0;
const rect2X = rectWidth;
const rect3X = rectWidth * 2;

const rect1Color = {r: 0, g: 255, b: 255};
const rect2Color = {r: 0, g: 0, b: 255};
const rect3Color = {r: 150, g: 222, b: 209};

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(0);
    fill(rect1Color.r, rect1Color.g, rect1Color.b);
    rect(rect1X, 0, rectWidth, rectHeight);

    fill(rect2Color.r, rect2Color.g, rect2Color.b);
    rect(rect2X, 0, rectWidth, rectHeight);

    fill(rect3Color.r, rect3Color.g, rect3Color.b);
    rect(rect3X, 0, rectWidth, rectHeight);
}