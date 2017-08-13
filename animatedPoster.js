var yellow;

var squiggles = [];
var notanother;
var party;
/*
todo:
squiggle
export rest of text
create filld in overlay things
xperiment w sound
xperiment with camera / star wars effect
*/

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    //the squiggles can be generated by subdividing the canvas.
    //to do - allow for vertical subdivisions to create proper dispersion
    
    var startX = 0 ;
    var subdivisions = 3;
    var squigsPerSub = 20;
    var endX = width/subdivisions;
    

    for (var sections = 1; sections <= subdivisions ; sections++){
    for (var i = 0; i < squigsPerSub ; i++)
    {
     squiggles.push(new squiggle(startX,endX));
    }
        startX += width/subdivisions;
        endX += width/subdivisions;
    }
    
    
    notanother = loadImage("not-another.png"); //overlay color: 255,204,255
    party = loadImage("party.png");
    //noLoop();
}

function draw() {

    //camera(0, 0, sin(frameCount * 0.01) * 100);

        background(96,211,216);

    for (var i = 0; i < squiggles.length; i++){
        squiggles[i].runFromMouse();
    }
    image(notanother, width/2 - notanother.width/2, height*.3);
    image(party, width/2 - party.width/2, height*.4);
/*
3d version - incomplete
   push();
   translate(0, -height*.3)
   fill(96,211,216);
    texture(notanother);
   plane(notanother.width, notanother.height);
   pop();
    
    texture(party);
    plane(party.width,party.height);
*/
    
}


function mousePressed(){
    fullscreen(true);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
/// need an ellipse, a triangle, custom shape

function deviceShaken(){
    for (var i = 0; i < squiggles.length; i++){
        if (squiggles[i].xSpeed() == 0) squiggles[i].xSpeed() = squiggles[i].speed;
        if (squiggles[i].ySpeed() == 0) squiggles[i].ySpeed() = squiggles[i].speed;
        squiggles[i].xSpeed() = squiggles[i].xSpeed()*2;
        squiggles[i].ySpeed() = squiggles[i].ySpeed()*2;
        squiggles[i].move();
        squiggles[i].display();
    }
    
}


function squiggle(startX, endX){
    if(startX == undefined){
        startX = 0;
        endX = width;

    }
  this.x = random(startX, endX);
  this.y = random(height);
  this.diameter = random(10, 20);
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.speed = 5;
    this.shape = random(["ellipse","triangle", "squiggle"]);
    this.theta = random(3);

        
  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };


  this.display = function() {  
    fill(220,234,92);
    noStroke();
      if ( this.shape == "ellipse") ellipse(this.x, this.y, this.diameter, this.diameter);
      else if (this.shape == "triangle") this.drawTriangle();
      else if (this.shape == "squiggle") { stroke(220,234,92); strokeWeight(4); noFill(); this.drawSquiggle();}
  }
  
  this.runFromMouse = function(){
      var margin = width/20;
      if( abs(mouseX - this.x) <= margin && abs(mouseY - this.y) <= margin){
          this.xSpeed = this.calcSpeed(mouseX,this.x);
          this.ySpeed = this.calcSpeed(mouseY,this.y);
          
      }
      /* this would stop the squiggle if you end up out of range.
      else {
         this.xSpeed = 0;
        this.ySpeed = 0;
      }
      */
      
      //slow down and change direction when you hit a wall
      if(this.x < 0) this.xSpeed = 1;
      else if(this.x > width )this.xSpeed = -1;
      
      if(this.y < 0) this.ySpeed = 1;
      else if (this.y > height) this.ySpeed = -1;
      
      
      this.move();
      this.display();
      
      
  }
  this.calcSpeed = function (mouse, pos){
      if(mouse<pos) return this.speed;
      else if (mouse == pos) return 0;
      else if (mouse > pos) return -this.speed;
  }
  
  this.drawTriangle = function(){
      var x1 = this.x - this.diameter;
      var y1 = this.y + this.diameter;
      var x2 = this.x;
      var y2 = this.y - this.diameter;
      var x3 = this.x + this.diameter;
      var y3 = this.y + this.diameter;
//      
//      fill(220,234,92);
//      noStroke();
      push();
//rotate(this.theta);
      triangle(x1,y1,x2,y2,x3,y3);
      pop();
  }
  
  this.drawSquiggle = function(){
      var d = this.diameter * 2;
      
      var x1 = this.x - d/2;
      var y1 = this.y ;
      var x2 = this.x - d/4;
      var y2 = this.y + d/4;
      var x3 = this.x;
      var y3 = this.y;
      var x4 = this.x + d/4;
      var y4 = this.y + d/4;
      var x5 = this.x+ d/2;
      var y5 = this.y;
      
      beginShape();
      vertex(x1,y1);
      vertex(x2,y2);
      vertex(x3,y3);
      vertex(x4,y4);
      vertex(x5,y5);
      endShape();
  
  }
}