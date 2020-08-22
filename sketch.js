var fixedrectangle;
var movingrectangle;


function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(60, 50, 40, 40);
  fixedrectangle.shapeColor = "blue";
   movingrectangle = createSprite(40,40,30,20);
   movingrectangle.shapeColor ="blue";
   fixedrectangle.debug = true;
   movingrectangle.debug = true;
}

function draw() {
  background(255,255,255); 
  console.log(movingrectangle.x);
movingrectangle.x = World.mouseX;
movingrectangle.y = World.mouseY;
if(movingrectangle.x-fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2
  && fixedrectangle.x - movingrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 
  && movingrectangle.y - fixedrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2
  && fixedrectangle.y - movingrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2){
  movingrectangle.shapeColor = "pink";
  fixedrectangle.shapeColor = "pink";

}

else{
  fixedrectangle.shapeColor = "blue";
  movingrectangle.shapeColor = "blue";
}
  drawSprites();
}