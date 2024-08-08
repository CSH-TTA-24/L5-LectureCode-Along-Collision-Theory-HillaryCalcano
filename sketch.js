let myXPos = 100;
let myYPos = 100;
let mySize;
let enemyXPos = 300;
let enemyYPos = 300;
let enemySize;

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
  enemySize = random(50, 100)
}

function draw() {
  background(0);

  fill(0, 0, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  fill(255, 0,0);
  ellipse(enemyXPos, enemyYPos, enemySize, enemySize)

  let distance = dist(myXPos, myXPos, enemyXPos, enemyYPos)
  console.log(distance)

  if (distance <= (mySize / 2) + (enemySize / 2)) {
 fill (random(255), random(255), random(255));
 textSize(22);
 text("I'm colliding with my enemy. Ouch!", 140, 480);
}
  
  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }
  
}
