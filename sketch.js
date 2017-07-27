var capture;
var y;
var tDisco;
var tFloor;
var t;
var anX = 0;
var wood;
var speaker;
var floorHeight;

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

}

function draw() {
    orbitControl();
    background(0);
         ambientLight(1000);
drawDiscoBall();
    drawDanceFloor();
    drawDJBooth();
        spotlight();
drawSpeaker(width/2,-height/5);
    crazyLights();
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
var locY = (.75  - 0.5) *(-2);
  var locX = (mouseX / width - 0.5) *2;
  //to set the light position,
  //think of the world's coordinate as:
  // -1,1 -------- 1,1
  //   |            |
  //   |            |
  //   |            |
  // -1,-1---------1,-1
  pointLight(0, 100, 250, 3*width/4, height/4, -.5);
}

function crazyLights(){
    //draw a ton of point lights

}

function drawSpeaker(x, y){
    push();
    fill(0);
    translate(x,y,-height/2);
    texture(speaker);    
    box(100,450,60);
    pop();
}
