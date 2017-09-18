//sin test
var sizeX;
var sizeY;
var maxStroke = 10;
var minStroke = .01;
var translateDivider = 1;

function setup(){
    createCanvas(windowWidth,windowHeight);
    sizeX = 1;
    sizeY = 1;
}

function draw(){

    stroke(randomColor());    
    strokeWeight(getStroke())
    
    rectMode(CENTER);
    noFill();
    
    push()
    if(!mobileDetected())
    shearX(map(mouseX,0,width,0,TWO_PI)) 
    else
    shearX(radians(rotationY))
    
    sizeX = map(sin(frameCount*.01),-1,1,0,width)
    sizeY = map(sin(frameCount*.01),-1,1,0,height);

    rect(width/2,height/2,sizeX,sizeY);
    pop()
    
    //showDebugInfo()

}

function randomColor(){
    return color(random(255),random(255),random(255));
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    xIncrement = width/height;
}

function getStroke(){
    //hold over from previous version that I still like for the line stroke
    return map(sin(frameCount),-1,1,minStroke,maxStroke);
}

function keyPressed(){
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

function shearMode(){
    //could cycle through various options for shearing
    
}

function mobileDetected(){
    if (width<800)
        return true;
    else
        return false;
}

function touchStarted(){
    fullscreen(true);
}

function mousePressed(){
    fullscreen(true);
}