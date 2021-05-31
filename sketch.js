
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
   foodGroup=new Group();
  obstcaleGroup=new Group();
  
}



function setup() {
  createCanvas(670,400)
  score=0
  survivalTime =0
  monkey =createSprite(80,315,20,20) 
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground =createSprite(400,400,900,10);
  ground.velocityX=4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 
  
  
}


function draw() { 
  background("skyblue");
  
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  ground.velocityX=-8;
  ground.x=ground.width/2
                           
  if(World.frameCount%200===0){
    bananas()
  }
  if(World.frameCount%400===0){
    rocks()
  }
 if(monkey.isTouching(foodGroup)) {
    foodGroup.destroyEach()
   score=score+1
 }
  
  
  
  
drawSprites()
 fill("white") 
 text("Score: "+ score, 500,50);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime =Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50)
}


function bananas(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-4
  foodGroup.add(banana)
}
 
function rocks(){
  obstcale=createSprite(670,350,10,10)
  obstcale.addImage( obstaceImage)
  obstcale.scale=0.25
  obstcale.velocityX=-6
  obstcaleGroup.add(obstcale)
}


