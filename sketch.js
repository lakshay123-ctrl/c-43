var mario,mario_img;
var background_Img,ground;
var ground_img;
var stone_ground;
var obstacle;
var brick_img;
var brick1_img;
var PLAY = 1;
var END = 2;
var gameState = PLAY;
var enemyg1,enemyg2,brickg,markg;

function preload(){
  mario_img = loadAnimation("images/m1.png","images/m2.png","images/m3.png");
  background_Img = loadImage("images/background1.png");
  ground_img = loadImage("images/ground.png");
  obstacle = loadAnimation("images/enemy1.png","images/enemy2.png");
  brick_img = loadImage("images/brick.png");
  brick1_img = loadImage("images/questionmark.png");
  flower_img = loadAnimation("images/flower1.png","images/flower2.png");
};

function setup() {
  createCanvas(1200,800);
  mario = createSprite(70,500,20,50);
  mario.addAnimation("running",mario_img);
  mario.scale = 0.4;
  mario.debug= true;
  mario.setCollider("rectangle",0,0,210,280);
  ground = createSprite(400,720,1800,30);

  enemyg1 = new Group();
  enemyg2 = new Group();
  brickg = new Group();
  markg = new Group();
 
 
  ground.visible = true;

  stone_ground = createSprite(400,780,1800,80);
  stone_ground.addImage(ground_img);
  stone_ground.scale =4;
  stone_ground.velocityX = -4;
  stone_ground.x = stone_ground.width/2;
}

function draw() {
  background(background_Img); 
  
  mario.collide(ground);

  console.log(stone_ground.x)

 if (keyDown("UP_ARROW")){
   mario.velocityY = -12;
 }

 mario.velocityY = mario.velocityY+0.5;

 if (stone_ground.x<0){
   stone_ground.x = stone_ground.width/2;
 }
  spawnObstacles();
  spawnObstacles1();
  spawnBricks();
  spawnFlowers();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount%200 === 0){
  var enemy = createSprite(1000,685,20,20);
  enemy.addAnimation("enemy",obstacle);
  enemy.velocityX = -6;
  enemy.scale = 0.2;
  enemyg1.add(enemy);

  enemy.lifetime = 250;
  }
}

function spawnObstacles1(){
  if (frameCount%210 === 0){
  var enemy = createSprite(1000,685,20,20);
  enemy.addAnimation("enemy",obstacle);
  enemy.velocityX = -7;
  enemy.scale = 0.2;
  enemyg2.add(enemy);

  enemy.lifetime = 250;
  }
}

function spawnBricks(){
  if (frameCount%300 === 0){
    var brick = createSprite(1000,500,20,20);
    var mark = createSprite(1020,500,20,20);
    brick.y = Math.round(random(400,500));
    mark.y = brick.y;
    brick.addImage(brick_img);
    mark.addImage(brick1_img);
    mark.velocityX = -6;
    brick.velocityX = -6;
    brick.scale = 0.8;
    mark.scale = 0.8;
    mark.lifetime = 250;
    brickg.add(brick);
    markg.add(mark);
  
    brick.lifetime = 250;
  }
}

function spawnFlowers(){
  if (frameCount%500 === 0){
    var flower = createSprite(1000,675,20,20);
    flower.addAnimation("flower",flower_img);
    flower.velocityX = -6;
    flower.scale = 0.8;
  
    flower.lifetime = 250;
  }
}


