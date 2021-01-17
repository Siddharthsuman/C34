const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;



var world, engine, ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18,box19,box20;
var ball,rope;


function setup() {
  createCanvas(3000,800);
   engine=Engine.create()
   world=engine.world;
   
   ground=new Ground(width/2,780,3000,20);
    //C1
    box1=new Box(1200,730,70,70);
    box2=new Box(1200,730,70,70);
    box3=new Box(1200,730,70,70);
    box4=new Box(1200,730,70,70);
    box5=new Box(1200,730,70,70);
    box6=new Box(1200,730,70,70);
    box7=new Box(1200,730,70,70);
    box8=new Box(1200,730,70,70);
    
    //C2
    box9=new Box(1300,730,70,70);
    box10=new Box(1300,730,70,70);
    box11=new Box(1300,730,70,70);
    box12=new Box(1300,730,70,70);
    box13=new Box(1300,730,70,70);
    box14=new Box(1300,730,70,70);

    //C3
    box15=new Box(1400,730,70,70);
    box16=new Box(1400,730,70,70);
    box17=new Box(1400,730,70,70);
    box18=new Box(1400,730,70,70);
    box19=new Box(1400,730,70,70);
    box20=new Box(1400,730,70,70);
   
    ball=new Ball(200,200,80,80);
     rope=new Rope(ball.body,{x:1000,y:80})
  }

function draw() {

  background(255,255,255);
  Engine.update(engine)
  ground.display();
  push();  
  stroke(155, 0, 0)
  fill(234, 11, 11)
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  pop();
  push();
  fill(136, 234, 175)
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  pop();
  push();
  fill(0, 255, 225)
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  pop();
  ball.display();
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}