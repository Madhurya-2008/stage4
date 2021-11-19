var covid, drop, sanitizer, bg, restart, fire, scoreBoard, burns, levelUp, boy, 
girl, replay, trophy, read;
var covid_image, drop_image, sanitizer_image,bg_image,burns_image 
,restart_image,score_image, fire_image, levelUp_image, mask_image, 
boy_image, girl_image, replay_image, trophy_image, read_image;
var dropGroup, covidGroup;
var score;
var gameState=0;

function preload() {
 
 covid_image=loadImage("covid.png");
 drop_image=loadImage("drop.png");
 sanitizer_image=loadImage("sanitizer.png");
 bg_image=loadImage("download.jpg");
 restart_image=loadImage("restart.png");
 fire_image=loadImage("fire.png");
 score_image=loadImage("score.png");
 burns_image=loadImage("burning.png");
 levelUp_image=loadImage("levelUp.jpg");
 mask_image=loadImage("mask.png");
 boy_image=loadImage("boy.png");
 girl_image=loadImage("girl.png");
 replay_image=loadImage("replay.png");
 trophy_image=loadImage("trophy.png");
 read_image=loadImage("read.png");
}

function setup(){
createCanvas(600, 600);

bg=createSprite(0,0,80,80);
bg.addImage(bg_image);
bg.scale=7;

restart=createSprite(300,300,80,80);
restart.addImage(restart_image);
restart.scale=0.3;
restart.visible=false;

replay=createSprite(300,300,80,80);
replay.addImage(replay_image);
replay.scale=0.5;
replay.visible=false;

trophy=createSprite(300,300,80,80);
trophy.addImage(trophy_image);
trophy.scale=0.6;
trophy.visible=false;

read=createSprite(550,550,80,80);
read.addImage(read_image);
read.scale=0.2;
read.visible=false;

levelUp=createSprite(300,300,80,80);
levelUp.addImage(levelUp_image);
levelUp.scale=0.3;
levelUp.visible=false;

sanitizer=createSprite(350,520,30,30);
sanitizer.addImage(sanitizer_image);
sanitizer.scale=0.3;

boy=createSprite(550, 410, 30,30);
boy.addImage(boy_image);
boy.scale=0.5;
boy.visible=false;

girl=createSprite(550, 180, 30,30);
girl.addImage(girl_image);
girl.scale=0.5;
girl.visible=false; 

score=0

mask=createSprite(450, 10, 30,30);
mask.addImage(mask_image);
mask.scale=0.3;
//mask.debug=true;
mask.setCollider("rectangle",0,0,200,200);
mask.visible=false;

scoreBoard=createSprite(375,40,200,30);
scoreBoard.addImage(score_image);
scoreBoard.scale=0.3;

burns=createSprite(300,500,200,30);
burns.addImage(burns_image);
burns.scale=3;
burns.visible=false;

dropGroup=new Group();
covidGroup=new Group();
fireGroup=new Group();
}

