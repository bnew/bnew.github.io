var capture;
var y;
var tDisco;
var tFloor;
var t;
var anX = 0;
var wood;
var speaker;
var floorHeight;
var back;
var sega;
var napVid;
function preload(){
napVid = createVideo("napVid.mov");
  napVid.hide();
  napVid.loop();
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
      discoball = loadImage("discoball.jpg");
    discoball.hide;
      capture = createCapture(VIDEO);
  capture.hide();
    y= height;
tDisco = discoball;
    tFloor = capture;
    wood = loadImage("wood.jpg");
    speaker =loadImage("speakers.png");
    floorHeight = height/5;
    back = -height/2;
    sega = new dancer(0,0,0);

showMeGrids();
}

function draw() {
    orbitControl();
    background(0);
         ambientLight(1000);
drawDiscoBall();
    drawDanceFloor();
    drawDJBooth();
        spotlight();
draw4Spekers();
    sega.display();
    drawScreen();
    //crazyLights();
    //PULL CAMERA BACK!
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed(){
    t = tFloor;
    tFloor = tDisco;
    tDisco = t;
}
function drawDiscoBall(){
        push();
    translate(0,-height/3);
spinDiscoBall();
     //pointLight(100,100,255,0,0,);
    //specularMaterial(250,0,0);
    ambientMaterial(50);
    texture(tDisco);
    sphere(75);
    pop();
}

function spinDiscoBall(){
    rotateY(anX);
    anX += .01;
}

function drawDanceFloor(){
    fill(255);
    push();
    translate(0, floorHeight);
    rotateX(-PI/2);
    //rotateY(PI/4);
    texture(tFloor);
    plane(width*3/4,height);
    pop();
}

function drawDJBooth(){
    var boxHeight = 200;
    push();
    //todo: fix drawing origin so box sits on floor perfectly.
    translate(0,(floorHeight/2),-height/2);
    texture(wood);
    box(500,boxHeight,100); 
    pop();
}

function spotlight(){
  pointLight(0, 100, 250, 3*width/4, height/4, -.5);
}

function crazyLights(){
    //draw a ton of point lights

}

function draw4Spekers(){
    var widthM = .4;
    drawSpeaker(-width*widthM,0,-back);
    drawSpeaker(width*widthM,0,-back);
    drawSpeaker(width*widthM,0,back);
    drawSpeaker(-width*widthM,0,back);

}

function drawSpeaker(x, y, z){
    push();
    fill(0);
    translate(x,y,z);
    texture(speaker);    
    box(100,400,60);
    pop();
}


function drawScreen(){
    push();
    translate(-width/2,0);
    rotateY(PI/2);
    texture(napVid);
    plane(800,450); //aspect ratio!
    pop();
}

function showMeGrids(){
    fill(255,0,0);
    plane(width);
    push();
    rotateY(PI/2);
    plane(height);
    pop();
}


function dancer(x,y,z, d){
    this.x = x;
    this.y = y;
    this.z = z;
    this.img = loadImage("dancer.png");
    this.direction = 1;
    this.timer = 0;
    
    this.display = function(){
        var d = this.img;
        fill(0);
        texture(this.img);
        
        
        push();
        translate(x,y,z);
        plane(this.direction*d.width,d.height);
        pop();
        this.timer++;
        if(this.timer == 10){
        this.direction = this.direction*-1;
            this.timer = 0;
        }
    }
}