/*
20-90 seconds long
820 x 362 or 830 by 312
*/

var animationScenes = [];
var sketchFrameRate;
var i = 0;
var bgColor;

function setup(){
    createCanvas(820,312);
    animationScenes.push(new animationScene(new someObject("9/23 Paraguay")));
    animationScenes.push(new animationScene(new someObject("9/30 San Diego")));
    animationScenes.push(new animationScene(new someObject("10/05 Philadelphia")));

bgColor = color(50,200,100)
}

function draw(){
    background(bgColor);
    animationScenes[i].run();
    if(!animationScenes[i].isOn) 
    {
        i++
        i = i%animationScenes.length;
        animationScenes[i].isOn = true;
    }
    
    
}

function animationScene(theThing){
    this.length = 100; //this is in frames
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
    this.color = color(random(255),random(255),random(255))
    this.x = width/2;
    this.y = height/2;
    this.display = function()
    {
        bgColor = this.color
        textSize(32);
        textAlign(CENTER);
        text(this.message,this.x,this.y)
    }
}