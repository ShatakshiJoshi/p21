
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,lSide,rSide;
var world;
var radius = 40;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.1,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball=Bodies.circle(100,100,20,ball_options);
	World.add(world,ball);

	groundObj=new ground(width/2,670,width,20);
	lSide = new ground(400,600,20,120);
	rSide = new ground(550,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius);

  groundObj.display();
  lSide.display();
  rSide.display();
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode===RIGHT_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:55,y:-55});
}

}

