var mouse, mouseWalk,mouseHappy,mouseLook,mouseSmile
var cat, catWalk,catSit,catFace
var garden, gardenImage
var score


function preload() {
    //load the images here

    catWalk = loadAnimation("cat1.png","cat2.png");
    catSit = loadImage("catSit.png");
    catFace = loadImage( "catFront.png");


    mouseWalk = loadImage("mouseWalk.png");
    mouseHappy = loadImage("mouseHappy.png");
    mouseLook = loadImage("mouseLook.png");
    mouseSmile = loadImage("mouseSmile.png")    

    gardenImage = loadImage("garden.png");


}

function setup(){
    createCanvas(400,800);
    //create tom and jerry sprites here

        cat = createSprite(200,200,30,30)
        cat.addImage("sitting", catSit)
        cat.scale = 0.3

        garden = createSprite(300,300,204,30)
        garden.addImage("gardens",gardenImg)
        garden.scale = 2

    mouse = createSprite(200,400,40,30);
    mouse.addImage("mouc",mouseSmile)

    }

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide



//Text(mouseX + ','+ mouseY,10,45);

    keyPressed();

    if(keyCode ===LEFT_ARROW){

        cat.x = cat.x -5
      
    
    }
    if(keyCode ===RIGHT_ARROW){
    
        cat.x = cat.x +5
      
    




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
        cat.changeAnimation("catRun",catWalk)

    mouse.changeImage("mouseHappy")
}



}
