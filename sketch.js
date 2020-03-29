
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();  
  holder = new Holder();
  ball = new Ball(200,300,30);
  ball2 = new Ball(400,300,30);
  ball3 = new Ball(600,300,30);
  connector = new Connector({x:200,y:100},ball.body);
  connector2 = new Connector({x:400,y:100},ball2.body);
  connector3 = new Connector({x:600,y:100},ball3.body);
}


function draw() {
  background("lavender"); 
  Engine.update(engine);

  textSize(17);
  fill("black")
  text("Drag mouse to oscillate the pendulum to left and right with mouse",150,30);
  text("Press Enter to reset the Pendulum to start oscillating",215,60);

  ground.display();
  holder.display();
  ball.display();
  ball2.display();
  ball3.display();
  connector.display();
  connector2.display();
  connector3.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  Matter.Body.setPosition(ball2.body, {x: mouseX +200, y: mouseY});
  Matter.Body.setPosition(ball3.body, {x: mouseX+400 , y: mouseY});
}
function keyPressed(){
if(keyCode=ENTER){
  Matter.Body.setPosition(ball.body, {x: 200 , y: 200});
  Matter.Body.setPosition(ball2.body, {x: 400 ,y: 200});
  Matter.Body.setPosition(ball3.body, {x: 600 ,y: 200});
}
}





