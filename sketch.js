// Pong
// Logan, Mathias
// Date 2/24/25
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let pX = 20;
let pY = 200;
let pA = 580;
let pB = 200;
let score1 = 0;
let score2 = 0;
let xPos = 300;
let xVel = -7;
let yPos = 200;
let yVel = 3;
let game = "";

function setup() {
  //This function get run once at the start of the program
  createCanvas(600, 400);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(60);
}

function draw() {
  background('grey');
  strokeWeight(5);
  line(300, 0, 300, 400);

  movePlayerOne();
  drawPlayerOne(pX, pY);

  movePlayerTwo();
  drawPlayerTwo(pA, pB);

  textSize(50);
  text(score1, 240, 50);
  noFill();
  rect(250, 30, 60, 50);
  rect(350,30,60,50);

  fill('black');
  textSize(50);
  text(score2, 330, 50);

  if (score1 >= 5){
    game = "GAME OVER PLAYER ONE WINS"
    background('white');
    xPos = 1000;
  }
  if (score2 >= 5){
    game = "GAME OVER PLAYER TWO WINS"
    background('white');
    xPos = 1000;
  }

  if (keyIsDown(82)){
    score1 = 0;
    score2 = 0;
    pX = 20;
    pY = 200;
    pA = 580;
    pB = 200;
    game = "";
  }

  textSize(30);
  text(game,50,200);
  
ellipse (xPos, yPos,15,15);
  xPos += xVel;
if(xPos > 600){
  xPos = 300;
  xVel = 0;
  yVel = 0;
  yPos = 200;
  score1 += 1;
}
if (xPos < 0) {
  xPos = 300;
  xVel = 0;
  yVel = 0;
  yPos = 200;
  score2 +=1;
}
if (keyIsDown(32)){
  xVel =7;
  yVel =3;
}
yPos += yVel;
if (yPos > 385) {
  yVel -= 1;
}
if (yPos < 15) {
  yVel += 1;
}


  
}



function drawPlayerOne(x, y) {
  fill('black');
  rect(x, y, 10, 60);
}

function movePlayerOne() {
  if (keyIsDown(83)) {
    pY += 10;
  }
  if (keyIsDown(87)) {
    pY -= 10;
  }
}

function movePlayerTwo() {
  if (keyIsDown(38)) {
    pB -= 10;
  }
  if (keyIsDown(40)) {
    pB += 10;
  }
}

function drawPlayerTwo(x, y) {
  fill('black');
  rect(x, y, 10, 60);
}

function drawScorePlayerOne() {
  fill('black');
  textSize(50);
  text(score1, 250, 50);
}

function drawScorePlayerTwo() {
  fill('black');
  textSize(50);
  text(score2, 320, 50);
}

