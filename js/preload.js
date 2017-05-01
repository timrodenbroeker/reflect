// preload these files
function preload() {
	mySound = loadSound('http://timrodenbroeker.de/data/reflect/reflect.mp3');
	reflect_typo1 = loadImage("http://timrodenbroeker.de/data/reflect/images/reflect-mineral.gif");
	img0 = loadImage("http://timrodenbroeker.de/data/reflect/images/0.gif");
	img1 = loadImage("http://timrodenbroeker.de/data/reflect/images/1.gif");
	img1a = loadImage("http://timrodenbroeker.de/data/reflect/images/1a.gif");
	img2 = loadImage("http://timrodenbroeker.de/data/reflect/images/2.gif");
	img3 = loadImage("http://timrodenbroeker.de/data/reflect/images/3.gif");
	img4 = loadImage("http://timrodenbroeker.de/data/reflect/images/4.gif");
	img5 = loadImage("http://timrodenbroeker.de/data/reflect/images/5_t.gif");
	img6 = loadImage("http://timrodenbroeker.de/data/reflect/images/6.gif");
	img7 = loadImage("http://timrodenbroeker.de/data/reflect/images/7.gif");
	img8 = loadImage("http://timrodenbroeker.de/data/reflect/images/8.gif");
	img9 = loadImage("http://timrodenbroeker.de/data/reflect/images/9.gif");
	img10 = loadImage("http://timrodenbroeker.de/data/reflect/images/10.gif");
	img11 = loadImage("http://timrodenbroeker.de/data/reflect/images/11.gif");
	img12 = loadImage("http://timrodenbroeker.de/data/reflect/images/12.gif");
	img13 = loadImage("http://timrodenbroeker.de/data/reflect/images/13.gif");
	img14 = loadImage("http://timrodenbroeker.de/data/reflect/images/14.gif");
	img15 = loadImage("http://timrodenbroeker.de/data/reflect/images/15.gif");
	img16 = loadImage("http://timrodenbroeker.de/data/reflect/images/16.gif");
	img17 = loadImage("http://timrodenbroeker.de/data/reflect/images/17.gif");
	img18 = loadImage("http://timrodenbroeker.de/data/reflect/images/18.gif");
	img19 = loadImage("http://timrodenbroeker.de/data/reflect/images/19.gif");
	img20 = loadImage("http://timrodenbroeker.de/data/reflect/images/20.gif");
	img21 = loadImage("http://timrodenbroeker.de/data/reflect/images/21.gif");
	img22 = loadImage("http://timrodenbroeker.de/data/reflect/images/22.gif");
	img23 = loadImage("http://timrodenbroeker.de/data/reflect/images/23.gif");
	img24 = loadImage("http://timrodenbroeker.de/data/reflect/images/24.gif");
	img26 = loadImage("http://timrodenbroeker.de/data/reflect/images/26.gif");
	img33 = loadImage("http://timrodenbroeker.de/data/reflect/images/33.gif");

	img55 = loadImage("http://timrodenbroeker.de/data/reflect/images/55.gif");
	img56 = loadImage("http://timrodenbroeker.de/data/reflect/images/56.gif");
	img57 = loadImage("http://timrodenbroeker.de/data/reflect/images/57.gif");
	img58 = loadImage("http://timrodenbroeker.de/data/reflect/images/58.gif");
	img59 = loadImage("http://timrodenbroeker.de/data/reflect/images/59.gif");
	img60 = loadImage("http://timrodenbroeker.de/data/reflect/images/60.gif");	

	inge1 = loadImage("http://timrodenbroeker.de/data/reflect/images/inge1.gif");
	inge2 = loadImage("http://timrodenbroeker.de/data/reflect/images/inge2.gif");
	inge3 = loadImage("http://timrodenbroeker.de/data/reflect/images/inge3.gif");
	inge4 = loadImage("http://timrodenbroeker.de/data/reflect/images/inge4.gif");
	inge5 = loadImage("http://timrodenbroeker.de/data/reflect/images/inge5.gif");
	inge6 = loadImage("http://timrodenbroeker.de/data/reflect/images/inge6.gif");
	inge8 = loadImage("http://timrodenbroeker.de/data/reflect/images/inge8.gif");
	worldmap = loadImage("http://timrodenbroeker.de/data/reflect/images/worldmap.gif");

ani1_00 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-00.gif");
ani1_01 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-01.gif");
ani1_03 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-03.gif");
ani1_04 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-04.gif");
ani1_05 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-05.gif");
ani1_06 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-06.gif");
ani1_07 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-07.gif");
ani1_08 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-08.gif");
ani1_09 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-09.gif");
ani1_10 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-10.gif");
ani1_11 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-11.gif");
ani1_12 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-12.gif");
ani1_13 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-13.gif");
ani1_14 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-14.gif");
ani1_15 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-15.gif");
ani1_16 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-16.gif");
ani1_17 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-17.gif");
ani1_18 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-18.gif");
ani1_19 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-19.gif");
ani1_20 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-20.gif");
ani1_21 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-21.gif");
ani1_22 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-22.gif");
ani1_23 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-23.gif");
ani1_24 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-24.gif");
ani1_25 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-25.gif");
ani1_26 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-26.gif");
ani1_27 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-27.gif");
ani1_28 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-28.gif");
ani1_29 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-29.gif");
ani1_30 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-30.gif");
ani1_31 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-31.gif");
ani1_32 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-32.gif");
ani1_33 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-33.gif");
ani1_34 = loadImage("http://timrodenbroeker.de/data/reflect/images/ani1/ani1-34.gif");

// Animation 
}

