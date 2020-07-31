const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

function preload()
{
	polygonIMG=loadImage("polygon.png")
}



function setup() {
  createCanvas(1200,700); 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(600,700,1200,20); 
  stand1 = new Ground(440,400,250,10); 
  stand2 = new Ground(750,300,200,10);  
  //bottom of upper
  block1 = new Box(705,275,30,40);  
  block2 = new Box(736,275,30,40); 
  block3 = new Box(767,275,30,40);
  block4 = new Box(798,275,30,40); 
  //bottom mid of upper 
  block5 = new Box(720,235,30,40); 
  block6 = new Box(751,235,30,40); 
  block7 = new Box(782,235,30,40); 
  //top mid of upper 
  block8 = new Box(736,195,30,40); 
  block9 = new Box(767,195,30,40); 
  //final bo 
  block10 = new Box(751,155,30,40); 
  //bottom of lower 
  block11 = new Box(360,375,30,40);  
  block12 = new Box(391,375,30,40); 
  block13 = new Box(422,375,30,40);
  block14 = new Box(453,375,30,40);  
  block15 = new Box(484,375,30,40);
  block16 = new Box(515,375,30,40); 
  //next layer up of lower 
  block17 = new Box(375,335,30,40); 
  block18 = new Box(406,335,30,40);
  block19 = new Box(437,335,30,40);  
  block20 = new Box(468,335,30,40);
  block21 = new Box(499,335,30,40); 
  //next layer up of lower 
  block22 = new Box(390,295,30,40);
  block23 = new Box(421,295,30,40);  
  block24 = new Box(452,295,30,40);
  block25 = new Box(483,295,30,40);   
  //next layer up 
  block26 = new Box(421,255,30,40);
  block27 = new Box(452,255,30,40); 
  //top
  block28 = new Box(437,215,30,40);


  
  polygon = Bodies.circle(50,200,20);  
  
  World.add(world,polygon);   
 
  slingShot = new Slingshot (this.polygon,{x:100,y:200}) 

  
}

function draw() {
  background(100);  
  //Engine.update(engine);
  ground.display();   
  stand1.display();
  stand2.display(); 
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

  slingShot.display();  
  
  imageMode(CENTER);
  image(polygonIMG,polygon.position.x,polygon.position.y,40,40)
  
} 
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
} 