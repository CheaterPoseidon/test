var bullet,wall;
var bulletSpeed,bulletWeight,bulletThickness;



function setup() {
  createCanvas(1600,400);
  bulletThickness=random(22,83);
  bulletSpeed=random(223,321)
  bulletWeight=random(30,52);  
  bullet=createSprite(50, 15, 50, 50);
  bullet.shapeColor
  bullet.velocityX=bulletSpeed
  wall=createSprite(1200,200,bulletThickness,200)
  wall.shapeColor=color(80,80,80)

}

function draw() {
  background(255,255,255);  
  if (isTouching(wall,bullet)) {
    bullet.velocityX=0;
  }
  drawSprites();
}