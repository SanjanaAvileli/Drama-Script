var backImage1;
var backImage2;
var benTateImg,benTate;
var ariaTateImg,ariaTate;
var sylviaJenkinsImg,sylviaJenkins;
var serafinaHillImg,serafinaHill;
//var sharlaGrayImg,sharlaGray;
var minervaWatsonImg,minervaWatson;
var amelioJenkinsImg,amelioJenkins;
var ernieWoodImg,ernieWood;
var erikCox, erikCoxImg;
var alvaroAdamsImg,alvaroAdams;
var haroldWrightImg,haroldWright;
var julesParkerImg,julesParker;
var gameState = 0;
var titleImg,title;

function preload(){
backImage1 = loadImage("Characters/Cover.jpg")
backImage2 = loadImage("Characters/2 Screen.jpg");
benTateImg = loadImage("Characters/BEN TATE.jpg");
ariaTateImg = loadImage("Characters/ARIA TATE.jpg");
sylviaJenkinsImg = loadImage("Characters/SYLVIA JENKINS.jpg");
serafinaHillImg = loadImage("Characters/SERAFINA HILL.jpg");
//sharlaGrayImg = loadImage("Characters/SHARLA GRAY.jpg");
minervaWatsonImg = loadImage("Characters/MINERVA WATSON.jpg");
amelioJenkinsImg = loadImage("Characters/AMELIO jENKINS.jpg");
ernieWoodImg = loadImage("Characters/ERNIE WOOD.jpg");
erikCoxImg = loadImage("Characters/ERIK COX.jpg");
alvaroAdamsImg = loadImage("Characters/ALVARO ADAMS.jpg");
haroldWrightImg = loadImage("Characters/HAROLD WRIGHT.jpg");
titleImg = loadImage("Characters/Title.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
    
title = createSprite(750,200);
title.addImage("title",titleImg);
text("Ben Tate",150,250);
text("Aria Tate",350,250,)
        

}

function draw(){

    if(gameState === 0){
        background(backImage1);
    }  
    if(gameState === 1){
        title.visible = false;
        
        background(backImage2);
        benTate = createSprite(100,250);
        benTate.addImage("benTate",benTateImg);
        benTate.scale = 2;
        
        
        ariaTate = createSprite(300,250);
        ariaTate.addImage("ariaTate",ariaTateImg);
        ariaTate.scale = 2;
        
        sylviaJenkins = createSprite(500,250);
        sylviaJenkins.addImage("sylviaJenkins",sylviaJenkinsImg)
        
        
        serafinaHill = createSprite(700,250);
        serafinaHill.addImage("serafinaHill",serafinaHillImg);
        serafinaHill.scale = 2;
        
        //sharlaGray = createSprite(300,50);
        //sharlaGray.addImage("Characters/sharlaGrayImg");
        
        minervaWatson = createSprite(900,250);
        minervaWatson.addImage("minervaWatson",minervaWatsonImg);
        minervaWatson.scale = 2;
    
        
        amelioJenkins = createSprite(1100,250);
        amelioJenkins.addImage("amelioJenkins",amelioJenkinsImg);
        amelioJenkins.scale = 0.5;
        
        ernieWood = createSprite(1350,250);
        ernieWood.addImage("ernieWood",ernieWoodImg);
       
        //erikCox = createSprite(500,50);
        //erixCox.addImage("erikCox",erikCoxImg);
        //erikCox.scale = 2;
        
        alvaroAdams = createSprite(650,650);
        alvaroAdams.addImage("alvaroAdams",alvaroAdamsImg);
        alvaroAdams.scale = 2;
        
        haroldWright = createSprite(850,650);
        haroldWright.addImage("haroldWright",haroldWrightImg);
        haroldWright.scale = 2;
       
    }
    drawSprites();
    }    
    
        
    


function mouseClicked(){

    //If the mouse is clicked on the screen then it will change to the next screen
    if(gameState === 0){
    gameState = 1;
    
    
    return false;
    }

}


    


