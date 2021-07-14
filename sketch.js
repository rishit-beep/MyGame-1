const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;
var ground,tankBody,tankTurret,bullet;
var box1,box2,box3,box4;
var targets,results,deaths;
var rotatedDegrees,bullets,deaths;
var result;





function baseClamp(number, lower, upper){

 if (number === number) {
      if (upper !== undefined) {
           number = number <= upper ? number : upper; }
            if (lower !== undefined) 
            { number = number >= lower ? number : lower; }
         
        } 
        return number; 

        }
        


function setup(){
    engine=Engine.create();
    world = engine.world;

    createCanvas(800,400);
    targets=4;
    result="";

ground=new Ground(600,390,1200,30);
tankBody=new TankBody(660,350,200,75);
tankTurret=new TankTurret(590,330,100,20);


box1=new Box(50,300,30,30);
box2=new Box(50,-2500,30,30);
box3=new Box(50,-7500,30,30);
box4=new Box(50,-15000,30,30);


//set variables 
rotatedDegrees=0;
bullets=[]
deaths=[false,false,false,false]

}

function draw(){
    background("100,100,250");
Engine.update(engine);
//rotating the turret

if(keyIsDown(UP_ARROW) &&  (rotatedDegrees<100 )){
tankTurret.rotateUp();
rotatedDegrees++

}
if(keyIsDown(DOWN_ARROW) &&  (rotatedDegrees>1 )){
    tankTurret.rotateDown();
    rotatedDegrees--

    
    }

//displaying the bullets
for(var x=0;x<bullets.length;x++){
if(bullets[x].body.positon.y>365){
    Matter.World.remove(world,bullets[x].body)
    
}
else{
    bullets[x].display();
}
}

//move the boxes closer and display them or remove them
if(box1.body.position.x< -50 && deaths[0]===false){
    Matter.Body.setPosition(box1.body.position,{x:0,y:-1000})
    Matter.World.remove(world,box1.body);
    targets--;
    deaths[0]=true;
}
else{
    box1.display();
    if(box1.body.position.y>340 && deaths[0]===false){
        Matter.Body.setVelocity(box1.body,{x:1,y:-7}) 
    } 
}


//------------------------------------------------

if(box2.body.position.x<-50 && deaths[0]===false){
    Matter.Body.setPosition(box2.body.position,{x:0,y:-1000})
    Matter.World.remove(world,box2.body);
    targets--;
    deaths[0]=true;
}
else{
    box2.display();
    if(box2.body.position.y>340 && deaths[0]===false){
        Matter.Body.setVelocity(box2.body,{x:1,y:-7}) 
    }
}



//-------------------------------------------------
if(box3.body.position.x<-50 && deaths[0]===false){
    Matter.Body.setPosition(box3.body.position,{x:0,y:-1000})
    Matter.World.remove(world,box3.body);
    targets--;
    deaths[0]=true;
}
else{
    box3.display();
    if(box3.body.position.y>340 && deaths[0]===false){
        Matter.Body.setVelocity(box3.body,{x:1,y:-7}) 
    }
}



//-------------------------------------------------
if(box4.body.position.x<-50 && deaths[0]===false){
    Matter.Body.setPosition(box4.body.position,{x:0,y:-1000})
    Matter.World.remove(world,box4.body);
    targets--;
    deaths[0]=true;
}
else{
    box4.display();
    if(box4.body.position.y>340 && deaths[0]===false){
        Matter.Body.setVelocity(box4.body,{x:1,y:-7}) 
    }  
}

//displaying win or lost
if(targets===0){
    result="win";
}

if(box1.body.position.x>=530||box2.body.position.x>=530||box3.body.position.x>=530||box4.body.position.x>=530){
    result="loss";
}


if(result==="win"){
    fill(0);
    textSize(40);
    textAlign(CENTER);
    text("You Win",400,200);
}
else if(result==="loss"){
    fill(0);
    textSize(40);
    textAlign(CENTER);
    text("You Loss",400,200);
}

//how to play
fill(0);
textSize(20);
textAlign(CENTER);
text("The slimes are coming!\n Quick soldier,use the up or down arrow keys to aim \n and space to fire",400,50);


box1.display();
box2.display();
box3.display();
box4.display();
tankBody.display();
tankTurret.display();
ground.display();
}


function keyPressed(){
    if(keyIsDown("space") && (result!=="loss")){
        var speed=baseClamp(rotatedDegrees/5,4,10);

        bullet=new bullet(0,0,30,10,rotateDegrees,speed);
        Matter.Body.setPosition(bullet.body,{x:tankTurret.body.position.x-50,y:tankTurret.position.y-rotatedDegrees/3});
        bullets.push(bullet);
    }

}







