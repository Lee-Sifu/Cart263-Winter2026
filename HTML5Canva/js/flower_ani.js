window.onload = function () {
    // get the canvas
    let canvas = document.getElementById("testCanvas");
    //get the context
    let context = canvas.getContext("2d");

    let startAngle = 0;
    let endAngle = Math.PI * 2; //full rotation
 createFlower(canvas.width / 2,canvas.height / 2, 60,["#ff0088ff","rgb(187, 231, 254)"])

    function createFlower(xPos,yPos,radius, colors){
drawSinglePetal(xPos,yPos+3*radius/2,radius,colors[0])
drawSinglePetal(xPos,yPos-3*radius/2,radius,colors[0])
drawSinglePetal(xPos-3*radius/2,yPos,radius,colors[0])
drawSinglePetal(xPos+3*radius/2,yPos,radius,colors[0])
drawSinglePetal(xPos,yPos,radius,colors[1])
}

function drawSinglePetal(x,y,r,fillColor){
context.fillStyle = fillColor; // change the color we are using
context.strokeStyle = fillColor; // change the color we are using
context.beginPath();
context.arc(x,y,r,startAngle,endAngle, true);
context.fill(); // set the fill
context.lineWidth=2; //change stroke
context.stroke();//set the stroke
context.closePath();
 }

 let r1 = 30;
 let counter = 0;
 let lastTime = 0;
 requestAnimationFrame(animate);
 function animate(currentTime){
    context.clearRect(0,0,canvas.width,canvas.height);

     let newSize = Math.sin(counter) * r1 + r1+10;
     let newSize2 = Math.cos(counter) * r1 + r1+15;
     createFlower(canvas.width / 2,canvas.height / 2, newSize2,["rgb(10, 181, 95)","rgb(42, 0, 97)"])
     createFlower(canvas.width / 2,canvas.height / 2, newSize,["rgb(255, 6, 6)","rgba(123, 15, 49, 0.31)"])

     let delta_time = currentTime-lastTime;
     lastTime = currentTime;
     counter += 0.01 * delta_time;

    requestAnimationFrame(animate);
   
 }
}