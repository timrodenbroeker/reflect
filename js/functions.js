function welcheSzene(){
  if (szenenwahl == 0) {
    mySound.jump(0);
  }

  else if (szenenwahl == 1) {
    mySound.jump(3);
  }

  else if (szenenwahl == 2) {
    mySound.jump(18);
  }

  else if (szenenwahl == 3) {
    mySound.jump(33);
  }

  else if (szenenwahl == 4) {
    mySound.jump(62);
  }

  else if (szenenwahl == 5) {
    mySound.jump(77);
  }

  else if (szenenwahl == 6) {
    mySound.jump(92);
  }

  else if (szenenwahl == 7) {
    mySound.jump(114);
  }

  else if (szenenwahl == 8) {
    mySound.jump(122);
  }

  else if (szenenwahl == 9) {
    mySound.jump(151);
  }

  else if (szenenwahl == 10) {
    mySound.jump(180);
  }

  else if (szenenwahl == 11) {
    mySound.jump(195);
  }

  else if (szenenwahl == 12) {
    mySound.jump(203);
  }

  else if (szenenwahl == 13) {
    mySound.jump(210);
  } 

}

  $(document).keydown(function(e) {

    if (e.which == 39) {
      szenenwahl++;
    welcheSzene();    
    }

    if (e.which == 37) {
      szenenwahl--;
    welcheSzene();    
    }

  });


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
