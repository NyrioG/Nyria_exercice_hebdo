const img = new Image();
img.src = "./image/til.png";

export default class Grid {
  constructor(ctx) {
    console.log("Grid.js");
    // this.canvas = document.createElement("canvas");
    // this.canvas.width = window.innerWidth;
    // this.canvas.height = window.innerHeight;
    // document.body.appendChild(this.canvas);
    this.ctx = ctx; //this.canvas.getContext("2d");

    // this.draw()

    // this.rotatedImageIndex = null;
    this.rotations = new Array(16 * 8).fill(0); //
  }

  draw(finger) {
    // dessiner une grille de 8 x 16
    const largeur = window.innerWidth / 16;
    const hauteur = window.innerHeight / 8;

    let indexDoigt = -1;
    if (finger.x === null || finger.y === null) {
      indexDoigt = -1;
    } else {
      const x = Math.floor((finger.x * window.innerWidth) / largeur);
      const y = Math.floor((finger.y * window.innerHeight) / hauteur);
      indexDoigt = y * 16 + x; // Changez aussi cette ligne pour correspondre à la nouvelle taille de la grille
    }

    this.ctx.strokeStyle = "red";
    let index = 0;
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 16; x++) {
        this.ctx.beginPath();
        this.ctx.rect(x * largeur, y * hauteur, largeur, hauteur);
        this.ctx.stroke();
        this.ctx.closePath();

        if (index === indexDoigt) {
          this.rotations[index]++;
        }

        if (this.rotations[index]) {
          this.ctx.save();
          this.ctx.translate(
            x * largeur + largeur / 2,
            y * hauteur + hauteur / 2
          );
          this.ctx.rotate((90 * this.rotations[index] * Math.PI) / 180);
          this.ctx.drawImage(img, -largeur / 2, -hauteur / 2, largeur, hauteur);
          this.ctx.restore();
        } else {
          this.ctx.drawImage(img, x * largeur, y * hauteur, largeur, hauteur);
        }

        index++;
      }
    }
  }

  rotateImage(x, y) {
    const largeur = window.innerWidth / 16;
    const hauteur = window.innerHeight / 8;
    const index = Math.floor(y / hauteur) * 16 + Math.floor(x / largeur);

    if (index >= 0 && index < this.tiles.length) {
      this.rotations[index]++; //////
    }
  }

  // rotate(index) {
  //   const largeur = window.innerWidth / 16;
  //   const hauteur = window.innerHeight / 8;
  //   const x = (index % 16) * largeur;
  //   const y = Math.floor(index / 16) * hauteur;

  //   this.ctx.save();
  //   this.ctx.translate(x + largeur / 2, y + hauteur / 2);
  //   this.ctx.rotate((90 * Math.PI) / 180);
  //   this.ctx.drawImage(img, -largeur / 2, -hauteur / 2, largeur, hauteur);
  //   this.ctx.restore();
  // }

  // erase(index) {
  //   const largeur = window.innerWidth / 16;
  //   const hauteur = window.innerHeight / 8;
  //   const x = (index % 16) * largeur;
  //   const y = Math.floor(index / 16) * hauteur;

  //   this.ctx.clearRect(x, y, largeur, hauteur);
  // }
}
