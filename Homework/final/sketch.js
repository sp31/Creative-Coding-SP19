var cafeScene;
var machZero;
var machOne;
var machTwo;
var machThree;
var lattZero;
var lattOne;
var lattTwo;
var lattThree;
var glacZero;
var glacOne;
var glacTwo;
var glacThree;
var buttonOne;
var buttonTwo;
var buttonThree;
var buttonFour;
var gameStart;
var milk;
var syrup;
var milkFoamer;
var espresso;
var whippedCream;
var iceCream;
var instructions;
var currentImage = -1;

var startTimer = false;
var prevTime = 0;
var interval = 3000;
var rightWrong = false;

let timer = 10
let timerTwo = 13
let timerThree = 15

var baristaHead;
var baristaColor = '#eeee00';
var latteStages = [];
var answer = "";


var milkCounter = 0;
var espressoCounter = 0;
var syrupCounter = 0;

var coffeeType = [[4,3,1], [1,2,4],[3,4,2]];

var machClick = 0;
var lattClick = 0;
var glacClick = 0;


function preload(){
  gameStart = loadImage("assets/gamestart.png");
  cafeScene = loadImage("assets/coffeeshop_final.png");
  machZero = loadImage("assets/mach-0.png");
  machOne = loadImage("assets/mach-1.png");
  machTwo = loadImage("assets/mach-2.png");
  machThree = loadImage("assets/mach-3.png");
  lattZero = loadImage("assets/latt-0.png");
  lattOne = loadImage("assets/latt-1.png");
  lattTwo = loadImage("assets/latt-2.png");
  lattThree = loadImage("assets/latt-3.png");
  glacZero = loadImage("assets/glac-0.png");
  glacOne = loadImage("assets/glac-1.png");
  glacTwo = loadImage("assets/glac-2.png");
  glacThree = loadImage("assets/glac-3.png");
  milk = loadImage("assets/milk.png");
  syrup = loadImage("assets/syrup.png");
  milkFoamer = loadImage("assets/foamer.png");
  espresso = loadImage("assets/espresso.png");
  whippedCream = loadImage("assets/whippedcream.png");
  iceCream = loadImage("assets/icecream.png");
  instructions = loadImage("assets/instructions.png");

  machStages = [machZero, machOne, machTwo, machThree];
  latteStages = [lattZero, lattOne, lattTwo, lattThree];
  glacStages = [glacZero, glacOne, glacTwo, glacThree];
}

function setup() {
  // put setup code here
createCanvas(700,624);



buttonOne = createButton("Order I: Macchiato");
buttonOne.position(10,630);
buttonOne.mousePressed(function(){
  currentImage = 0;
});

buttonTwo = createButton("Order II: Latte");
buttonTwo.position(150,630);
buttonTwo.mousePressed(function(){
  currentImage = 1;
});

buttonThree = createButton("Order III: Glace");
buttonThree.position(260,630);
buttonThree.mousePressed(function(){
  currentImage = 2;
});

buttonFour = createButton("Instructions");
buttonFour.position(380,630);
buttonFour.mousePressed(function(){
  currentImage = 3;
});

}

