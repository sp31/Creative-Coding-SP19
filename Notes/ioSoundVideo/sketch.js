var button1, button2;

var soundFile;
var vid;


function preload(){
soundFile = loadSound('assets/CowMoo.mp3');
vid = createVideo('assets/cow.mp4');
}

function setup() {
createCanvas(400,400);
//tempX, tempY, tempSize (tempS), tempColor (tempC), label
button1 = new Interfaces(100,200,50,"red", "Stop Button");
button2 = new Interfaces(200,200,50,"green","Play Button");
vid.hide();
}

function draw() {
background(255);
button1.display();
button1.check(mouseX,mouseY);
button2.display();
button2.check(mouseX,mouseY);

//do not play sounds untriggered in the draw
//soundFile.play();

}

function mousePressed(){
if(button1.check(mouseX,mouseY) == true){
  //do something
  console.log(button1.name);
  soundFile.stop();
  vid.stop();
  vid.hide();

}
if(button2.check(mouseX,mouseY) == true){
  console.log(button2.name);
  soundFile.play();
  vid.show();
  vid.play();

}

}

class Interfaces{
  constructor(tempX, tempY, tempS, tempC, tempName){
    //shape, location, color, label, boxSize
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }//end of constructor

display(){

  fill(this.color);
  rect(this.x,this.y,this.size,this.size);
  text(this.name,this.x, this.y - 10);

  if(this.overlay == true){
//gray fill with 50% opacity
    fill(127,127);
    rect(this.x,this.y,this.size,this.size);
  }
}

check(mX,mY){
  if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
    this.overlay = true;
    return true;
  }else{
    this.overlay = false;
    return false;
  }
}

}
