
let bgColor;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(random(100, 150), random(0,200), random(45, 79));
  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    pelotas.push(nuevaPelota);
  }
}
function draw() {
  background(bgColor);
  for (let i = 0; i < 100; i++) {
    pelotas[i].update();
    pelotas[i].display();
  }
}
class Pelota {
  //plano de instrucciones
  constructor() {
    this.rad = ceil(random(10, 50));
    this.diametro = this.rad * 2;
    this.posX = random(this.rad, width - this.rad);
    this.posY = random(this.rad, height - this.rad);
    this.velX = random(-1, 5);
    this.velY = random(-1, 5);
    console.log("he vivido perros");
  }
  //métodos
  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > width - this.rad || this.posX < this.rad) {
      this.velX *= -1;
      //bgColor = color(random(100, 230), random(0, 100), random(20, 220));
    }
    if (this.posY > height - this.rad || this.posY < this.rad) {
      this.velY *= -1;
      //bgColor = color(random(100, 230), random(0, 100), random(20, 220));
    }
  }
  display() {
    fill(255);
    noStroke();
    circle(this.posX, this.posY, this.diametro);
  }
}
