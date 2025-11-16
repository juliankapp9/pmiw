class Bala {
  constructor(x, y, direccion) {
    this.x = x;
    this.y = y;
    this.direccion = direccion;
    this.velocidad = 5;
    this.activa = true;
  }

  mover() {
    this.y = this.y + this.velocidad * this.direccion;
    if (this.y < 0 || this.y > height) {
      this.activa=false;
    }
  }

  mostrar() {
    if (this.direccion === -1) {
      fill(0, 255, 0);
    } else {
      fill(0, 255, 255);
    }
    ellipse(this.x, this.y, 10, 10);
  }
}
