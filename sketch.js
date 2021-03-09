var database;
var car1,car2,car3,car4,cars,allPlayers;
var car1Img,car2Img,car3Img,car4Img,track;

var form, player, game;
var gameState = 0, playerCount = 0

var bg

function preload(){
  bg = loadImage("images/background.jpg")
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
  track = loadImage("images/track.jpg")
}




function setup(){

  database = firebase.database();
  createCanvas(windowWidth-20,windowHeight-10);

  game = new Game()
  game.getState()
  game.start()



  
}

function draw(){
  
  if(playerCount === 4){
    game.update(1);

  }

  if(gameState === 1){
    clear();
    game.play();
  }

   if(gameState=== 2){
        game.end();
   }
  
}

