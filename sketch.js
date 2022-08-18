var sprite;
function setup() {
  createCanvas(1000,1000);
  sprite=createSprite(500,500,100,100);
}

function draw() 
{
  background("blue");
drawSprites();
if(keyDown(RIGHT_ARROW)){
  sprite.position.x+=5;
}
if(keyDown(LEFT_ARROW)){
  sprite.position.x-=5;
}
if(keyDown(UP_ARROW)){
  sprite.position.y-=5;
}
if(keyDown(DOWN_ARROW)){
  sprite.position.y+=5;
}
}




