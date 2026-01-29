let speed=5;

window.onload = function(){
window.addEventListener("keydown", function(event){
   //this.document.getElementById("textContainer").textContent += `${event.key} `;
if (event.key === "ArrowRight") {
    this.document.getElementById("boxA").style.left = 
    parseInt(this.document.getElementById("boxA").style.left) + speed + "px";


}
if (event.key === "ArrowLeft") {
    if (turbo) {
    this.document.getElementById("boxA").style.left = 
    parseInt(this.document.getElementById("boxA").style.left) - speed + "px";

}
 else if (event.key === "Shift") { 
    this.document.getElementById("boxA").style.backgroundColor = "red";
 }
})
window.addEventListener("keyup", function(event){
    if (event.key === "Shift") { 
       this.document.getElementById("boxA").style.backgroundColor = "blue";
    }
   })
}