function draw() {
  // put drawing code here
  background("yellow");
  image(gameStart,0,0);

  if(startTimer == true){
    text(answer, 50,125);

    if(millis() - prevTime >= interval){
      startTimer = false;
      prevTime = millis();
    }

  }

//GUI
  // colorMode(0, 90, 1);
  // gui.addGlobals('baristaColor');
  // noLoop();


  if(currentImage == 0){
    image(cafeScene,0,0);
    image(machStages[0],80,500);
    image(milk,230,500);
    image(espresso,370,500);
    image(syrup,505,500);
    text("Caramel Macchiato",80,615);
    text("Milk",270,490);
    text("Espresso",395,490);
    text("Syrup",545,490);
    text("Milk:? | Espresso: 3 | Syrup: 1", 50,65);

    textSize(30);
    text("8",170,490);
    text(timer,565,85);
    textSize(12);

    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      text("TOO SLOW, NEXT ORDER!",50,125);
    }

    if(mouseX > 220 && mouseX < 350 && mouseY > 500 && mouseY < 610){
    // text("MILK WORKING",100,100);
}

    if(mouseX > 350 && mouseX < 470 && mouseY > 500 && mouseY < 610){
    // text("ESPRESSO WORKING",100,100);
}

if(mouseX > 470 && mouseX < 630 && mouseY > 500 && mouseY < 610){
// text("SYRUP WORKING",100,100);
}
}else if(currentImage == 1){
    image(cafeScene,0,0);
    image(lattZero,80,500);
    image(milk,230,500);
    image(espresso,370,500);
    image(milkFoamer,505,500);
    text("Latte",115,615);
    text("Milk",270,490);
    text("Espresso",395,490);
    text("Milk Foam",525,490);
    text("Milk:1 | Espresso: ? | Milk Foam: 4", 50,65);

    textSize(30);
    text("7",170,490);
    text(timerTwo,560,85);
    textSize(12);

    if (frameCount % 60 == 0 && timerTwo > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timerTwo --;
    }
    if (timerTwo == 0) {
      text("TOO SLOW, NEXT ORDER!",50,125);
    }

    if(mouseX > 220 && mouseX < 350 && mouseY > 500 && mouseY < 610){
    // text("MILK WORKING",100,100);
}

    if(mouseX > 350 && mouseX < 470 && mouseY > 500 && mouseY < 610){
    // text("ESPRESSO WORKING",100,100);
}

    if(mouseX > 470 && mouseX < 630 && mouseY > 500 && mouseY < 610){
    // text("MILK FOAM WORKING",100,100);
}

}else if(currentImage == 2){
  image(cafeScene,0,0);
  image(glacZero,80,500);
  image(espresso,230,500);
  image(iceCream,370,500);
  image(whippedCream,505,500);
  text("Cafe Glace",100,615);
  text("Espresso",255,490);
  text("Ice Cream",390,490);
  text("Whipped Cream",515,490);
  text("Espresso:3 | Ice Cream: 4", 50,55);
  text("Whipped Cream: ?",50,75);

  textSize(30);
  text("9",170,490);
  text(timerThree,560,85);
  textSize(12);

  if (frameCount % 60 == 0 && timerThree > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerThree --;
  }
  if (timerThree == 0) {
    text("TOO SLOW, NEXT ORDER!",50,125);
  }

  if(mouseX > 220 && mouseX < 350 && mouseY > 500 && mouseY < 610){
  // text("ESPRESSO WORKING",100,100);
}

  if(mouseX > 350 && mouseX < 470 && mouseY > 500 && mouseY < 610){
  // text("ICE CREAM WORKING",100,100);
}

  if(mouseX > 470 && mouseX < 630 && mouseY > 500 && mouseY < 610){
  // text("WHIPPED CREAM WORKING",100,100);
}

}else if(currentImage == 3){
  image(instructions,0,0);

}

//barista art
// fill(baristaColor);
// ellipse(200,50,50,50);

}

function mousePressed(){


if(currentImage != -1){


  if(mouseX > 220 && mouseX < 350 && mouseY > 500 && mouseY < 610){
  // text("MILK WORKING",100,100);
  milkCounter++;
  machClick++;
  if (machClick > 1 && machClick % 2 == 0){
    image(machStages[1],80,500);
    console.log(machClick);
    console.log("machClick");
  }
  //coffee++
  console.log(milkCounter);

}

  if(mouseX > 350 && mouseX < 470 && mouseY > 500 && mouseY < 610){
  // text("ESPRESSO WORKING",100,100);
  espressoCounter++;
}

if(mouseX > 470 && mouseX < 630 && mouseY > 500 && mouseY < 610){
// text("SYRUP WORKING",100,100);
syrupCounter++;
}

  if(coffeeType[currentImage][0] == milkCounter && coffeeType[currentImage][1] == espressoCounter && coffeeType[currentImage][2] == syrupCounter){
    console.log("correct");
    answer = "Correct";
    milkCounter = 0;
    espressoCounter = 0;
    syrupCounter = 0;

    //go to next stage //
    currentImage = currentImage + 1;


  }else{
    console.log("try again");
    if(milkCounter > coffeeType[currentImage][0] || espressoCounter > coffeeType[currentImage][1]  || syrupCounter > coffeeType[currentImage][2]){
        //consequence
        console.log("really wrong reset");
        answer = "Try Again";
        milkCounter = 0;
        espressoCounter = 0;
        syrupCounter = 0;

        startTimer = true;
        prevTime = millis();
    }
  }
}


}
