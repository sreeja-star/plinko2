var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particle;
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
//var score=0;
var gameState="play",points=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  //score=0;
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }

   



  
}
 


function draw() {
  background(175,220,236);
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  
  
  Engine.update(engine);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
 
 

 
   for (var i = 0; i < plinkos.length; i++) {  
     plinkos[i].display();  
   }
     
   for (var i = 0; i < divisions.length; i++) {  
    divisions[i].display();  
  }
}


 
  
 


