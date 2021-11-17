var box;

function setup(){
createCanvas(600,400);
box=createSprite(200,100,40,20);


}

function draw(){

background("blue");

if(keyIsDown(LEFT_ARROW)){

  box.position.x = box.position.x -5;

}

if(keyIsDown(RIGHT_ARROW)){

box.position.x = box.position.x +5;

}

if(keyIsDown(UP_ARROW)){

box.position.y = box.position.y -5;

}

if(keyIsDown(DOWN_ARROW)){

  box.position.y = box.position.y +5;
   
}
drawSprites();
}