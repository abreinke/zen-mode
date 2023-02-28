let mySound;
let oceanSound;
function preload (){
  soundFormats('mp3');
  mySound = loadSound ('sky.mp3');
  oceanSound = loadSound('sea.mp3');
}

function setup() {
  let cnv = createCanvas(500, 500);
  background(0);
  stroke(237,170,166);
  strokeWeight(25);
}

function draw(){
    function mouseMoved() {
      if (mouseX > 200){
        mySound.play();
      }
      if (mouseX > 400){
        oceanSound.play();
      }
    }
}
