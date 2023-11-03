var width = 800;
var height = 800;
var context;
var lineX = 5;
var colY = 5;
var circles = [];



function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
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
      var size = gridX / 2; // Adjust the size as needed
      var imageSrc = 'image_path_here.png'; // Replace with the path to your image

      var tile = new Tile(i * gridX, j * gridY, imageSrc, size);
      circles.push(tile);
    }
  }
  draw();
}

function mousePressed(event) {
  var mouseX = event.clientX - canvas.getBoundingClientRect().left;
  var mouseY = event.clientY - canvas.getBoundingClientRect().top;
  console.log("mousePressed");
  console.log("x: ", mouseX, "y: ", mouseY);

  // Check if the mouse is inside any tile
  for (let i = 0; i < tiles.length; i++) {
    var tile = tiles[i];
    if (
      mouseX >= tile.x &&
      mouseX <= tile.x + tile.size &&
      mouseY >= tile.y &&
      mouseY <= tile.y + tile.size
    ) {
      // Perform actions when a tile is clicked
      // For example, you can change the image or perform other actions.
    }
  }
}

window.onload = function () {
  console.log("on est pret");
  setup();
};
