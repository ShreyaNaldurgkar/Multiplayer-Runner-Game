var player,player2;
var obstacles;

function preload(){

  playerimg = loadAnimation("Screenshots/g1.png", "Screenshots/g2.png","Screenshots/g3.png");
  player2img = loadAnimation("Screenshots/o1.png", "Screenshots/o2.png");

  
}

function setup(){
  createCanvas(displayWidth, displayHeight-140);

  ground = createSprite(displayWidth/2, displayHeight-150, displayWidth, 20);
  ground2 = createSprite(displayWidth/2, displayHeight/2- 70, displayWidth, 20);
  player = new Player()
  player.create()

  

}


function draw(){
  background("black")

  

  drawSprites();

}