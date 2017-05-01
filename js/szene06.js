function szene06() {

	var bb;

  if (woodStickTrigger == true) {
texture(img19);
background(color1);
  } else {
  	    texture(img4);
background(color2);
  };

push();
translate(0,0,-2000+(a));
rotateY(radians(sin(a)*10));
plane(100+a*100*2,100+a*100*2);
pop();
	
  	x = sin(a) * cos(a*1.1) + sin(radians(b*0.4)) * width / 3;
  	y = cos(a) * cos(a*2.1) * height / 3;
  	z = sin(a)*cos(a*11) * width / 8;

  	rotation = map(sin(a/5),-1,1,0,50);
  	rotateY(a); 
	

	for (var i = 0; i < 10; i++){
		rotateX(radians(a/5));
  
		push();
			rotateX(radians(90));
			rotateY(radians(i*3*a));
			translate(i*3, i*2, i*6);
			box(width/3, 30,30);
		pop();
	}

  	a += 0.01;
}
