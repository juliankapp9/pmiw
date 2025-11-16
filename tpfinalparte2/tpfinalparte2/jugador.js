class Marciano {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamaño = 80;
    this.velocidad = 4;
    this.direccion = 0;
    this.balas = [];
    this.contadorBalas = 0;
    this.vidas = 5;
    this.imagen = marciano;
  }

  mover() {
    this.x = this.x + this.velocidad * this.direccion;

    if (keyIsPressed === false) {
      this.direccion = 0;
    }

    if (this.x < this.tamaño / 2) {
      this.x = this.tamaño / 2;
    }

    if (this.x > width - this.tamaño / 2) {
      this.x = width - this.tamaño / 2;
    }
  }

  moverJugador() {
    if (key === "ArrowLeft") {
      this.direccion = -1;
    }
    if (key === "ArrowRight") {
      this.direccion = 1;
    }
    if (key === " ") {
      this.disparar();
    }
  }

  disparar() {
    let nuevaBala = new Bala(this.x, this.y - this.tamaño / 2, -1);
    this.balas[this.contadorBalas] = nuevaBala;
    this.contadorBalas = this.contadorBalas + 1;

    if (this.contadorBalas > 10) {
      this.contadorBalas = 10;
      this.balas[this.contadorBalas - 1] = nuevaBala;
    }
  }

  mostrar() {
    imageMode(CENTER);
    image(marciano, this.x, this.y, this.tamaño, this.tamaño);
    fill(0, 255, 0, 0);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.tamaño/2, this.tamaño);
  }

  actualizarBalas() {
    let nuevas = [];
    let c = 0;

    for (let i = 0; i < this.contadorBalas; i = i + 1) {
      let b = this.balas[i];
      b.mover();
      //b.mostrar();

      if (b.y > 0) {
        nuevas[c] = b;
        c = c + 1;
      }
    }

    this.balas = nuevas;
    this.contadorBalas = c;
  }

  impacto(bala) {
    if (!bala.activa) {
      return false;
    }
    let distancia = dist(bala.x, bala.y, this.x, this.y);

    if (distancia < this.tamaño / 2) {
      bala.activa=false;
      return true;
    } else return false;
  }
}
