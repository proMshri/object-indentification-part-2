var img="";

function preload() {
    img=loadImage("fox.jpg");
}

function setup() {
    canvas=createCanvas(600,400);
    canvas.position(350,150);
    
}

function draw() {
    image(img,0,0,600,400);
}