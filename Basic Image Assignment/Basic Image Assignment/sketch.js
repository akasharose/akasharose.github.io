function setup() {
  createCanvas(1024, 720);
  background(140, 40, 255);
}

function draw() {
  // Create Pac-Man
  fill(255, 204, 0);
  arc(512, 360, 500, 500, QUARTER_PI, TWO_PI-QUARTER_PI);
  // For some reason, I was unable to place SIXTH_PI as a value for radians, forcing me to make Pac-Man's mouth larger
  // I also couldn't figure out how to keep the outline going all the way around Pac-Man, despite efforts
  
  // Create Orb-Things from Game
  fill(255,218,184);
  ellipse(712, 360, 50, 50);
  ellipse(842, 360, 50, 50);
  ellipse(972, 360, 50, 50);
  
  // Create Ghost-Eyes behind Pac-Man
  fill(255);
  ellipse(130, 100, 50, 50);
  ellipse(250, 100, 50, 50);
  // Iris of the eyes
  fill(0,0,205);
  ellipse(138, 107, 30, 30);
  ellipse(258, 107, 30, 30);
}