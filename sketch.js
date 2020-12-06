var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200,200,50,100);
  movingRect = createSprite(400,200,100,50);
  rect1 = createSprite(600,400,50,50);
  rect2=createSprite(600,600,50,50);

  rect1.velocityY=2;
  rect2.velocityY=-2;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background("black");

  movingRect.x =  mouseX;
  movingRect.y =  mouseY;
if(isTouching(fixedRect,movingRect)===true){
  fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";
}
  else{
    fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }
  bounceOff(rect1,rect2);
  drawSprites(); 
}
