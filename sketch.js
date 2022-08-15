
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;
function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
  var ground1_options ={
    isStatic: true
  };
  var ground2_options ={
    isStatic: true
  };
  var ground3_options ={
    isStatic: true
  };
  var ball_options = {
    //write a code to set value of restitution such that:
    restitution: 0.95,
    frictionAir:0.02
//Ball (white circle) bounces more when it hits the bottom.

  }

  var rock_options = {
   // write a code to set value of restitution such that:
   restitution:0.50,
   frictionAir:0.01
   // Rock (Red Circle) bounces less when it hits the bottom.
  }
   
  btn2 = createImg('up.png');
  btn2.position(30,500);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  btn3=createImg("right.png");
  btn3.position(100,500);
  btn3.size(50,50);
  btn3.mouseClicked(hForce);
  btn4=createImg("left.png");
  btn4.position(170,500);
  btn4.size(50,50);
  btn4.mouseClicked(lForce);
  btn5=createImg("down.png");
  btn5.position(240,500);
  btn5.size(50,50);
  btn5.mouseClicked(kForce);
  
  ball = Bodies.circle(100,50,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(250,50,20,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(300,550,800,20,ground_options);
  ground1=Bodies.rectangle(550,300,20,800,ground1_options);
  ground2=Bodies.rectangle(50,300,20,800,ground2_options);
  ground3=Bodies.rectangle(300,40,800,20,ground3_options);
  World.add(world, ground1);
  World.add(world, ground2);
  World.add(world, ground3);
  World.add(world, ground);
 

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,800,20);
rect(ground1.position.x,ground1.position.y,20,800);
rect(ground2.position.x,ground2.position.y,20,800);
rect(ground3.position.x,ground3.position.y,800,20);
ellipse(ball.position.x,ball.position.y,20);
push();
fill("brown");
ellipse(rock.position.x,rock.position.y,20);
pop();
}

function vForce()
{
 //write a code to move ball up when the button is clicked.
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
}
function lForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01,y:0});
}
function kForce(){
  Matter.Body.applyForce(ball,{x:0.1,y:0},{x:0,y:0.05});
}

  


