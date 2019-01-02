function draw() {
  if (playing) {
    rms = analyzer.getLevel();

    document.title = "reflect " + szene + "/13";

    /* Switch background-color in each scene
if (szene % 2 == 0){
	background(color2);
} else {
	background(color1);
}
*/

    if (szene == 0) {
      background(color2);
      szene00();
    } else if (szene == 1) {
      szene01();
    } else if (szene == 2) {
      szene02();
    } else if (szene == 3) {
      szene03();
    } else if (szene == 4) {
      szene04();
    } else if (szene == 5) {
      szene05();
    } else if (szene == 6) {
      szene06();
    } else if (szene == 7) {
      szene07();
    } else if (szene == 8) {
      szene08();
    } else if (szene == 9) {
      szene09();
    } else if (szene == 10) {
      szene10();
    } else if (szene == 11) {
      szene11();
    } else if (szene == 12) {
      szene12();
    } else if (szene == 13) {
      szene13();
    } else {
    }

    if (szene < 13) {
      musicPosition = map(mySound.currentTime(), 0, mySound.duration(), 0, 100);
      $("#timeline").css("width", musicPosition + "vw");
    }
  }
}