function draw (){
sanitizer.x=mouseX

mask.y=mouseY;

console.log(gameState)


if (gameState===0){

    if (score===100){
        gameState=1
    }
    
    fill ("yellow");
    textSize(20);
    text("yourScore:" + score, 410,50);
    if(keyDown(32)){
        createDrop();
    }
    if (dropGroup.isTouching(covidGroup)){

        for(i=0;i<covidGroup.length; i++){
        if(covidGroup.get(i).isTouching(dropGroup)){
         covidGroup.get(i).destroy();  
         dropGroup.destroyEach();
        }
        }
        score=score+4
        
        }
        
    } 
        

createCovid();
createFire();
drawSprites();

if (gameState===0){
    fill ("yellow");
    textSize(20);
    text("yourScore:" + score, 410,50)
}

if (gameState===1){
    fill ("yellow");
    textSize(20);
    text("yourScore:" + score, 410,50)
}

if (gameState===2){
    fill ("yellow");
    textSize(20);
    text("yourScore:" + score, 410,50)
}

if (gameState===3){
    fill ("yellow");
    textSize(20);
    text("yourScore:" + score, 410,50)
}

if (gameState===4){
    fill ("yellow");
    textSize(20);
    text("yourScore:" + score, 410,50)
}

if (gameState===5){
    fill ("yellow");
    textSize(20);
    text("yourScore:" + score, 410,50)
}




if(dropGroup.isTouching(fireGroup)){
    gameState=2
    
   }

   if (gameState===2){
    dropGroup.destroyEach();
    covidGroup.destroyEach();
    fireGroup.destroyEach();
    sanitizer.visible=false;
    burns.visible=true;
    fill ("black");
    text("try again", 260, 380);
    restart.visible=true;

    if(mousePressedOver(restart)){
    gameState=0;
    score=0;
    restart.visible=false;
    sanitizer.visible=true;
    burns.visible=false;
        fill ("yellow");
        textSize(20);
        text("yourScore:" + score, 410,50)
  }
}

if (gameState===1){
    dropGroup.destroyEach();
    covidGroup.destroyEach();
    fireGroup.destroyEach();
    sanitizer.visible=false;
    fill ("black");
    text("You have killed all the viruses", 190, 360);
    levelUp.visible=true;

    if(mousePressedOver(levelUp)){
    gameState=3;
    score=0;
    levelUp.visible=false;
    //sanitizer.visible=true;
       fill ("yellow");
        textSize(20);
        text("yourScore:" + score, 410,50)
  }
}

if(gameState===3){

   
    mask.visible=true;
    bg.visible=true;

    if (covidGroup.isTouching(mask)){
        score=score+5
        covidGroup.bounceOff(mask); }

        if (score==150){
            gameState=5
                }
    
   fireGroup.destroyEach();
   boy.visible=true;
   girl.visible=true;
   if (covidGroup.isTouching(boy)){
    gameState=4
 } 
 if (covidGroup.isTouching(girl)){
    gameState=4
 } 

}

if (gameState===4){

covidGroup.destroyEach();
fireGroup.destroyEach();
mask.visible=false;
boy.visible=false;
girl.visible=false;
score=0
replay.visible=true;
fill ("black");
text("try again", 260, 380);

if(mousePressedOver(replay)){
gameState=3
replay.visible=false;
}
fill ("yellow");
        textSize(20);
        text("yourScore:" + score, 410,50)
}
 
if(gameState===5){

    covidGroup.destroyEach();
    fireGroup.destroyEach();
    mask.visible=false;
    boy.visible=false;
    girl.visible=false;
    trophy.visible=true;
   // read.visible=true;
    sanitizer.visible=false;
    fill ("black")
    text("Yay!! you have completed the game.",150, 380)
    text("Click on read to learn more about covid",150,400)
    text("precautions",150,420)
    /*if(mousePressedOver(read)){
        gameState=6
    }*/
        fill ("yellow");
        textSize(20);
        text("yourScore:" + score, 410,50)
}

/*if(gameState===6){
    covidGroup.destroyEach();
    fireGroup.destroyEach();
    mask.visible=false;
    boy.visible=false;
    girl.visible=false;
    trophy.visible=false;
    read.visible=false;
    sanitizer.visible=false;
    scoreBoard.visible=false;
    textSize(30)
    fill("red")
    text("COVID precautions",200,50);
    background("white")
     
    textSize(20)
    fill("black")
    text("#Wear mask or double mask PROPERLY before stepping out.",5,100);
    text("#Be socially distanced and mentally conected with others.",5,140);
    text("#Wash your hands regularly.",5,180);
    text("#Avoid touching your nose, mouth and eyes.",5,220);
    text("#Avoid going out unnecessarily. Stay home stay safe.",5,260);
    text("#Respect the covid warriors.",5,300);

    textFont ("lucidaHandwriting");
    text("''There are those warriors fighting for our sake, while the change is " ,10, 380);
    text("our's to make. So, let's mask face and stay home and stay safe " ,20, 400);
    text("because a good future is our's to chase.''" ,20, 420);
    text("-M.Madhurya(creator of this game)" ,270, 450);
    
    textSize(30)
    text("THANK YOU FOR PLAYING MY GAME",40, 500);
}

if(gameState===6){
    textSize(30)
    fill("red")
    text("COVID precautions",200,50);  
}
*/
}

function createDrop(){

drop=createSprite(350,510,30,30);
drop.addImage(drop_image);
drop.x=sanitizer.x;
drop.y= 510;
drop.velocityY=-5;
drop.lifeTime=100;
//drop.debug=true;
drop.setCollider("rectangle",0,0,50,50);
drop.scale=0.5;
dropGroup.add(drop);
}

function createCovid(){
if(World.frameCount%30==0){
covid=createSprite(-5,Math.round(random(10,420)),9,9);
covid.addImage(covid_image);
covid.velocityX=6.5;
covid.scale=0.1;
covid.lifeTime=150;
//covid.debug=true;
covidGroup.add(covid);}

}

function createFire(){
    if(World.frameCount%40==0){
    fire=createSprite(0,Math.round(random(10,380)),9,9);
    fire.addImage(fire_image);
    fire.velocityX=3;
    fire.scale=0.1;
    fire.lifeTime=150;
    //fire.debug=true;
    fire.setCollider("rectangle",0,0,50,50);
    fireGroup.add(fire);}
    
    }



