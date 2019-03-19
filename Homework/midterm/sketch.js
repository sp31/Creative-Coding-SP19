var mysteryOne;
var mysteryTwo;
var mysteryThree;
var currentImage = -1;
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;
var successMessages = ['Proceed to Stage II', 'Proceed to Stage III', 'Congrats on returning back home!'];

function preload(){
  mysteryOne = loadImage("assets/mystery-3.jpg");
  mysteryTwo = loadImage("assets/mystery-2.jpg");
  mysteryThree = loadImage("assets/mystery-1.jpg");
  mysterysolveOne = loadImage("assets/mystery-3.png");
  mysterysolveTwo = loadImage("assets/mystery-2.png");
  mysterysolveThree = loadImage("assets/mystery-1.png");
  flashlight = loadImage("assets/flashlight.png");
}

function setup() {
  // put setup code here
createCanvas(900,600);

buttonOne = createButton("Stage I");
buttonOne.position(10,630);
buttonOne.mousePressed(function(){
  currentImage = 0;
});

buttonTwo = createButton("Stage II");
buttonTwo.position(110,630);
buttonTwo.mousePressed(function(){
  currentImage = 1;
});

buttonThree = createButton("Stage III");
buttonThree.position(210,630);
buttonThree.mousePressed(function(){
  currentImage = 2;
});

buttonFour = createButton("Instructions");
buttonFour.position(310,630);
buttonFour.mousePressed(function(){
  currentImage = 3;
});

}

function draw() {
  // put drawing code here
  cursor("assets/flashlight.png");
  background(100);
  fill("yellow");
  textSize(33);
  textStyle(BOLD);
  text("Mystery City",340,50);
  textStyle(NORMAL);
  textSize(28);
  fill("black");

  if(currentImage == 0){
    textSize(18);
    fill("yellow");
    text("Depart soon or your stay will be brief, break out of the shed with this tool made for the leaf...",60,570);

    if(mouseX > 355 && mouseX < 435 && mouseY > 445 && mouseY < 525){
      tint(255, 255, 255, 50);
      image(mysteryOne,40,110);
      tint(255, 255, 255, 255);
      image(mysterysolveOne,40,110);
      text(successMessages[0],355,100);
    }else{
      tint(255, 255, 255, 255);
      image(mysteryOne,40,110);
    }

  }else if(currentImage == 1){
    textSize(18);
    fill("yellow");
    text("Daytime in Mystery City, not so bad now - but in the dark of the night, you'll need a pal...",85,570);

    if(mouseX > 650 && mouseX < 700 && mouseY > 200 && mouseY < 250){
      tint(255, 255, 255, 50);
      image(mysteryTwo,40,110);
      tint(255, 255, 255, 255);
      image(mysterysolveTwo,40,110);
      text(successMessages[1],355,100);
    }else{
      tint(255, 255, 255, 255);
      image(mysteryTwo,40,110);
    }

  }else if(currentImage == 2){
    textSize(18);
    fill("yellow");
    text("A flight out of Mystery City, a plane to not miss, your clothing and shoes must all fit into this...",65,570);

    if(mouseX > 80 && mouseX < 200 && mouseY > 400 && mouseY < 500){
      tint(255, 255, 255, 50);
      image(mysteryThree,40,110);
      tint(255, 255, 255, 255);
      image(mysterysolveThree,40,110);
      text(successMessages[2],300,100);
    }else{
      tint(255, 255, 255, 255);
      image(mysteryThree,40,110);

    }

  }else if(currentImage == 3){
    textSize(22);
    text("Explore the city and uncover the mysteries. Solve the riddles and find the clues.",60,300);
    textSize(17);
    text("Search the scenes with the flashlight to highlight the clues to escape Mystery City.",140,400);
  }else{
    text("Begin Your Journey",310,300);
  }

// rectangle for hover over determination
// rect(80,400,130,80)

// if(hover over fireplace){
//   tint(255, 255, 255, 126); // Tint blue and set transparency
//   if(mouseIsPressed == true){
//     currentImage = 1;
//   }
//
// }

}
