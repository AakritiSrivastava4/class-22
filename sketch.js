const World= Matter.World; 
const Bodies= Matter.Bodies;
const Engine = Matter.Engine;

var world,engine
var box;
function setup() {
  engine= Engine.create();
  world = engine.world;
  createCanvas(800,400);

  var options= {
    isStatic :true
  }
  
  box= Bodies.rectangle (20,200,40,50,options);
  World.add (world,box)
  console.log(box)

  Engine.run(engine)
}

function draw() {
  background(0);  
  var pos = box.position
  rect(pos.x,pos.y,40,50)
}