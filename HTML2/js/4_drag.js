window.onload = setup;
function setup() {
  console.log("drag ex");
  let handleDragging = function (event) {
    console.log("on drag")
    //HERE :: the event target refers to the object being dragged...
    console.log(event.target.id);
  };

   let handleDraggingStop = function (event) {
    console.log("on stop")
    //HERE :: the event target refers to the object being dragged...
    console.log(event.target.id);
    console.log(this);
};

let handleDrop = function (event) {
    event.preventDefault();
    console.log("dropped")
    //HERE :: the event target refers to the object being dragged...
    console.log(event.target.id);
    console.log(this);
}
 window.addEventListener("dragstart", handleDragging);
 window.addEventListener("dragend", handleDraggingStop);
 window.addEventListener("drop", handleDrop);
}