let mySound;
let oceanSound;
function preload (){
  soundFormats('mp3');
  mySound = loadSound ('sea.mp3');
  oceanSound = loadSound('sky.mp3');
}

function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(2,119,158);
  strokeWeight(25);
}

function draw(){
  if (mouseIsPressed) {
      line(width - mouseX, height - mouseY);
  }
  return false;
}

    function mouseMoved() {
      if (mouseX > 250){
          oceanSound.play();
          stroke(0,180,255);
      }
    }
