
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


//var planeImg, rubberImg, hammerImg;
var plane, hammer, rubber, stone, sand, iron;


function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plane = new Plane(600,height,1200,20)

	 hammer = new Hammer(30,100);

	rubber = new Rubber(900, 520,70);

	stone = new Stone(700,320,100,100);

	//sand = new Sand(450, 699);

	iron = new Iron(450, 660);


  
}


function draw() {
 
  background("skyblue");
  Engine.update(engine);
 
 
	plane.display();
	hammer.display();
	rubber.display();
	stone.display();
	//sand.display();
	iron.display();
}



