var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
  
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683, height-150-(i*400) , width , grassHeight);
    if(i%2===0){
      var road = createSprite(683 , height-150-(i*400)-grassHeight , width , 300);
      road.shapeColour = "black";
}
     bottomGrass1.shapeColour = "grey";
}
  
for(var i=0;i<40;i++){
  car = new Car(2);
  carGroup1.add(car.spt);
}
for(var i=0;i<40;i++){
  log = new Log(-3);
  logGroup1.add(car.spt);
}  
 }

function draw() {

  background("skyblue");
 
  for(i=1;i<carGroup1.length;i++) { 
    if(carGroup1[i].x>width) { 
      carGroup1[i].x=0; } 
    if(carGroup1[i].x<0) { 
      carGroup1[i].x=width; } }


    //making the logs reapper 


    for(i=1;i<logGroup1.length;i++){ 
      if(logGroup1[i].x<0) { 
      logGroup1[i].x=width; } 
    }
  

  drawSprites();









}
  

