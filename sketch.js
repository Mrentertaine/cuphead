var introBg
var helper
var water ,water2 
var plane, hello,lightHouse
var devil1,devil2
var cup1,cup2
var chest1,chest2
var startOp;
var cuphead2
var gameState=0;
var cuphead;
var end;
var tresMap,object1
var tres
var devilTh1
var nextLevel
var obstacle;
var bullet;
var sound1,sound2,sound3,sound4,sound5,sound6,sound7
var sound8,sound9,sound10,sound11,sound12,sound13,sound14,sound15,sound16,sound17 ,sound18 ,sound19, OS
var chest ;
var devilB;
var bul;
var S1,N1,E1;
var join;
var j
var bullet 
var cupF,cup9

function preload() {

  sound1=loadSound("Sounds/1.mp3")
  join=loadSound("Sounds/join1.mp3")
  sound3=loadSound("Sounds/3.mp3")
  sound4=loadSound("Sounds/4.mp3")
  sound5=loadSound("Sounds/5.mp3")
  sound6=loadSound("Sounds/6.mp3")
  sound7=loadSound("Sounds/7.mp3")  
  sound8=loadSound("Sounds/8.mp3")
  sound9=loadSound("Sounds/9.mp3")
  sound10=loadSound("Sounds/join2.mp3")
 
  OS=loadSound("Sounds/Start.mp3")

introBg=loadImage("gamePhotos/usBg.png")

helperImg=loadImage("gamePhotos/helper.png")


chest2=loadImage("gamePhotos/chestOpen.png")

chest1=loadImage("gamePhotos/closedChest.png")

cup2=loadImage("gamePhotos/cup1.png")

cup1=loadImage("gamePhotos/cup2.png")

devil2=loadImage("gamePhotos/devil1.png")

devil1=loadImage("gamePhotos/devil2.png")

hello=loadImage("gamePhotos/hi..png")

lightHouse=loadImage("gamePhotos/lighthouseBg.jpeg")

plane=loadImage("gamePhotos/PlaneCup.png")

water2=loadImage("gamePhotos/water.png")

water=loadImage("gamePhotos/waterBg.png")

object1=loadImage("gamePhotos/bomb.png")

tresMap=loadImage("gamePhotos/map.png")

bul=loadImage("gamePhotos/bul.png")

S1=loadImage("gamePhotos/s.jpeg")

N1=loadImage("gamePhotos/N.png ")

E1=loadImage("gamePhotos/E.png")

cupF=loadImage("gamePhotos/cup5.png")
}



function setup() {
  createCanvas(800,400);

  helper=createSprite(350,350,20,20)
helper.addImage(helperImg);

cuphead=createSprite(100,350,20,20)
cuphead.addImage(hello)
cuphead.scale=0.5
cuphead.visible=false;


cuphead2=createSprite(30,350,20,20)
cuphead2.addImage(cup2)
cuphead2.scale=0.2;
cuphead2.visible=false;



devilOp1=createSprite(250,70,10,10)
devilOp1.addImage(devil1)
devilOp1.scale=0.3
devilOp1.visible=false
devilOp1.velocityY= 6;
//devilOp1.debug="true";
devilOp1.setCollider("rectangle",0,0,10,10);


devilOp2=createSprite(400,350,10,10)
devilOp2.addImage(devil1)
devilOp2.scale=0.3
devilOp2.visible=false
devilOp2.velocityY= 6;
devilOp2.setCollider("rectangle",0,0,10,10);


devilOp3=createSprite(550,70,10,10)
devilOp3.addImage(devil1)
devilOp3.scale=0.3
devilOp3.visible=false
devilOp3.velocityY= 6;
devilOp3.setCollider("rectangle",0,0,10,10);


devilOp4=createSprite(700,350,10,10)
devilOp4.addImage(devil1)
devilOp4.scale=0.3
devilOp4.visible=false
devilOp4.velocityY= 6;
devilOp4.setCollider("rectangle",0,0,10,10);


edges= createEdgeSprites()

end=createSprite(200,200,10,10)
end.visible=false


cup3=createSprite(200,200,20,20)
cup3.addImage(plane)
cup3.scale=0.3
cup3.visible=false
cup3.velocityY=3


tres=createSprite(770,200,50,50)
tres.addImage(tresMap)
tres.scale=0.4
tres.visible=false

startOp=createSprite(700,50,20,20);
startOp.visible=false
startOp.addImage(S1)

devilTh1=createSprite(200,200,10,10)
devilTh1.addImage(devil2)
devilTh1.visible=false 
devilTh1.scale=0.5

nextLevel=createSprite(700,50,20,20)
nextLevel.visible=false
nextLevel.addImage(N1)

cupPlane=createSprite(100,100,20,20)
cupPlane.visible=false
cupPlane.addImage(plane)
cupPlane.scale=0.3
//cupPlane.velocityY=4


chest=createSprite(200,750,50,50)
chest.visible=false
chest.addImage(chest1)
chest.scale=0.3

devilB=createSprite(250,250,50,50)
devilB.visible=false
devilB.addImage(devil1 )
devilB.scale=0.5

cup9=createSprite(100,350,20,20)
cup9.visible=false
cup9.addImage(cupF)
cup9.scale=0.5


}

