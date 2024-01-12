let width = 800;
let height = 800;
let context;
let lineX = 5;
let colY = 5;
let tiles = [];

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.id = "myCanvas";
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function draw() {
  context.clearRect(0, 0, width, height);
  for (let i = 0; i < tiles.length; i++) {
    var tile = tiles[i];
    tile.draw(context);
  }
  requestAnimationFrame(draw);
}

function setup() {
  console.log("setup");
  createCanvas(width, height);

  document.addEventListener("click", mousePressed);

  // INITIALISATION DES TUILES
  for (let j = 1; j < lineX; j++) {
    for (let i = 1; i < colY; i++) {
      var gridX = width / lineX;
      var gridY = height / colY;
      var side = Math.min(gridX, gridY);
      var tile = new Tiles(i * gridX, j * gridY, side); // Changed Square to Tiles
      tile.loadImage("img/tills.png");
      tiles.push(tile); // Changed squares to tiles
    }
  }
  draw();
}

function mousePressed(informations) {
  console.log("mousePressed");
  console.log("x: ", informations.x, "y: ", informations.y);

  // Utiliser la fonction isInMe() pour CHAQUE tuile
  for (let i = 0; i < tiles.length; i++) {
    var tile = tiles[i]; // Changed square to tile
    var bool = tile.isInMe(informations.x, informations.y);
    console.log(i, bool);
    if (bool) {
      tile.rotate(); // The method call remains the same as the method names inside the class are not changed
    }
  }
}

window.onload = function () {
  console.log("on est prêt");
  setup();
};
