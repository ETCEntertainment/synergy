//    _____ __ __  ____     ___  ____    ____  __ __
//   / ___/|  |  ||    \   /  _]|    \  /    ||  |  |
//  (   \_ |  |  ||  _  | /  [_ |  D  )|   __||  |  |
//   \__  ||  ~  ||  |  ||    _]|    / |  |  ||  ~  |
//   /  \ ||___, ||  |  ||   [_ |    \ |  |_ ||___, |
//   \    ||     ||  |  ||     ||  .  \|     ||     |
//    \___||____/ |__|__||_____||__|\_||___,_||____/
//
// Created by EliTheCoder and Huday.object
// We <3 Tacos
// Enjoy :)

// creating canvas
function setup() {
  const cnv = createCanvas(1000, 600);
  document.getElementById("defaultCanvas0").setAttribute("style", "border-style: solid; border-color: black;");
}

// defining cube constants and variables
cube = {
  height: 50,
  width: 50,
  x: 0,
  y: 0,
  maxSpeed: 5,
  accelerationSpeed: 0.1,
  velocity: {
    x: 0,
    y: 0
  },
  direction: {
    up: false,
    down: false,
    left: false,
    right: false
  }
};

cube2 = {
  x: 60,
  y: 0,
  height: 50,
  width: 50
}

cube3 = {
  x: 120,
  y: 0,
  height: 50,
  width: 50
}

cube4 = {
  x: 180,
  y: 0,
  height: 50,
  width: 50
}

// defining cube color constants
const bluecolor = "#0054ff";
const redcolor = "#f90707";
const greencolor = '#16e812';
const yellowcolor = '#f2ff00';

// listening for keystrokes
document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 87:
      cube.direction.up = true;
      break;
    case 65:
      cube.direction.left = true;
      break;
    case 83:
      cube.direction.down = true;
      break;
    case 68:
      cube.direction.right = true;
      break;
  }
});
document.addEventListener('keyup', e => {
  switch (e.keyCode) {
    case 87:
      cube.direction.up = false;
      break;
    case 65:
      cube.direction.left = false;
      break;
    case 83:
      cube.direction.down = false;
      break;
    case 68:
      cube.direction.right = false;
      break;
  }
});

function draw() {
  // clearing canvas
  background(225);

  // physics
  if (cube.velocity.y < cube.maxSpeed && cube.direction.up) {
    cube.velocity.y += cube.accelerationSpeed;
  }

  if (cube.velocity.y > -cube.maxSpeed && cube.direction.down) {
    cube.velocity.y -= cube.accelerationSpeed;
  }

  if (cube.velocity.x < cube.maxSpeed && cube.direction.left) {
    cube.velocity.x -= cube.accelerationSpeed;
  }

  if (cube.velocity.x > -cube.maxSpeed && cube.direction.right) {
    cube.velocity.x += cube.accelerationSpeed;
  }

  // stopping player on keyup
  if (cube.velocity.y > 0 && !cube.direction.up) {
    cube.velocity.y -= cube.accelerationSpeed;
  }
  if (cube.velocity.y < 0 && !cube.direction.down) {
    cube.velocity.y += cube.accelerationSpeed;
  }
  if (cube.velocity.x < 0 && !cube.direction.left) {
    cube.velocity.x += cube.accelerationSpeed;
  }
  if (cube.velocity.x > 0 && !cube.direction.right) {
    cube.velocity.x -= cube.accelerationSpeed;
  }

  cube.x += cube.velocity.x;
  cube.y += cube.velocity.y;

  // rendering cubes
  push();
  fill(bluecolor);
  noStroke();
  rect(cube.x, cube.y * -1 + height - cube.height, cube.width, cube.height);
  pop();

  push();
  fill(redcolor);
  noStroke();
  rect(cube2.x, cube2.y * -1 + height - cube2.height, cube2.width, cube2.height);
  pop();
  push();

  fill(greencolor);
  noStroke();
  rect(cube3.x, cube3.y * -1 + height - cube3.height, cube3.width, cube3.height);
  pop();
  push();

  fill(yellowcolor);
  noStroke();
  rect(cube4.x, cube4.y * -1 + height - cube4.height, cube4.width, cube4.height);
  pop();

}
