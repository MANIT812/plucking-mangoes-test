
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var child,child1,tree,tree1;
var ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var rope1,stone1;
function preload()
{
	child1=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1000,300);
	mango2=new mango(950,250);
	mango3=new mango(1000,350);
	mango4=new mango(1100,400);
	mango5=new mango(1050,320);
	mango6=new mango(1080,430);
	mango7=new mango(980,330);
	tree1=new Tree(900,300);
	ground=new Ground(600,550,1200,50);
	stone1=new stone(90,4000);
	rope1=new Rope(stone1.body,{x:100,y:360})
	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background("lightblue");
Engine.update(engine);
child=createSprite(180,430,100,100);
child.addImage(child1);
child.scale=0.15;
ground.display()
tree1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
stone1.display();
rope1.display();
detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);
detectCollision(stone1,mango5);
detectCollision(stone1,mango6);
detectCollision(stone1,mango7);
 drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope1.fly();
}
function detectCollision(lstone,lmango){
	var distance=dist(lstone.body.position.x,lstone.body.position.y,lstone.body.position.x,lstone.body.position.y);
	console.log(distance+" "+lstone.width/2+lmango.width/2 )
	if(distance<=lstone.width/2+lmango.width/2){
		Matter.Body.setStatic(lmango.body,false);
	}

}
