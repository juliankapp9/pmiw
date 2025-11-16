class Juego {
  constructor() {
    this.jugador = new Marciano(width/2, height-50);
    this.enemigo = new Enemigo(width/2, 40);
    this.estado="menu";
  }

  actualizar() {

    if (this.estado === "juego") {
      this.jugador.mover();
      this.jugador.actualizarBalas();

      this.enemigo.mover();
      this.enemigo.actualizarBalas();

      this.colisiones();

      if (this.jugador.vidas <= 0) {
        this.estado = "perder";
        musica.stop(); 
      }

      if (this.enemigo.vidas <= 0) {
        this.estado = "ganar";
        musica.stop(); 
      }
    }
  }

  colisiones() {

    for (let i = 0; i < this.jugador.balas.length; i++) {
      let bala = this.jugador.balas[i];

      if (this.enemigo.impacto(bala)) {
        bala.activa = false;
        this.enemigo.vidas--;
      }
    }

    for (let i = 0; i < this.enemigo.balas.length; i++) {
      let balaEnemiga = this.enemigo.balas[i];

      if (this.jugador.impacto(balaEnemiga)) {
        balaEnemiga.activa = false;
        this.jugador.vidas--;
      }
    }
  }

  mostrar() {

    if (this.estado === "menu") {
      imageMode(CORNER);
      image(menu, 0, 0)
      fill(255);
      image(jugar, width/2-width/4, height/2-height/10, width/2, height/5);
      image(creditos, width/2-width/4, height/2+height/4-height/10, width/2, height/5);
    }

    if (this.estado === "juego") {
      imageMode(CORNER);
      image(fondo, 0, 0);

      this.jugador.mostrar();
      this.enemigo.mostrar();
      
      for (let i = 0; i < this.jugador.balas.length; i++) {
        this.jugador.balas[i].mostrar();
      }

      for (let i = 0; i < this.enemigo.balas.length; i++) {
        this.enemigo.balas[i].mostrar();
      }

      textSize(20);
      fill(255);
      text("Vidas jugador: " + this.jugador.vidas, 20, height - 20);
      text("Vidas enemigo: " + this.enemigo.vidas, 20, 30);
    }

    if (this.estado === "ganar") {
      imageMode(CORNER);
      image(ganaste, 0, 0);
      image(volver, width/2-width/4, height/2+height/4-height/10, width/2, height/5);
    }

    if (this.estado === "perder") {
      imageMode(CORNER);
      image(perdiste, 0, 0);
      image(volver, width/2-width/4, height/2+height/4-height/10, width/2, height/5);
    }

    if (this.estado === "creditos") {
      image(fondo, 0, 0);
      image(volver, width/2-width/4, height/2+height/4-height/10, width/2, height/5);
      fill(255);
      textAlign(CENTER);
      fill(0);
      text("Juego desarrollado por: \n Julian Kapp \n Gonzalo Fernandez", width/2, height/2);
    }
  }

  controlar() {

    if (this.estado === "juego") {
      this.jugador.moverJugador();
    }
  }

  botones() {

    if (this.estado === "menu") {
      if (mouseX > width/2 - width/4 && mouseX < width/2 + width/4 &&
          mouseY > height/2 - height/10 && mouseY < height/2 + height/10) {

        this.estado = "juego";

        if (!musica.isPlaying()) {
          musica.loop();
        }

        return;
      }

      if (mouseX > width/2 - width/4 && mouseX < width/2 + width/4 &&
          mouseY > height/2 + height/4 - height/10 && mouseY < height/2 + height/4 + height/10) {

        this.estado = "creditos";
        return;
      }
    }

    if (this.estado === "creditos") {
      if (mouseX > width/2 - width/4 && mouseX < width/2 + width/4 &&
          mouseY > height/2 + height/4 - height/10 && mouseY < height/2 + height/4 + height/10) {

        musica.stop();
        this.reiniciar();
        this.estado = "menu";
        return;
      }
    }

    if (this.estado === "perder") {
      if (mouseX > width/2 - width/4 && mouseX < width/2 + width/4 &&
          mouseY > height/2 + height/4 - height/10 && mouseY < height/2 + height/4 + height/10) {

        musica.stop();
        this.reiniciar();
        this.estado = "menu";
        return;
      }
    }

    if (this.estado === "ganar") {
      if (mouseX > width/2 - width/4 && mouseX < width/2 + width/4 &&
          mouseY > height/2 + height/4 - height/10 && mouseY < height/2 + height/4 + height/10) {

        musica.stop();
        this.reiniciar();
        this.estado = "menu";
        return;
      }
    }
  }

  reiniciar() {
    this.jugador = new Marciano(width/2, height-50);
    this.enemigo = new Enemigo(width/2, 40);
  }
}
