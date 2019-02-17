
var garfieldOne;
var garfieldTwo;
var garfieldThree;
var garfieldFour;
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;
var currentImage = -1;


function preload(){
garfieldOne = loadImage("assets/g1.jpg");
garfieldTwo = loadImage("assets/g2.jpg");
garfieldThree = loadImage("assets/g3.jpg");
garfieldFour = loadImage("assets/g4.jpg");
}

function setup() {
  // put setup code here
createCanvas(700,700);
buttonOne = createButton("Act I");
buttonOne.position(10,200);
buttonOne.mousePressed(function(){
  currentImage = 0;
});

buttonTwo = createButton("Act II");
buttonTwo.position(100,200);
buttonTwo.mousePressed(function(){
  currentImage = 1;
});

buttonThree = createButton("Act III");
buttonThree.position(200,200);
buttonThree.mousePressed(function(){
  currentImage = 2;
});

buttonFour = createButton("Act IV");
buttonFour.position(300,200);
buttonFour.mousePressed(function(){
  currentImage = 3;
});

}

function draw(){
  background(255);
  // put drawing code here
  if(currentImage == 0){
    image(garfieldOne,0,20,garfieldOne.width/2,garfieldOne.height/2);
}else if(currentImage == 1){
  image(garfieldTwo,0,20,garfieldTwo.width/2,garfieldTwo.height/2);
}else if(currentImage == 2){
  image(garfieldThree,0,20,garfieldThree.width/2,garfieldThree.height/2);
}else if(currentImage == 3){
  image(garfieldFour,0,20,garfieldThree.width/2,garfieldFour.height/2);
}else{
  text("click to begin the story",10,250);


}
}



//end of code
