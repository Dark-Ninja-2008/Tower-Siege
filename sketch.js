
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var cyan1,cyan2,cyan3,cyan4,cyan5;
var lime1,lime2,lime3;
var red1;
var hexagon1;
var slingshot1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(520,300,140,10);
	cyan1 = new BlueBox(500,280,20,30);
	cyan2 = new BlueBox(480,280,20,30);
	cyan3 = new BlueBox(520,280,20,30);
	cyan4 = new BlueBox(540,280,20,30);
	cyan5 = new BlueBox(560,280,20,30);
	lime1 = new GreenBox(500,250,20,30);
	lime2 = new GreenBox(540,250,20,30);
	lime3 = new GreenBox(520,250,20,30);
	red1 = new RedBox(520,220,20,30);
	hexagon1 = new Hexagon(250,250,40,40);
	slingshot1 = new SlingShot(hexagon1.body,{x:250,y:250});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  Engine.update(engine);

  ground1.display();
  cyan1.display();
  cyan2.display();
  cyan3.display();
  cyan4.display();
  cyan5.display();
  lime1.display();
  lime2.display();
  lime3.display();
  red1.display();
  hexagon1.display();
  slingshot1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
	slingshot1.fly();
	//hexagon1.body.setVelocity = 10;
}



