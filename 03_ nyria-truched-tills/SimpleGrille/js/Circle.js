
// un peu trop de manip je me suis perdu 

class Tile {
  constructor(x, y, imageSrc, size) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = imageSrc;
    this.size = size;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.size, this.size);
  }


}


const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const tiles = [];

// Créez des tuiles avec des images spécifiques
const tile1 = new Tile(100, 100, 'tills.png', 50);
const tile2 = new Tile(200, 200, 'tills2.png', 50);

tiles.push(tile1);
tiles.push(tile2);

// Dessinez les tuiles
tiles.forEach(tile => {
  tile.draw(context);
});