function draw() {
  background(introBg);  

if(gameState==0) {
  start();
}
 
  if(gameState==1) {
    level1();
  }
  
  
  if(gameState==2) {
    gameend();
  }


  if(keyDown("left")){
    cuphead2.x=cuphead2.x - 4
  }
  
  if(keyDown("right")){
    cuphead2.x=cuphead2.x + 4
  }
  if(keyDown("up")){
    cuphead2.y=cuphead2.y - 4
  }
  if(keyDown("down")){
    cuphead2.y=cuphead2.y + 4
  }

    
  devilOp1.bounceOff(edges)
devilOp2.bounceOff(edges)
devilOp3.bounceOff(edges)
devilOp4.bounceOff(edges)


drawSprites();
}


function start(){
  if(mouseIsOver(helper) ){
    text("welcome to the Inkwile",200,200)
    stroke(20)
   //callsound1();
   

    //add voice for opening 
    // tell to click on the arrow voice 
  
  }

  
  if((keyIsDown(RIGHT_ARROW))){
    background(introBg);  
  

    join.play()


    startOp.visible=true

    cuphead.visible=true
    cuphead2.visible=false
   
    devilOp1.visible=false
    devilOp2.visible=false
    devilOp3.visible=false
    devilOp4.visible=false
    cup3.visible=false
    devilTh1.visible=false 
    nextLevel.visible=false
    cupPlane.visible=false
  }




  if(mouseIsOver(startOp))
     {
      gameState=1;
      startOp.visible=false;
    }
   // OS.play()

    tres.visible=false
    end.visible=false;
    devilTh1.visible=false 
    nextLevel.visible=false
  //  startOp.visible=false;
    drawSprites();
}





function level1() {

//add soft impreial march music 
  // add voice from the cuphead sidee. for telling to use the arrpws 

// tell the rules 

background("white")
//sound3.play()
helper.visible=false
cuphead.visible=false
text ("use the arrow keys",20,250)
text ("go to the another corner for the map", 20,240)
cuphead2.visible=true
devilOp1.visible=true 
devilOp2.visible=true 
devilOp3.visible=true 
devilOp4.visible=true
devilTh1.visible=false 
nextLevel.visible=false
cupPlane.visible=false

if(cuphead2.isTouching(devilOp1))
{
   gameState=2;
   //sound4.play();
   //sound4.stop();
   
  
}






if(cuphead2.isTouching(devilOp3)){
 startOp.visible=false
  gameState=2;
 //sound4.play()

}

if(cuphead2.isTouching(devilOp4)){
  gameState=2;
  //startOp.visible=false
  //sound4.play()
 
}

if(cuphead2.isTouching(devilOp2)){
  gameState=2;
 // startOp.visible=false

 //sound4.play()
}



//gameStae 2 =end


startOp.visible=false
tres.visible=true

end.visible=false
cup3.visible=false

if(cuphead2.isTouching(tres)){

 drawSprites();
  devilOp1.visible=false
  devilOp2.visible=false
  devilOp3.visible=false
  devilOp4.addImage(devil2)
  devilOp4.x=200
  devilOp4.scale=0.5
  devilOp4.velocityY=0
  //sound5.play()
  //sound6.play()
  //sound7.play()
  nextLevel.visible=true;
  
 
  level2();



}


 drawSprites();

}

// end function to be called when you fail the level 
function gameend ()
{
  

  nextLevel.visible=false
startOp.visible = false;
cuphead2.visible=false
devilOp1.visible=false
devilOp2.visible=false
cup3.visible=false
devilOp3.visible=false
devilOp4.visible=false

cupPlane.visible=false

background("white");
//sound4.play()  
text("YOU FAILED", 200,100)
text("RETRY ", 200,150)
  
end.visible=true;


if(mousePressedOver(startOp))
{
  text ("Hello",300,300)
}

drawSprites();

}




function level2()
{

//background(lighthouse)

text("press 1,2,3" ,300,20)
  devilOp4.visible=false
cup3.visible=false
cuphead2.visible=false


nextLevel.visible=false
tres.visible=false



background(lightHouse);
   
    //join.stop()


//sound8.play()
cupPlane.visible=true;
if(keyCode == 49) {
  cupPlane.velocityY = - 2;
}

if(keyCode == 50) {
  cupPlane.velocityY =  2;
}

if (frameCount % 60 === 0)
{  obstacle = createSprite(Math.round(random(200,600)),Math.round(random(10,60)),40,10);
  obstacle.addImage(object1)
  obstacle.scale=0.3
   obstacle.velocityY = 4;
}

if(keyCode == 32) {
  bullet = createSprite( Math.round(random(100,400)),Math.round(random(10,60)),40,10 );

  bullet.addImage(bul)
  bullet .scale=0.3
  bullet.velocityX= 4
  
  if(obstacle.isTouching(bullet)){
    obstacle.visible=false
    bullet.visible=false
   
  }
}

if(keyCode == 51){
  level3()
}


drawSprites();


}


if(gameState==3){
  level3()
}
function level3() {
  
  
  drawSprites()
  background(water2)



 cup9.visible= true 
devilB.visible= true 

sound10.play()


}
