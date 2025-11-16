class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamaño = 80;
    this.velocidad = 3;
    this.direccion = 1;
    this.balas = [];
    this.contadorBalas = 0;
    this.tiempo = 0;
    this.espera = random(60, 180);
    this.vidas = 5;
    this.imagen = enemigo;
  }

  mover() {
    this.x = this.x + this.velocidad * this.direccion;

    if (this.x < this.tamaño / 2) {
      this.x = this.tamaño / 2;
      this.direccion = 1;
    }

    if (this.x > width - this.tamaño / 2) {
      this.x = width - this.tamaño / 2;
      this.direccion = -1;
    }

    this.tiempo = this.tiempo + 1;

    if (this.tiempo > this.espera) {
      this.disparar();
      this.tiempo = 0;
      this.espera = random(60, 180);
    }
  }

  disparar() {
    let nuevaBala = new Bala(this.x, this.y + this.tamaño / 2, 1);
    this.balas[this.contadorBalas] = nuevaBala;
    this.contadorBalas = this.contadorBalas + 1;

    if (this.contadorBalas > 10) {
      this.contadorBalas = 10;
      this.balas[this.contadorBalas - 1] = nuevaBala;
    }
  }
  mostrar() {
    imageMode(CENTER);
    image(this.imagen, this.x, this.y, this.tamaño, this.tamaño);
    fill(255, 0, 0, 0);
    rectMode(CENTER);
    noStroke();
    rect(this.x, this.y, this.tamaño/2, this.tamaño);
  }
  
  actualizarBalas() {
    let nuevas = [];
    let c = 0;

    for (let i = 0; i < this.contadorBalas; i = i + 1) {
      let b = this.balas[i];
      b.mover();
      //b.mostrar();

      if (b.y < height) {
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
