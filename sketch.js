var ball, leftBar,rightBar,bottomBar;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(200,200,10);
	leftBar = new Dustbin(500,200,100,20);
	rightBar = new Dustbin(600,200,100,20);
	bottomBar = new Dustbin(700,200,20,100);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  leftBar.display();
  rightBar.dsiplay();
  bottomBar.display();
  drawSprites();
 
}



