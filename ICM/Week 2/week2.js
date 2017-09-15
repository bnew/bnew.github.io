//sin test
var sizeX;
var sizeY;
var velocity = 4;
var maxVelocity = 10;
var minVelocity = 1;

function setup(){
    createCanvas(windowWidth,windowHeight);
    sizeX = 1;
    sizeY = 1;
    noFill();
    xIncrement = width/height;

}

function draw(){
    background(255);
    stroke(0);
    strokeWeight(velocity)
    rectMode(CENTER);

    rect(width/2,height/2,sizeX,sizeY);
    sizeX+= (xIncrement*velocity);
    sizeY+= velocity;
    if(sizeY > height || sizeX > width) 
        {
        sizeX = 1;
        sizeY = 1;
        }
    velocity = map(sin(frameCount*.1),-1,1,minVelocity,maxVelocity);
    print(velocity);
}

function randomColor(){
    return(random(255),random(255),random(255));
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    size = width;
}