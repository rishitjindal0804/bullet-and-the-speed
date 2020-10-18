 var thickness,wall;

var speed,weigth,bullet;

function setup() {
  createCanvas(1500,400);
createEdgeSprites();

  speed=random(223,321);
 weigth=random(30,52);
thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 50);
 bullet.velocityX = speed;

  wall=createSprite(1500, 200,thickness,height/2);
}

function draw() {
  background(255,255,255);  


 if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
var damge=0.5 * weigth * speed * speed/(thickness *thickness *thickness );

if(damge>10){
  wall.shapeColor=color(255,0,0);
}

if(damge<10){
  wall.shapeColor=color(0,255,0)
}
} 


 drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwall
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}

