function szene00() {

// Hintere "Leinwand"

  push();

  rotateY(radians(map(mouseX, 0, width, -20, 20)));
  texture(img26);

  box(width*a/4, height*a/4, 20);
  pop();

  x = sin(a) * width / 8;
  y = cos(a) * width / 8;
  z = sin(a) * width / 8;
  
  a += 0.01;
  aa += 0.033;



}
