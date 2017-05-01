function szene10(){

	background("#eeeeee");
	
  if (frameCount % 3 == 0){
    chooseTexture1++;

    if (chooseTexture1 > imagearray.length-1) {
      chooseTexture1 = 0;
    }
  }
  
// Hintere "Leinwand"

  push();
  translate(0, 0, -1000 + (a * 100));
  rotateY(radians(map(mouseX, 0, width, -20, 20)));
  texture(imagearray[chooseTexture1]);
  box(width, height, 20);
  pop();

  x = sin(a) * width / 8;
  y = cos(a) * width / 8;
  z = sin(a) * width / 8;

  texture(img11);
  push();
  translate(x, y);
  rotateY(a * 0.9);
  rotateX(a);

  box(70 * 2, 70 * 2, 70 * 2);
  pop();
  push();
  translate(-x, -y);
  rotateY(a * 2);
  rotateX(a * 0.8);


  box(width / 1.5, height / 1.5, 20);

  pop();
  a += 0.01;
  aa += 0.033;

  // console.log(aa);
	
}