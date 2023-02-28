let mySound;
let oceanSound;
function preload (){
  soundFormats('mp3');
  mySound = loadSound ('sky.mp3');
  oceanSound = loadSound('sea.mp3');
}

function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(2,119,158);
  strokeWeight(25);
}

function draw(){
    function mouseMoved() {
      if (mouseX > 200){
          oceanSound.play();
          stroke(0,180,255);
      }
      if (mouseX > 400){
          mySound.play();
      }
    }
}
