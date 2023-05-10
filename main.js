var mouseevent= "empty";
var last_x, last_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color= "purple";
var width= 5;

canvas.addEventListener("mousedown",MD );
function MD(e){
    mouseevent= "mousedown";
}
 canvas.addEventListener("mousemove", MM);
 function MM(e){
    currentX= e.clientX - canvas.offsetLeft;
    currentY= e.clientY - canvas.offsetTop;

    if( mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    last_x= currentX;
    last_y= currentY;
 }
 canvas.addEventListener("mouseup",MU );
function MU(e){
    mouseevent= "mouseup";
}
canvas.addEventListener("mouseleave",ML );
function ML(e){
    mouseevent= "mouseleave";
}