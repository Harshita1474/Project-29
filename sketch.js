const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ball;
var polygon;
var block1, block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

  polygon=new Polygon(400,400,50,50);

  slingShot= new SlingShot(polygon.body,{x:100,y:200});

  ground1 = new Ground(700,790,1400,20);
  ground2 = new Ground(725,410,300,10);
  ground3 = new Ground(1090,230,200,10);

  block1= new Block(630,385,30,40);
  block2= new Block(660,385,30,40);
  block3= new Block(690,385,30,40);
  block4= new Block(720,385,30,40);
  block5= new Block(750,385,30,40);
  block6= new Block(780,385,30,40);
  block7= new Block(810,385,30,40);

  block8= new Block(660,345,30,40);
  block9= new Block(690,345,30,40);
  block10= new Block(720,345,30,40);
  block11= new Block(750,345,30,40);
  block12= new Block(780,345,30,40);

  block13= new Block(690,305,30,40);
  block14= new Block(720,305,30,40);
  block15= new Block(750,305,30,40);

  block16= new Block(720,265,30,40);


 



  block17= new Block(1030,205,30,40);
  block18= new Block(1060,205,30,40);
  block19= new Block(1090,205,30,40);
  block20= new Block(1120,205,30,40);
  block21= new Block(1150,205,30,40);

  block22= new Block(1060,165,30,40);
  block23= new Block(1090,165,30,40);
  block24= new Block(1120,165,30,40);

  block25= new Block(1090,125,30,40);  

}

function draw() {
  background(255); 
 
  //console.log(polygon.body)
  console.log(block1.body)


  ground1.display();
  ground2.display();
  ground3.display();
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
  polygon.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  slingShot.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
