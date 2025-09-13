//Kapp Julian 122742/1
//tp1
//https://youtu.be/qPD79byk--w

let Obra;
let cantidad = 10;
let posX = 600;
let posY = 200;
let angulo = 0;
let resetRot = false;

function preload() {
  Obra = loadImage("data/Obra.png");
}

function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  background(255);

  image(Obra, 0, 0, width / 2, height);

  miFondo(width / 2, 0, width / 2, height, cantidad);

  if (mouseX > 400) {
    angulo += 0.05;
  }

  if (resetRot) {
    angulo = 0;
    resetRot = false;
  }

  push();
  translate(posX, posY);
  rotate(angulo);
  miRombo(0, 0, 400, 400);
  pop();
}

function keyPressed() {
  if (key === ' ') {
    resetRot = true;
  }
}

function miFondo(posX, posY, anchoTotal, altoTotal, cantidad) {
  let alto = altoTotal / cantidad;
  let ancho = anchoTotal;
  let cantidadX = 1;
  let y;

  for (let x = 0; x < cantidadX; x++) {
    for (y = 0; y < cantidad; y++) {
      if ((y % 2) === 0) {
        fill(0);
      } else {
        fill(255);
      }
      noStroke();
      rect(posX + x * ancho, posY + y * alto, ancho, alto);
    }
  }
}

function miRombo(posX, posY, ancho, alto) {
  let franjas = 5;
  let anchoTri = ancho / 2;
  let anchoFranja = anchoTri / franjas;

  for (let i = 0; i < franjas; i++) {
    if ((i % 2) === 0) fill(255);
    else fill(0);

    let x1 = posX - ancho / 2 + i * anchoFranja;
    let x2 = posX - ancho / 2 + (i + 1) * anchoFranja;

    let y1 = map(x1 - (posX - ancho / 2), 0, anchoTri, alto / 2, 0) - alto / 2;
    let y2 = map(x2 - (posX - ancho / 2), 0, anchoTri, alto / 2, 0) - alto / 2;
    let y3 = map(x2 - (posX - ancho / 2), 0, anchoTri, alto / 2, alto) - alto / 2;
    let y4 = map(x1 - (posX - ancho / 2), 0, anchoTri, alto / 2, alto) - alto / 2;

    triangle(x1, y1, x2, y2, x2, y3);
    triangle(x1, y1, x2, y3, x1, y4);
  }

  for (let i = 0; i < franjas; i++) {
    if ((i % 2) === 0) fill(255);
    else fill(0);

    let x1 = posX + ancho / 2 - i * anchoFranja;
    let x2 = posX + ancho / 2 - (i + 1) * anchoFranja;

    let y1 = map(x1 - (posX + ancho / 2 - anchoTri), 0, anchoTri, 0, alto / 2) - alto / 2;
    let y2 = map(x2 - (posX + ancho / 2 - anchoTri), 0, anchoTri, 0, alto / 2) - alto / 2;
    let y3 = map(x2 - (posX + ancho / 2 - anchoTri), 0, anchoTri, alto, alto / 2) - alto / 2;
    let y4 = map(x1 - (posX + ancho / 2 - anchoTri), 0, anchoTri, alto, alto / 2) - alto / 2;

    triangle(x1, y1, x2, y2, x2, y3);
    triangle(x1, y1, x2, y3, x1, y4);
  }
}
