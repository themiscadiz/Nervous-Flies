//Themis Garcia - Nature of Code s2020
//Assignment 1
//Description: In this sketch I am using Vectors to draw circles and noise to move randomly but smoothly through the canvas. A new circle is created each time that mouse is clicked. When a circle touched or overlaps another circle, change color.

let walk;
let walkers = [];

let textshow = true;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(16);
  textStyle(BOLD);

  walk = new walker();
}

function mousePressed() {
  textshow = false;

  let walk = new walker();
  walkers.push(walk);
}

function draw() {
  background(220);

  for (let single_walker of walkers) {
    single_walker.move();
    single_walker.circleDescrip();

    let overlapping = false;

    for (let other of walkers) {

      if (single_walker !== other && single_walker.closeTo(other)) {
        overlapping = true;
      }

      if (overlapping) {
        single_walker.changeColor(220);

      } 
      else {
        single_walker.changeColor(0);
      }
    }
  }

  if (textshow) {
    fill(71);
    text("CLICK multiple times to create a new circles.", width / 2, height / 2);
  } 
  else {
    textshow = false;
  }

}