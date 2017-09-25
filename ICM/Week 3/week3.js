/*making a mouseover button

an object of a given shape
detect when mouse x and y is within the bouse of the shape


mouse over menu

a mouseover area
when mouse is within the bounds of the area
draw a new shape for the menu
and have a button to close

*/

var capture;
var filters = ["THRESHOLD","GRAY","OPAQUE","INVERT","POSTERIZE","DILATE"];

var videoSizeY;
var videoSizeX;
var spliceX;
var spliceY;
var spliceSizeX = 100;
var spliceSizeY;
var buttonSize = 50;
var pattern1 = true;
var flipVideo = false
var elY;
var elX;
var bodyPartSelection = true;
var textX = 1;
var textY = 1;
var textVelocityX = .5;
var textVelocityY = 1;

function setup(){
    createCanvas(windowWidth,windowHeight)
    capture = createCapture(VIDEO);
    capture.hide();
    videoSizeY = capture.height/4;
    videoSizeX = capture.width/4;
    spliceX = random(capture.width);
    spliceY = random(capture.height);
    
    spliceSizeY = capture.height/capture.width*spliceSizeX;
    elY = 300;
    elX = width / 2;
}


function draw(){
    background(255)

    if(bodyPartSelection){

        image(capture,0,0,capture.width,capture.height);
        fill(0, 122);
        noStroke();
        rect(mouseX, mouseY,spliceSizeX,spliceSizeY);
        textSize(32);
        fill(255,0,0);
        textStyle(BOLD);
        text("select a body part \npress a key to reset", textX, textY)
        textX += textVelocityX;
        textY += textVelocityY;
        if(textX > capture.width || textX <0) textVelocityX = textVelocityX *-1;
        if(textY > capture.height || textY < 0) textVelocityY = textVelocityY * -1;

    }else{

    for(var y= 0; y <= height; y+= videoSizeY){
        for (var x =0; x <= width; x+= videoSizeX){
            push();
            if(flipVideo && !pattern1){
                translate(width,0)
                scale(-1,1)
                
            }
            image(capture, x,y, videoSizeX, videoSizeY, spliceX, spliceY,spliceSizeX,spliceSizeY);
            pop();
            flipVideo = !flipVideo
        }
    }

    drawButton();
    drawSlider();
    }
/*
    if(frameCount%1000){
        filter(filters[int(random(filters.length))])
    }
  */
    
}

function mouseInBounds(x1,y1,x2,y2){
    //x1 should be a lower value than x2
    //y1 should be a lower value than y2
    if(mouseX <= x2 && mouseX >= x1 && mouseY <=y2 && mouseY >= y1)
        return true;
    else
        return false;
}

function drawButton(){
    noStroke();
    if(mouseInBounds(0,0,buttonSize,buttonSize))
        fill(50);
    else
        fill(0);
    
    rect(0,0,buttonSize,buttonSize);
    
    fill(255);
    textStyle(NORMAL);
    textSize(12);
    text("change pattern",0,0,buttonSize,buttonSize);
}

function drawSlider(){
var diameter = 30;
var lineStartPosition = 100;
var lineEndPosition = width - lineStartPosition;

    
    /*
    - draw the slider + button
    - check to see if the slider being moved
    - if the slider is being moved, make the stroke thicker
    - map the value to our patterns
    dist (elX, elY, mouseX, mouseY) < (diameter / 2)
    */
    
    
    
    
    if (mouseInBounds(lineStartPosition, elY - 50, lineEndPosition, elY+50))
    {
    
    cursor(HAND);
  	stroke(255,244,233);
    
        if (mouseIsPressed){
        strokeWeight (3);
        elX = constrain(mouseX,lineStartPosition,lineEndPosition);
        elY = elY;
        
      }else{
        strokeWeight (1);
      }
    
  } else {
    cursor(ARROW);
    noStroke();
    
  }
  
  // Find Pix color, just for fun.
  
  fill(0);
  stroke(255,244,233);
  line(lineStartPosition,elY, lineEndPosition, elY);
  ellipse (elX,elY,diameter,diameter);
    
    videoSizeX = capture.width*map(elX,lineStartPosition,lineEndPosition,.05,1);
    videoSizeY = capture.height*map(elX,lineStartPosition,lineEndPosition,.05,1);
    
  

}

function mousePressed(){

    if(mouseInBounds(0,0,buttonSize,buttonSize) && !bodyPartSelection)
        pattern1 = !pattern1;
    
    if(bodyPartSelection){
        spliceX = mouseX;
        spliceY = mouseY;
        bodyPartSelection = false;
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
    bodyPartSelection = true;
}

