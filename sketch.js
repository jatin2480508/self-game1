const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bulletsArray=[];
var bullet;
var zombiesArray=[];
function preload(){
  gunImg=loadImage("images/gunImage.gif");
}

function setup() {
  var canvas = createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  for(var i =0;i<20;i++){
    zombie = new Zombie(Math.random(200,1800),50) 
    zombiesArray.push(zombie);
  }
 
  ground = new Ground(600,height,2500,20);
  
 
}
function draw() {
  background("grey"); 
  
  for(var i =0;i<zombiesArray.length;i++){
    zombiesArray[i].display();
  }
  

  ground.display();
  for(var i =0;i<bulletsArray.length;i++){
    bulletsArray[i].display();
  }
 
 image(gunImg,mouseX,mouseY,150,50);
}
function keyPressed(){
  if(keyCode===32){
  bullet =  new Bullet(mouseX+10,mouseY);
  bulletsArray.push(bullet);
  }
}

