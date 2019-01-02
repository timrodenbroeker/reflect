// Global Variables

var playing = false;

// Colors
var bg_red = "#FF5B3B";
var bg_green = "#37AA73";
var bg_blue = "#434FB5";
var bg_lightgrey = "#eeeeee";
var bg_white = "#ffffff";

var szenenwahl = 0;

var musicPosition;

var a;
var b;
var aa;
var x;
var y;
var z;

var h;

var loopSwitch;

var vid;

var mySound;

var analyzer;

var szene;

var bassdrum = [];

var arrindex = 0;

var invert = false;

var imagearray;

var ani1;

var ani2;

var invertbg = true;

var chooseimage = 0;

var chooseTexture = 0;

var chooseTexture1 = 0;

var chooseTexture2 = 3;

var chooseTexture3 = 6;

var chooseTexture4 = 0;

// Background-colors

var color1 = "#111111";
var color2 = "#eeeeee";

var countup;

// This was a lot of typing. Can i create/initialize variables with a for-loop?

var img0,
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
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
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
  ani1_34;

var arr1 = [];

// Kickdrum im Intro
// I dont use them yet, but maybe later

var kickdrumValue = 0;

var kickdrumTrigger = true;

var kickdrum = [
  3.691,
  4.389,
  5.536,
  6.226,
  7.382,
  8.071,
  9.22,
  9.91,
  11.07,
  11.766,
  12.918,
  13.608,
  14.759,
  15.464,
  16.614,
  17.308,
  18.46,
  19.155,
  20.301,
  21.0,
  22.156,
  22.843,
  24.006,
  24.686,
  25.835,
  26.535,
  27.686,
  28.38,
  29.527,
  30.221,
  31.375,
  32.07,
  33.228,
  33.92,
  35.076,
  35.773,
  36.928,
  37.614,
  38.703,
  38.771,
  39.448,
  40.608,
  41.311,
  42.455,
  43.157,
  44.304,
  44.988,
  46.15,
  46.842,
  48.0,
  48.688,
  49.843,
  50.538,
  51.692,
  52.375,
  53.53,
  54.222,
  55.378,
  56.068,
  57.228,
  57.934,
  59.072,
  59.773,
  60.925,
  61.618
];

// Szene 5 und 6

var woodStickTrigger = true;

var woodStick = [
  114.18,
  113.951,
  113.487,
  113.249,
  112.793,
  112.558,
  112.34,
  112.1,
  111.669,
  111.403,
  110.965,
  110.734,

  110.494,
  110.265,
  109.801,
  109.563,
  109.107,
  108.872,
  108.654,
  108.414,
  107.983,
  107.717,
  107.279,
  107.048,

  106.808,
  106.579,
  106.115,
  105.877,
  105.421,
  105.186,
  104.968,
  104.728,
  104.297,
  104.031,
  103.593,
  103.362,

  103.122,
  102.893,
  102.429,
  102.191,
  101.735,
  101.5,
  101.282,
  101.042,
  100.611,
  100.345,
  99.907,
  99.676,

  99.446,
  99.217,
  98.753,
  98.515,
  98.059,
  97.824,
  97.606,
  97.366,
  96.935,
  96.669,
  96.231,
  96.0,

  95.75,
  95.521,
  95.057,
  94.819,
  94.363,
  94.128,
  93.91,
  93.67,
  93.239,
  92.973,
  92.535,
  92.304,

  92.064,
  91.835,
  91.371,
  91.133,
  90.677,
  90.442,
  90.224,
  89.984,
  89.553,
  89.287,
  88.849,
  88.618,

  88.378,
  88.149,
  87.685,
  87.447,
  86.991,
  86.756,
  86.538,
  86.298,
  85.867,
  85.601,
  85.163,
  84.932,

  // Ridebecken kommt rein

  84.695,
  84.464,
  84,
  83.769,
  83.307,
  83.072,
  82.831,
  82.617,
  82.148,
  81.924,
  81.459,
  81.233,
  81,
  80.766,
  80.306,
  80.076,
  79.613,
  79.386,
  79.159,
  78.923,
  78.46,
  78.226,
  77.767,
  77.533,

  // Szenenwechesel

  77.068,
  76.837,
  76.615,
  76.378,
  75.916,
  75.678,
  75.458,
  75.222,
  74.993,
  74.771,
  74.534,
  74.07,
  73.837,
  73.605,
  73.377,
  72.918,
  72.687,
  72.211,
  71.998,
  71.769,
  71.539,
  71.067,
  70.838,
  70.361,
  70.137,
  69.916,
  69.687,
  69.223,
  68.985,
  68.529,
  68.294,
  68.076,
  67.836,
  67.405,
  67.139,
  66.701,
  66.47
];
