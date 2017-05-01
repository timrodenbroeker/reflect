// Bass kommt rein

function szene02(){

  background(map(kickdrumValue,0,1,0,100));

    if (frameCount % 3 == 0){
    chooseTexture1++;

    if (chooseTexture1 > imagearray.length-1) {
      chooseTexture1 = 0;
    }
  }

  x = sin(a) * width / 8;
  y = cos(a) * width / 8;
  z = sin(a) * width / 8;
  fill('#444444');

  push();
  rotateZ(radians(a*50));
  translate(-width/5, 0, width/8);
  rotateY(a*1);
  rotateX(a*0.8);

    texture(img6);
 box(width/12,width/12,2);
  pop();

    push();
  translate(0, 0,width/8);
  rotateY(a*2);
  rotateX(a*0.8);

    texture(imagearray[chooseTexture1]);

box(height/4);

  pop();

    push();
      rotateZ(radians(a*50));
  translate(width/5, 0,width/8);
  rotateY(a*1);

    texture(img6);
 box(width/8,width/8,2);
  pop();

  a+=0.01;

  if (kickdrumValue > 0){
  kickdrumValue -= 0.5;
  }

};
