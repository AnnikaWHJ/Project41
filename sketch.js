var rocket, backgroundImg, rocketImg
var spaceMonsterImg, jupiterImg, ultronImg
var spaceMonster, jupiter, ultron
var spaceMonsterGroup
var planet,planet2,mars,saturn
var planetImg,planet2Img,marsImg, saturnImg
function preload(){
    rocketImg = loadImage("Images/Rocket.png")
    backgroundImg = loadImage("Images/Background.jpg")
    spaceMonsterImg = loadImage("Images/spaceMonster.png")
    jupiterImg = loadImage("Images/Jupiter.png")
    ultronImg = loadImage("Images/Ultron.png")
    marsImg = loadImage("Images/Mars.png")
    saturnImg = loadImage("Images/Saturn.png")
    planetImg = loadImage("Images/Planet.png")
    planet2Img = loadImage("Images/Planet2.png")
}
function setup(){
    createCanvas(1200,800)
    back = createSprite(600,400,1200,800)
    back.addImage(backgroundImg)
    rocket = createSprite(300,300,20,20)
    rocket.scale = 0.3
    rocket.addImage(rocketImg)
    
    ultron = createSprite(100,500,40,40)
    ultron.addImage(ultronImg)
    ultron.scale = 0.2
    back.scale = 1.5
    ultron.velocityX = 0.3
    ultron.velocityY = 0.3

}

function draw(){
    background("black")
    back.velocityX = -2
    

    if (back.x < 20){
        back.x = back.width/2;
       
      }
      spawnSpaceMonsters()

      spawnPlanets()

     drawSprites()
    
}

function spawnSpaceMonsters(){
    if (frameCount % 200 === 0) {
        spaceMonster = createSprite(1200,400,50,50)
        spaceMonster.y = Math.round(random(200,600))
        spaceMonster.addImage(spaceMonsterImg)
        spaceMonster.scale = 0.2
        spaceMonster.lifetime = 1200;
        spaceMonster.depth = rocket.depth + 1
        spaceMonster.velocityX = -1
        
    }
}

function spawnPlanets(){
    if (frameCount % 100 === 0){
        jupiter = createSprite(500,700,30,30)
        jupiter.velocityX = -2
        switch(random){
         case 1: jupiter.addImage(planetImg)
                break;
    
        case 2: jupiter.addImage(planet2Img)
                break;
    
        case 3: jupiter.addImage(marsImg)
                break;
    
        case 4: jupiter.addImage(saturnImg)
                break;
    
        case 5: jupiter.addImage(jupiterImg)
                break;
        }
}


        
}
   