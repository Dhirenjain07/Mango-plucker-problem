
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var ground;
var boy;
var mango;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	
     tree = new Tree(400,400);
     ground = new Ground(400,690,800,10);
	
  
}


function draw() {
  
  background("black");
  rectMode(CENTER);
drawSprites();
 
   tree.display();
 
   ground.display();
}












