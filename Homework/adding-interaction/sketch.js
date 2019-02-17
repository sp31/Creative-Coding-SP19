//Global Variables
var backgroundColor = "gray"; //strings
var strokeColor = "black";
var strokeButton = "2";
var buttonFill = "white";
var cameraFill = "192,195,198";
var textFill = "#000000";
var textStroke = "beige";
var phoneOff = alpha(backgroundColor)


function setup() {
  // put setup code here
  createCanvas(400,700);
  background(backgroundColor);
}

function draw() {
  // put drawing code here
  stroke(strokeColor);
  background(backgroundColor);
  strokeWeight(3);
  fill(255,255,255);

//phone body
  rect(50,50,300,550,10);



//screenbase
strokeWeight(0);
fill(0,0,0);
rect(50 + 10,50 + 40,230 + 50,450 + 20,10);


//speakers
strokeWeight(5);
line(300 - 50,50 + 20,100 + 50,50 + 20);
line(300 - 50,50 + 530,100 + 50,50 + 530);

//cameras
fill(cameraFill);
ellipse(50 + 40,50 + 20,15,15);
ellipse(50 + 65,50 + 20,15,15);

//lightMode

{
  if (keyIsPressed === true) {
    fill(255);
  } else {
    fill(0);
  }
  rect(50 + 10,50 + 40,230 + 50,450 + 20,10);
}


//photo
fill(239, 216, 122);
stroke(141,176,232);
rect(40 + 40,50+70,240,200,10);


//buttons
fill(buttonFill);
stroke(141,176,232);
rect(80,375,240,50,10);
rect(80,450,240,50,10);


if (mouseIsPressed) {
  var d = dist(mouseX, mouseY, 120,300);
  if (d < 150) {
    fill("blue")
    rect(80,375,240,50,10);
    } else {
      fill(buttonFill);
      stroke(141,176,232);
      rect(80,375,240,50,10);
    }
  }

//textactions
stroke(textStroke);
fill(textFill);
textSize(32);
text('Take Picture', 110, 410);


textSize(32);
text('Take Video', 120, 485);
fill(textFill);


}



//end of draw loop
