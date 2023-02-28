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
  if (mouseIsPressed) {
   line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
  }
    function mouseMoved() {
      if (mouseX > 200){
        mySound.play();
      }
      if (mouseX > 400){
        oceanSound.play();
      }
    }
}


function keyTyped (){
  if (key === 'r') {
    stroke(237,170,166);
  }
  else if (key === 'y') {
    stroke(251,238,110);
  }
  else if (key === 'b'){
    stroke(4,196,187);
  }
}
