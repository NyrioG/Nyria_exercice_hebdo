let x1,x2,y1,y2,x3,y3
let speed

function setup() {
  createCanvas(600, 600);
  noStroke();
  x1=320
  y1=0
  x2=600
  y2=280
  x3=0
  y3=600

  speed = 1
}

function draw() {

if (x1==0){
  y1 += speed
}
if (x2==0){
  y2 += speed
}
if (x3==0){
  y3 += speed
}


if (y1==600){
  x1 += speed
}
if (y2==600){
  x2 += speed
}
if (y3==600){
  x3 += speed
}

if (x1==600){
y1 -= speed
}
if (x2==600){
y2 -= speed
}
if (x3==600){
y3 -= speed
}


if (y1==0){
x1 -= speed
}
if (y2==0){
  x2 -= speed
  }

  if (y3==0){
    x3 -= speed
    }

  background(0);
fill(58,131,82);
  square(0,0, 600);

fill(231, 196, 69);
  beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3,y3);
endShape();

fill(107, 65, 44);
  beginShape();
vertex(x1, y1);
vertex(600, 0);
vertex(x2,y2);
endShape();

fill(222, 122, 52);
  beginShape();
  vertex(x2,y2);
vertex(600, 600);
vertex(x3,y3);
endShape();


}