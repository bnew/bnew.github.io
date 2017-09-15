//sin test
var sizeX;
var sizeY;
var sizeIncreaseRate = 4;
var maxIncrement = 10;
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
    strokeWeight(sizeIncreaseRate)
    rectMode(CENTER);

    rect(width/2,height/2,sizeX,sizeY);
    sizeX+= (xIncrement*sizeIncreaseRate);
    sizeY+= sizeIncreaseRate;
    if(sizeY > height || sizeX > width) 
        {
        sizeX = 1;
        sizeY = 1;
        }
    sizeIncreaseRate = map(sin(frameCount*.1),-1,1,1,maxIncrement);
    print(sizeIncreaseRate);
}

function randomColor(){
    return(random(255),random(255),random(255));
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    size = width;
}