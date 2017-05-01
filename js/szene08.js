
function szene08(){



	if (frameCount % 5 == 0){
		invertbg = !invertbg;
		chooseTexture1++;
		chooseTexture2++;
		chooseTexture3++;

		if (chooseTexture1 > imagearray.length-1) {
			chooseTexture1 = 0;
		}

		if (chooseTexture2 > imagearray.length-1) {
			chooseTexture2 = 0;
		}

		if (chooseTexture3 > imagearray.length-1) {
			chooseTexture3 = 0;
		}

	}

	if (invertbg == true){
		background('#222222');
	} else {
		background('#666666');
	}
	plane(width+a,height+a);


var boxsize = width/8;

	  x = sin(a) * width / 8;
	  y = cos(a) * width / 8;
	  z = sin(a) * width / 8;
	  fill('#444444');


	  push();
	  rotateZ(radians(a*50));
	  translate(-width/5, 0, width/8);
	  rotateY(a*1);
	  rotateX(a*0.8);

	texture(imagearray[chooseTexture1]);
	 box(width/12,width/12,2);
	  pop();

	    push();
	  translate(0, 0,width/8);
	  rotateY(a*2);
	  //rotateX(a*0.8);
	texture(imagearray[chooseTexture2]);
	for (var i = 0; i < 10; i++){
		rotateX(radians(i*a+a/5));
  
		push();
			rotateX(radians(90));
			rotateY(radians(i*3*a));
			translate(i*3, i*2, i*6);
			box(width/3, 30,30);
		pop();
	}

	  pop();

	    push();
	      rotateZ(radians(a*50));
	  translate(width/5, 0,width/8);
	  rotateY(a*1);
	texture(imagearray[chooseTexture3]);
	 box(width/8,width/8,2);
	  pop();

	  a+=0.01;
}
