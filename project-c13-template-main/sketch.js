var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;


  edges = createEdgeSprites();
  rabbit.collide(edges);

  

  

  var select = Math.round(random(1,3));

  if (frameCount % 80 == 0) {
    if (select == 1) {
      createApples();
    } else if (select == 2) {
      createRedLeaves();
    } else {
      createOrangeLeaves();
    }
  }

  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createOrangeLeaves() {
  ol = createSprite(random(50, 350), 40, 10, 10);
  ol.addImage(orangeImg);
  ol.scale = 0.08;
  ol.velocityY = 3;
  ol.lifetime = 150;
}

function createRedLeaves() {
  rl = createSprite(random(50, 350), 40, 10, 10);
  rl.addImage(redImg);
  rl.scale = 0.06;
  rl.velocityY = 3;
  rl.lifetime = 150;
}