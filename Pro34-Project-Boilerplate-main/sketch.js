
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground, lixeira1, lixeira2;
var left;
var right;
var top_wall;
var ball;
var movimento_lateral, movimento_vertical;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
movimento_lateral = createImg ("right.png");
movimento_lateral.size(50,50);
movimento_lateral.position(100,30);
movimento_lateral.mouseClicked (forca_lateral);

movimento_vertical = createImg ("up.png");
movimento_vertical.position(20,30);
movimento_vertical.size(50,50);
movimento_vertical.mouseClicked (forca_vertical);

  ground =new Ground(400,390,800,20);
  right = new Ground(790,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(400,10,800,20);
  lixeira1 = new Ground(700,330,20,100);
  lixeira2 = new Ground(600,330,20,100);

  var ball_options = {
    restitution: 0.0,
    frictionAir:0.01
    }

  ball = Bodies.circle(200,100,25,ball_options);
  World.add(world,ball);
 
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,25);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  lixeira1.show();
  lixeira2.show();
  Engine.update(engine);
  
}

function forca_lateral (){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});

}

function forca_vertical (){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});

}