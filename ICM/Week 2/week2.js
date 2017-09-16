//sin test
var sizeX;
var sizeY;
var velocity = 1;
var maxVelocity = 1;
var minVelocity = -1;
var velocityMultiplier = 10;

var translateDivider = 1;

var minSize = 1;
var lineWidth = 1;
//var maxSize;

function setup(){
    createCanvas(windowWidth,windowHeight);
    sizeX = 1;
    sizeY = 1;
    xIncrement = width/height;
    //frameRate(10);

}

function draw(){

    stroke(random(255),random(255),random(255));
    lineWidth = abs(velocity);
    
    strokeWeight(lineWidth)

    
    if(sizeY > height || sizeX > width ) //work here
        {
        sizeX = width;
        sizeY = height;
        }else if (sizeY <= 0 || sizeX <=0)
        {
        sizeX = minSize;
        sizeY = minSize;
        }
    
    rectMode(CENTER);
    noFill();
    
    shearX(map(mouseX,0,width,0,TWO_PI))
    shearX(radians(rotationY))

    rect(width/2,height/2,sizeX,sizeY);
    
    sizeX+= (xIncrement*velocity);
    sizeY+= velocity;
    
    velocity = getVelocity()*velocityMultiplier;
    
    //showDebugInfo()

}

function randomColor(){
    return(random(255),random(255),random(255));
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    xIncrement = width/height;
}

function getVelocity(){
    return map(sin(frameCount*.010),-1,1,minVelocity,maxVelocity)
}

function touchStarted(){
    background(255)
}

function showDebugInfo(){
    fill(0)
    noStroke()
    rectMode(CORNERS)
    rect(0,0,200,100)
    fill(255)
    text(" velocity:"+velocity+"\n Stroke "+lineWidth+"\n sizeX"+sizeX+"\n sizeY"+sizeY,10,10) //velocity, stroke width, size x, size y
}