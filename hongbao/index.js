/**
 * Created by lenovo on 2018/3/5.
 */
var canvasWidth = 640;
var canvasHeight = 400;

var canvas = document.getElementById("demo-canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var radius = 50;
image.src = "img/demo.jpg";
image.onload = function(e){
    initCanvas();
}

function initCanvas(){
    Region = {x:Math.random()*(canvas.width-2*radius)+radius,y:Math.random()*(canvas.height-2*radius)+radius,r:radius}
    draw(image,Region);
}

function setRegion(Region){
    context.beginPath();
    context.arc(Region.x,Region.y,Region.r,0,Math.PI*2,false);
    context.clip();
}

function draw(image){
    context.clearRect(0,0,canvas.width, canvas.height);

    context.save();
    setRegion(Region);
    context.drawImage(image,0,0);
    context.restore();
}

function reset(){
    initCanvas();
}

function show(){
    var animation = setInterval(
        function(){
//			console.log("animation");
            Region.r += 20;
            if(Region.r > 2*Math.max(canvas.width,canvas.height)){
                clearInterval(animation);
            }
            draw(image,Region);
        },
        30
    );
}