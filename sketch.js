const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var stand;
var engine,world;
var slingShot,polygon;

function preload(){
polygonimg=loadImage("polygon.png")
}

function setup(){
createCanvas(1400,700);
engine = Engine.create();
world = engine.world;

stand = new Stand(600,450,300,10); 

block1 = new Block(480,430,30,30);
block2 = new Block(510,430,30,30);
block3 = new Block(540,430,30,30);
block4 = new Block(570,430,30,30);
block5 = new Block(600,430,30,30);
block6 = new Block(630,430,30,30);
block7 = new Block(660,430,30,30);
block8 = new Block(690,430,30,30);
block9 = new Block(720,430,30,30);

block10 = new Block(510,400,30,30);
block11 = new Block(540,400,30,30);
block12 = new Block(570,400,30,30);
block13 = new Block(600,400,30,30);
block14 = new Block(630,400,30,30);
block15 = new Block(660,400,30,30);
block16 = new Block(690,400,30,30);

block17 = new Block(540,370,30,30);
block18 = new Block(570,370,30,30);
block19 = new Block(600,370,30,30);
block20 = new Block(630,370,30,30);
block21 = new Block(660,370,30,30);

block22 = new Block(570,340,30,30);
block23 = new Block(600,340,30,30);
block24 = new Block(630,340,30,30);

block25 = new Block(600,310,30,30);

}

function draw(){
    Engine.update(engine);
rectMode(CENTER);
background(170)

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
slingShot = new SlingShot(this.polygon,{x:100,y:200})


imageMode(CENTER);
image(polygonimg,polygon.position.x,polygon.position.y,40,40);

stand.display();

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

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
 function mouseReleased (){
     slingShot.fly();
 }  