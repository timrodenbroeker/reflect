function szene11(){

  	background("#eeeeee");

// Hintere "Leinwand"

  push();
  translate(0, 0, -1000 + (a * 100));
  rotateY(radians(map(mouseX, 0, width, -20, 20)));
  texture(img16);
  box(width, height, 20);
  pop();

  x = sin(a) * width / 8;
  y = cos(a) * width / 8;
  z = sin(a) * width / 8;
  // fill('#444444');
  texture(img11);
  push();
  translate(x, y);
  rotateY(a * 0.9);
  rotateX(a);
  // ambientMaterial(100);
  box(70 * 2-(a*5), 70 * 2-(a*5), 70 * 2-(a*5));
  pop();
  push();
  translate(-x, -y);
  rotateY(a * 2);
  rotateX(a * 0.8);
  // ambientMaterial(100);

  // cone(55*2, 100*2, 130*2);
  // The cone seems to need a lot of CPU. Use box instead

  box(width / 1.5-(a*5), height / 1.5-(a*5), 20);

  pop();

  a -= 0.01;
  aa -= 0.033;

  // console.log(aa);
	
}