
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20) 
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log (ground.x)

//creating groups
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
background("white")
  
stroke("white")
  textSize(20)
  fill("white")
  text("score:"+ score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:" + survivalTime,100,50)
  
  
  if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
       }
    
    //add gravity
   monkey.velocityY = monkey.velocityY + 0.8
  
 
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }


  
  
  
  
 
  
  monkey.collide(ground);
  
 drawSprites();

}

function spawnFood(){
  if(frameCount % 60===0){
    var banana=createSprite(300,120,20,40)
    banana.velocityX=-5
    banana.addimage(bananaImage);
    
    var rand=Math.round(random(1,7))
    
    bananaGroup.add(banana);
    banana.lifeTime=180
  }
  
  }

function spawnObstacle(){
  if(frameCount % 60===0){
  var obstacle=createSprite(600,165,10,40)
  obstacle.velocityX=-4
    obstacle.addImage(obstacleImage)
    
    obstacleGroup.add(obstacle);
    obstacle.lifeTime=200;
    
  }
  
}



