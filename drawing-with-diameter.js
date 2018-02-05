function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
	} else if (key == 'P') {
    fill(207, 151, 215); 
  } else if (key == 'O') {
    fill(250, 157, 0); 
  } else if (key == 'T') {
    fill(0, 144, 158); 
	} else if (key == '1') {
    diameter = 10; 
	} else if (key == '2') {
    diameter = 20; 
	} else if (key == '3') {
    diameter = 30; 
	}
	
		
	
}
