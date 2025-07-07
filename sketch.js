//The setup function only happens once
function setup() {
	createCanvas(800, 800); //create a 800px X 800px canvas
}

//The draw function happens over and over again
function draw() {
  background(193,400,280); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,205,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/8,height/2,20,20); // center of canvas, 20px dia

noStroke();
  fill(0, 105, 148); // deep ocean blue
  rect(0, height * 2 / 3, width, height / 3);

fill(255, 204, 0); // sun color
  noStroke();
  ellipse(width/2, height*2/3, 100, 100); // sun setting on horizon 

fill(50, 30, 20); // dark brown for sand silhouette
  beginShape();
  vertex(0, height * 2 / 3 + 50);
  vertex(width/4, height * 2 / 3 + 30);
  vertex(width/2, height * 2 / 3 + 50);
  vertex(3*width/4, height * 2 / 3 + 40);
  vertex(width, height * 2 / 3 + 60);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}