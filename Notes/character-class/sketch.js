//Global Variables
var backgroundColor = "yellow"; //strings
var mouthX = "125";


function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,100,0);
  //console.log(backgroundColor):
  console.log("backgroundColor:" + backgroundColor);
  //console.log(mouthX)
  console.log("mouthX:" + mouthX);
}

function draw() {
  // put drawing code here
  stroke(0,100,100);
  background(255);
  background(backgroundColor);
  strokeWeight(1);
  fill(200,50,50);

//first eye
  ellipse(155,175,25,30);

  //first pupil
  fill(0,0,0);
  ellipse(145,175,10,15);
  fill(200,50,50);

  // head
  ellipse(200,200,100,100);

  //mouth
  rect(mouthX,200,75,20);
  rect(mouthX,230,75,10);

strokeWeight(5);
  //nose
  ellipse(mouthX,200,10,10);
  point(mouthX,200);

strokeWeight(1);
  //second eye
  ellipse(170,175,25,30);

  //second pupil
  fill(0,0,0);
  ellipse(160,175,10,15);
  fill(200,50,50);

  //neck
  rect(175,250,50,50);

  //body
  rect(200,275,150,100,10);

  //ears
  triangle(175,150,200,100,200,150);
  triangle(175 + 10,150,200 + 10,100,200 + 10,150);

  //tail
  strokeWeight(15);
  line(350,275,350+50,275-50);
  strokeWeight(5);

  //legs
  noFill();
  angleMode(DEGREES);
  arc(200,400,50,50,135,270);
  arc(225,400,50,50,135,270);
  arc(325,400,50,50,135,270);
  arc(350,400,50,50,135,270);
}
