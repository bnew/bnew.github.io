var capture;
var y;
var tDisco;
var tFloor;
var t;
var anX = 0;
var wood;
var speaker;

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
    translate(0,height/6);
    rotateX(PI/4+1);
    //rotateY(PI/4);
    texture(tFloor);
    plane(width*3/4,height);
    pop();
}

function drawDJBooth(){
    translate(0,0,-height/2);
    texture(wood);
    box(500,200,100);
}

function spotlight(){
var locY = (mouseY / height - 0.5) *(-2);
  var locX = (mouseX / width - 0.5) *2;
  //to set the light position,
  //think of the world's coordinate as:
  // -1,1 -------- 1,1
  //   |            |
  //   |            |
  //   |            |
  // -1,-1---------1,-1
  pointLight(250, 250, 250, mouseX, mouseY, locY);
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

function randomColor(){
    return (random(255),random(255),random(255));
}