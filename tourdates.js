/*
20-90 seconds long
820 x 362 or 830 by 312
*/

var animationScenes = [];
var sketchFrameRate;
var i = 0;
var bgColor;

var logo;
var img;

function setup(){
    createCanvas(500,500);
    animationScenes.push(new animationScene(new someObject("Asuncion DollHouseDH\n09.23.17")));
    animationScenes.push(new animationScene(new someObject("San Diego  CRSSD\n10.01.17")));
    animationScenes.push(new animationScene(new someObject("Philadelphia Rumor\n10.05.17")));
    
    textSize(42);
    bgColor = color(50,200,100)
    img = loadImage("http://files.physical-digital.com/juliaHead2.png")
    logo = new bouncingImage();
    frameRate(30);
//    saveFrames("juliaInsta","png",40,30);

}

function draw(){

    background(bgColor);
        logo.bounce();



    animationScenes[i].run();
    if(!animationScenes[i].isOn) 
    {
        i++
        i = i%animationScenes.length;
        animationScenes[i].isOn = true;
    }
    var frameCountNumbers;

    if(frameCount < 1000){
        if (frameCount < 10)
            frameCountNumbers = "000"+frameCount;
        else if (frameCount < 100)
            frameCountNumbers = "00"+frameCount;
        else
            frameCountNumbers = "0"+frameCount;
    }else frameCountNumbers = frameCount;
                    
    var imgname = "jInsta_" + frameCountNumbers;
    saveCanvas(imgname, "png");    
}

function animationScene(theThing){
    this.length = 200; //this is in frames
    this.isOn = true;
    this.someObjectForAnimating = theThing; //tour date, our animation
    this.timer = this.length;
    
    this.run = function(){
        if (this.isOn){
            this.someObjectForAnimating.display();
            this.timer--;
        }
        if (this.timer <= 0){
            this.isOn = false;
            this.timer = this.length;
        }
        
    }
}

function someObject(msg){
    this.message = msg;
    this.color = colorPicker();
    this.x = width/2;
    this.y = (height/2- calculateTextHeight(this.message));
    textFont("DisposableDroid BB");
    this.display = function()
    {
        bgColor = this.color
        lineBackground();
        textAlign(CENTER);
        //font
        text(this.message,this.x,this.y)
        //this.changeBackground(2);
        
    }
    this.changeBackground = function(frameNumber){
        if(frameCount % frameNumber ==0 )
            this.color = color(colorPicker())

    }
    
    this.calculateTextHeight = function(){
        
    }
}

function colorPicker(){
    return color(random(25,255),random(25,255),random(25,255));
}

function bouncingImage(){
    this.img = loadImage("http://files.physical-digital.com/juliaHead2.png");
    this.x = 10;
    this.y = 10;
    this.velocityX = 2;
    this.velocityY = 2;
    this.bounce = function(){
        imageMode(CENTER)
        image(img,this.x,this.y);
        this.x += this.velocityX;
        this.y += this.velocityY;
        if(this.x > width || this.x < 0)
            this.velocityX = this.velocityX*-1;
        if(this.y >= height || this.y <= 0)
            this.velocityY = this.velocityY*-1;
    }

}

function calculateTextHeight(message){
    return ((textAscent()+textDescent())/2)*splitTokens(message, "\n").length;
}


function lineBackground(){
    for(var theX = 0; theX < width; theX+=5){
        stroke(colorPicker())
        line(theX,0,theX,height);
    }
}
/*
void bounceWithColor() {
    textFont(f);
    float rad = textWidth(message)/2;
    float h = ((textAscent()+textDescent())/2)*splitTokens(message, "\n").length ; //this sort of accounts for number of lines w bounce effect..
    x = x + ( xspeed * xdirection );
    y = y + ( yspeed * ydirection );

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (x > width-rad || x < rad) {
      xdirection *= -1;
    }
    if (y > height-h || y < h) {
      ydirection *= -1;
    }
    /* debug
     rectMode(CORNERS);
     rect(x, y, textWidth(message), textAscent()+textDescent());
     println(textWidth(message));
     */
    // Draw the shape
//    fill(randomColor());
//    text(message, x, y);
//  }
      
      