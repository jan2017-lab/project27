
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof = new Roof(300,50,500,50)
   bob1 = new Bob(150,300,50)
   rope1 = new Rope(bob1.body,{x:150,y:50})
   bob2 = new Bob(250,300,50)
   rope2 = new Rope(bob2.body,{x:250,y:50})
   bob3 = new Bob(350,300,50)
   rope3 = new Rope(bob3.body,{x:350,y:50})
   bob4 = new Bob(450,300,50)
   rope4 = new Rope(bob4.body,{x:450,y:50})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  bob1.display();
  rope1.display(); 
  bob2.display();
  rope2.display(); 
  bob3.display();
  rope3.display(); 
  bob4.display();
  rope4.display();  

  drawSprites();
 
}



