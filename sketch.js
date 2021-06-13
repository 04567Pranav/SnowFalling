const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
var bg
var boy,boy1
var ground
var rain=[]
var drops=100




function preload(){
  bg = loadImage("snow2.jpg")
  boy = loadImage("boy.png")
}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create(); world = engine.world;
 
  boy1 = createSprite(200,600,100,100)
 boy1.addImage(boy)
 boy1.scale=.5
 ground =createSprite(50,700,2000,10)
 ground.visible=false

 if(frameCount%150===0){
  for(var i=0; i<drops; i++){
    rain.push(new Snow(random(0,400), random (0,400)))

  }
}
}

function draw() {
  background(bg) 
 
  if(keyDown("space")){
    boy1.velocityY=-10
  }
  boy1.velocityY=boy1.velocityY+.5

  if(keyDown("right_arrow")){
    boy1.x = boy1.x +3
  }

  if(keyDown("left_arrow")){
    boy1.x = boy1.x + -3
  }
  boy1.collide(ground)

  for(var i= 0; i< drops; i++){
    rain[i].sDisplay();
    rain[i].updateY()
  }

  
  drawSprites();
}


