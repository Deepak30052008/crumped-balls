
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
		var ground_options={
		isStatic:true
	}

    paper=new Paper(100,575,15)
    ground=Bodies.rectangle(400,590,800,20,ground_options);

	fill("white");
    box1= new Box(500,580,195,20);
	box2= new Box(425,550,20,115);
	box3 = new Box(620,550,20,115);
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("black");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
}
function keyPressed(){
 if(keyCode===UP_ARROW){
  	Matter.Body.applyForce(paper.body,paper.body.position,{x:18,y:-45})
 }
}

