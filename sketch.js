const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight/2);
	


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,20,1700,30);
	bob1= new Bob(1000,900);
  bob2 = new Bob(800,900);
 
  bob3 = new Bob(600,900)
  bob4 = new Bob(400,900)
  bob5 = new Bob(50,900)
	rope1 = new Rope(bob1.body,roof.body,{x:290,y:20});
	rope2 = new Rope(bob2.body,roof.body,{x:230,y:20});
	rope3 = new Rope(bob3.body,roof .body,{x:170,y:20})
  rope4 = new Rope(bob4.body,roof .body,{x:110,y:20})
  rope5 = new Rope(bob5.body,roof .body,{x:50,y:20})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 // roof.display();
  bob2.display();
  bob1.display();
rope1.display();
rope2.display();
bob3.display();
rope3.display();
bob4.display()
  rope4.display()
  bob5.display()
  rope5.display()
  drawSprites();
  fill("white")
  textSize(20)
  stroke("black")
  text("Use mouse to move the pendulam",20,40)
 
}


function mouseDragged() {
	

	  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});

	}
