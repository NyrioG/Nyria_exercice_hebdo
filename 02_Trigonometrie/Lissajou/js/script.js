var a1;
var a2;
var centerX;
var centerY;
var canvasWidth = 1000;
var canvasHeight = 1000;
var context;
var bigRadiusX;
var bigRadiusY;
var smallRadiusX;
var smallRadiusY;
var color;

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
  document.body.appendChild(canvas);
}

function ellipse(x, y, radiusX, radiusY) {
  context.beginPath();
  context.ellipse(x, y, radiusX, radiusY, 0, 0, 3 * Math.PI);
  context.strokeStyle = "rgba(255,255,255,0.5)";
  context.stroke();
  context.closePath();
}

function setup() {
  console.log("setup");
  createCanvas(canvasWidth, canvasHeight);
  color = 0;
  a1 = 1;
  a2 = 5;
  bigRadiusX = 200;
  bigRadiusY = 100; 
  smallRadiusX = 400;
  smallRadiusY = 100; 
  centerX = canvasWidth / 2;
  centerY = canvasHeight / 2;

  draw();
}

function draw() {
  context.fillStyle = "rgba(0, 100, 255, 0.01)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  a1 += 2;
  a2 += 2;
  color += 2;
  
  
  var posX = centerX + Math.cos(a1 * (Math.PI / 280)) * bigRadiusX;
  var posY = centerY + Math.sin(a2 * (Math.PI / 90)) * smallRadiusY;
  
  
  if (posX + bigRadiusX > canvasWidth || posX - bigRadiusX < 0) {
    bigRadiusX *= 1; 
  }
  if (posY + smallRadiusY > canvasHeight || posY - smallRadiusY < 1) {
    smallRadiusY /= -5; 
  }

  ellipse(posX, posY, bigRadiusX, smallRadiusY);

  // miroir
  var mirroredPosX = centerX - (posX - centerX);
  ellipse(mirroredPosX, posY, bigRadiusX, smallRadiusY);

  requestAnimationFrame(draw);
}

window.onload = function () {
  console.log("on est prêt");
  setup();
};
