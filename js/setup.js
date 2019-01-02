// COLOR

var $win = $(window),
  w = 0,
  h = 0,
  rgb1 = [],
  rgb2 = [],
  getWidth = function() {
    w = $win.width();
    h = $win.height();
  };

$win
  .resize(getWidth)
  .mousemove(function(e) {
    rgb1 = [
      Math.round((e.pageX / w) * 255),
      Math.round((e.pageX / w) * 255),
      Math.round((e.pageX / w) * 255)
    ];

    rgb2 = [
      Math.round((e.pageX / w) * 255),
      Math.round((e.pageX / w) * 255),
      Math.round((e.pageX / w) * 255)
    ];

    $("#logo").css("color", "rgb(" + rgb2.join(",") + ")");
    $("#navbar a").css("color", "rgb(" + rgb2.join(",") + ")");
    $("#logo").css("border-color", "rgb(" + rgb2.join(",") + ")");
  })
  .resize();

// Invert on mouse position

$(document).mousemove(function(event) {
  if (szene < 13) {
    mappedRange = Math.floor((100 * event.pageX) / window.innerWidth);
    var flt1 = "invert(";
    var flt2 = "%)";
    var filterVal = flt1.concat(mappedRange, flt2);

    $("canvas")
      .css("filter", filterVal)
      .css("webkitFilter", filterVal)
      .css("mozFilter", filterVal)
      .css("oFilter", filterVal)
      .css("msFilter", filterVal);
  }
});

function setup() {
  $(".showwhenloading").fadeOut("slow", function() {
    $(".showwhenready").fadeIn("slow");
  });

  canvas = createCanvas(
    $("#thecanvas").width(),
    $("#thecanvas").height(),
    WEBGL
  );
  canvas.parent("thecanvas");
  rectMode(CENTER);
  imageMode(CENTER);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  var rms;
  // frameRate(30);

  // Image-Objekte in das imagearray laden

  imagearray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22
  ];

  ani1 = [
    ani1_00,
    ani1_01,
    ani1_03,
    ani1_04,
    ani1_05,
    ani1_06,
    ani1_07,
    ani1_08,
    ani1_09,
    ani1_10,
    ani1_11,
    ani1_12,
    ani1_13,
    ani1_14,
    ani1_15,
    ani1_16,
    ani1_17,
    ani1_18,
    ani1_19,
    ani1_20,
    ani1_21,
    ani1_22,
    ani1_23,
    ani1_24,
    ani1_25,
    ani1_26,
    ani1_27,
    ani1_28,
    ani1_29,
    ani1_30,
    ani1_31,
    ani1_32,
    ani1_33,
    ani1_34
  ];

  ani2 = [img55, img56, img57, img58, img59, img60];

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(mySound);

  // orbitControl();
  // Erste Szene: Logo vergrößern
  $(".fauxpaslogo").addClass("grow");

  // mySound.play();
  // mySound.jump(60);

  // Variablen

  szene = 0;

  a = 0;
  aa = 0;

  // Für Szene 3: Array mit Objekten erstellen
  for (var i = 0; i < 300; i++) {
    arr1.push({
      x: random(-width / 3, width / 3),
      y: random(-height / 3, height / 3),
      z: random(-width / 10, width / 10),
      rotate: random(180),
      width: random(100, 400),
      height: random(100, 300),
      img: "img" + i
    });
  }

  // Here i add the lights. Unfortunately there's no function to disable them later.
  // directionalLight(100, 0, 10, map(mouseX,0,width,-10,10), map(mouseY,0,height,10,-10), 8);

  // ************************
  // CUEPOINTS
  // ************************

  // Kickdrum & Woodstick
  for (var i = 0; i < woodStick.length; i++) {
    mySound.addCue(woodStick[i], function() {
      woodStickTrigger = !woodStickTrigger;
    });
  }

  for (var i = 0; i < kickdrum.length; i++) {
    mySound.addCue(kickdrum[i], function() {
      kickdrumTrigger = !kickdrumTrigger;
      kickdrumValue = 1;
    });
  }

  // Szene 0 Intro
  mySound.addCue(0, function() {
    szene = 0;
    szenenwahl = 0;
    a = 0;
    // Array
  });

  // Szene 1 Drums kommen rein
  mySound.addCue(3.6, function() {
    szene = 1;
    szenenwahl = 1;
    a = 0;
  });

  // Szene 1a Logo ausfaden
  mySound.addCue(11.075, function() {
    $(".fauxpaslogo").removeClass("grow");
  });

  // Szene 2 Bass kommt rein
  mySound.addCue(18.44, function() {
    a = 0;
    szene = 2;
    szenenwahl = 2;
  });

  // Szene 3 HiHats und Tamburin
  // Szene Anschwellendes Synth-Pad
  mySound.addCue(33.22, function() {
    szene = 3;
    szenenwahl = 3;
    a = 0;
    chooseTexture1 = 0;
  });

  mySound.addCue(48, function() {});

  mySound.addCue(55, function() {});

  // Szene 4 Alles fährt runter, leise Frauenstimme
  mySound.addCue(62.74, function() {
    szene = 4;
    szenenwahl = 4;
    a = 0;
  });

  // Szene 5 Synth-Chords kommen dazu
  mySound.addCue(77.5, function() {
    szene = 5;
    szenenwahl = 5;
    a = 0;
  });

  // Szene 6 Fette Drums kommen dazu
  mySound.addCue(92, function() {
    szene = 6;
    szenenwahl = 6;
  });

  // Szene 7 Alles wird abgedämpft, beinahe Stille, aufsteigendes "Murmeln"
  mySound.addCue(114.4, function() {
    szene = 7;
    szenenwahl = 7;
  });

  // Szene 8 Wildes Drumsolo
  mySound.addCue(122.75, function() {
    szene = 8;
    szenenwahl = 8;
  });

  // Szene 9 Drums runter, Harmonie kommt wieder rein
  mySound.addCue(151.4, function() {
    szene = 9;
    szenenwahl = 9;
    a = 0;
  });

  // Szene 10 Outro 1
  mySound.addCue(180.9, function() {
    szene = 10;
    szenenwahl = 10;
  });

  // Szene 11 Outro 2
  mySound.addCue(195.68, function() {
    szene = 11;
    szenenwahl = 11;
  });

  // Szene 12 Outro 3
  mySound.addCue(203.1, function() {
    szene = 12;
    szenenwahl = 12;
  });

  // Szene 13 Schlussakkord
  mySound.addCue(210.969, function() {
    szene = 13;
    $("canvas").fadeOut("slow");
    $("#timeline").fadeOut("slow");
    $("#timeline-container").addClass("redbg");
  });
} // /setup
