//Kapp Julian
//Gonzalo Fernandez
//https://www.youtube.com/watch?v=-MNLK-gbycw

let juego;
let fondo, menu, ganaste, perdiste, marciano, enemigo, creditos, jugar, volver;
let musica
function preload(){
fondo= loadImage('data/fondo.jpg');
menu=loadImage('data/menu.jpg');
ganaste=loadImage('data/ganaste.jpg');
perdiste=loadImage('data/perdiste.jpg');
marciano=loadImage('data/marciano.png');
enemigo=loadImage('data/enemigo.png');
creditos=loadImage('data/creditos.jpg');
jugar=loadImage('data/jugar.jpg');
volver=loadImage('data/volver.jpg');
musica = loadSound('data/musicaFondo.mp3');
}


function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(0);
  juego.actualizar();
  juego.mostrar();
  
}

function keyPressed() {
  juego.controlar();
}

function mousePressed(){
  juego.botones();
}
