
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,dust;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	
	engine = Engine.create();
	world = engine.world;
	rect1=createSprite(420,650,250,20);
	rect1.shapeColor=color("red")
	rect2=createSprite(300,620,20,500);
	rect2.shapeColor=color("red")
	rect3=createSprite(550,620,20,500);
	rect3.shapeColor=color("red")
	ball = new paper(200,300,70);
	ground=new Ground(400,660,1200,20);
	dust= new dustbin(400,600,50,50);
	
	//Create the Bodies Here.
	rect1=Bodies.rectangle(420,630,250,20,{isStatic:true});
	rect2=Bodies.rectangle(300,620,20,500,{isStatic:true});
	rect3=Bodies.rectangle(550,620,20,500,{isStatic:true});
	World.add(world, rect1);
	World.add(world, rect2);
	World.add(world, rect3);
	
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ball.display();
  dust.display();
  ground.display();

  
 drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-85});
	   
	 }
   }



