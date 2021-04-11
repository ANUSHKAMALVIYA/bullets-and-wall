var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(3600,400)

  thickness=randm(22,83);

  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,100);

  speed=random(223,321);
  weight=random(30,25);

bullet.velocityX=speed;

}

function draw();

background("black");

if (wall.x-bullet.x< (bullet.width+wall.width)/2) {
  bullet.velocityX=0
  var deformation=0.5+width+speed+spee/22509;
  if(deformation>180) {
bullet.shapecolour="white"
  }
  if(deformation<180n&& deformation>100){
    bullet=shapecolour="white"
  }
  if(deromation<100) {
    white=shapecolor="white"
  }
}

drawSprites();

function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true;
    }
    return false;
}