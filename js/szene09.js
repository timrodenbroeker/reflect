function szene09() {

background(map(sin(a*10),-1,1,0,100));

  if (frameCount % 5 == 0){
    chooseTexture4++;

    if (chooseTexture4 > ani2.length-1) {
      chooseTexture4 = 0;
    }
  }



  
// Hintere "Leinwand"

  push();
  translate(0, 0, -1000 + (a * 40));
  rotateY(radians(map(mouseX, 0, width, -20, 20)));
  texture(ani2[chooseTexture4]);
  box(width, height, 20);
  pop();

  x = sin(a) * width / 8;
  y = cos(a) * width / 8;
  z = sin(a) * width / 8;

  texture(ani2[chooseTexture4]);
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
