// Bass kommt rein
function szene04() {
	
	background("#eeeeee");

  push();
  translate(0, 0, 0);

  if (woodStickTrigger == true) {
    texture(img6);
  } else {
    texture(img7);
  };

// The Plane

  rotateY(radians(map(mouseX, 0, width, -20, 20)));
  plane(a * 300, height + a * 100);
  pop();

  a += 0.01;

};
