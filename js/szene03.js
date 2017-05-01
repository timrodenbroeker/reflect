function szene03() {
	
	background("#eeeeee");

  if (frameCount % 3 == 0){
    chooseTexture1++;

    if (chooseTexture1 > imagearray.length-1) {
      chooseTexture1 = 0;
    }
  }

  if (frameCount % 2 == 0){

  	if (chooseTexture <= 0) {
    	loopSwitch = !loopSwitch;
    } 
    else if (chooseTexture >= ani1.length-1) {
      loopSwitch = !loopSwitch;
    } 

    if (loopSwitch == true) {
    	chooseTexture++;
    }  else {
    	chooseTexture--;
    }
  }

background(map(sin(a/60),-1,1,0,100));

	push();

	translate(map(sin(radians(180+a)),-1,1,-width/3,width/3), 0, map(cos(radians(180+a)),-1,1,-width/3,width/7));
	rotateY(radians(a));
	rotateZ(radians(a));
  texture(imagearray[chooseTexture1]);
	box(width/18,width/18,width/18);

	pop();

// Mittlere Box

  push();
  translate(0, 0);
  rotateY(radians(a));
  rotateZ(radians(a));
  rotateX(radians(a));
  texture(imagearray[chooseTexture1]);
  box(width/6,width/6,width/6);

  pop();



    push();

  translate(map(sin(radians(a)),-1,1,-width/3,width/3), 0, map(cos(radians(a)),-1,1,-width/3,width/7));
  rotateY(radians(a));
  rotateZ(radians(a));
  texture(imagearray[chooseTexture1]);
  box(width/18,width/18,width/18);

  pop();




	a++;

	push();

  texture(img2);
	rotateY(radians(map(mouseX, 0, width, -50, 50)));
	rotateZ(radians(map(mouseX, 0, width, -50, 50)));
	translate(0, 0, -1400);
	plane(width / 2 + a + a + a, width / 2 + a);
	pop();

}
