var bullet, wall;
var speed, weight, thickness, damage;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321)
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (255);

}
function draw() {
  background(0);  

  
  
  if (hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
  
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  console.log(damage);
  if (damage > 10){
    wall.shapeColor =color(255,0,0)
  }

  if (damage < 10){
    wall.shapeColor =color(0,255,0)
  }
  
}

drawSprites();
}


function hasCollided(ibullet, iwall){
    bulletRightEdge = ibullet.x + ibullet.width;
    wallLeftEdge = iwall.x;
    if (bulletRightEdge >= wallLeftEdge){
      return true
    }
    return false;
}


