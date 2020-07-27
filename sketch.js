
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21,block22,block23;
var block24,block25,block26,block27,block28;
var block29,block30,block31;
var block32;

var polygon;

function setup() {
  var canvas =  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(150,200);

  rope = new Sling(polygon.body,{x:150,y:200});

  ground1 = new Stand(370,300,160,10);
  ground2 = new Stand(600,250,160,10);

  block1 = new Block(370,280);
  block2 = new Block(350,280);
  block3 = new Block(330,280);
  block4 = new Block(310,280);
  block5 = new Block(390,280);
  block6 = new Block(410,280);
  block7 = new Block(430,280);

  block8 = new Block(370,260);
  block9 = new Block(350,260);
  block10 = new Block(330,260);
  block11 = new Block(390,260);
  block12 = new Block(410,260);

  block13 = new Block(370,240);
  block14 = new Block(350,240);
  block15 = new Block(390,240);

  block16 = new Block(370,220);


 
  block17 = new Block(600,230);
  block18 = new Block(580,230);
  block19 = new Block(560,230);
  block20 = new Block(540,230);
  block21 = new Block(620,230);
  block22 = new Block(640,230);
  block23 = new Block(660,230);
  block24 = new Block(600,210);
  block25 = new Block(580,210);
  block26 = new Block(560,210);
  block27 = new Block(620,210);
  block28 = new Block(640,210);

  block29 = new Block(600,190);
  block30 = new Block(580,190);
  block31 = new Block(620,190);

  block32 = new Block(600,160);

  ground3 = new Stand(400,395,800,10);

}

function draw() {
  background(0,255,0); 
  Engine.update(engine); 
  
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  polygon.display();

  ground3.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}