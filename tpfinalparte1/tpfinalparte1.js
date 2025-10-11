//Kapp Julian
//Fernandez Gonzalo
//Comision 1
//tp final parte 1
//https://youtu.be/mcOzUv4YsN0

let imagen=[];
let texto=['', 'En una casa de piedra viven Ylla y Yll, una pareja marciana cuyo amor se ha apagado con el tiempo.', 'Él es frío y distante; ella, joven y soñadora, suspira por algo distinto a la monotonía diaria.', 'Ylla comienza a soñar con hombres de piel clara y ojos azules que llegan desde el cielo en una nave metálica.', 'En esos sueños, un viajero llamado Nathaniel York le sonríe y le canta dulces palabras.', 'Ylla se siente atraída por aquel desconocido y espera con ansias su llegada.', 'Cuando comparte sus sueños con Yll, él la escucha y no sabe como deberia reaccionar.', 'Él aparenta que no le importa lo que cuenta su esposa, pero en el fondo algo no le gusta.', 'El esposo no soporta la ilusión que su mujer pone en aquel hombre de otro mundo.', 'Ylla sueña que la nave aterrizará en el valle cercano al día siguiente.', 'Disimulando, él decide salir de cacería justo en el momento en que la nave debería llegar.', 'Ylla siente dentro de sí que algo sucede, como si oyera voces y presintiera la llegada de York.', 'Un eco metálico resuena en la distancia: los visitantes han sido recibidos con violencia.','La nave aterriza Ylla puede conocer a York y escapar con el a una nueva vida.' , 'La nave aterriza, Yll ataca a los tripulantes matandolos y condenando a Ylla a morir de tristeza.','La nave era una trampa, los tripulantes matan al matrimonio y conquistan su mundo.'];
let pantalla=0;
let musica, sonidoBoton;

//carga de imagenes
function preload() {
  for (let i=0; i<16; i++) {
    imagen[i]=loadImage('data/alien'+i+'.jpg');
  }
  musica = loadSound('data/musicatension.mp3');
  sonidoBoton = loadSound('data/boton.wav');
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  //estados
  //pantallas(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB)
  if (pantalla===0) {
    pantallas(imagen[0], texto[0], width/4, height/2+height/2, width/4, height/2+height/4, width/4, height/15, "Comenzar aventura");
  }

  if (pantalla===1) {
    pantallas(imagen[1], texto[1], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===2) {
    pantallas(imagen[2], texto[2], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===3) {
    pantallas(imagen[3], texto[3], width/10, height/3, width/2-width/3, height-height/10, width/4, height/15, "No compartir");
    botones(width-width/2, height-height/10, width/4, height/15, "Compartir");
  }
  if (pantalla===4) {
    pantallas(imagen[4], texto[4], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===5) {
    pantallas(imagen[5], texto[5], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===6) {
    pantallas(imagen[6], texto[6], width/10, height/3, width/2-width/3, height-height/10, width/4, height/15, "Yll ignora la situación");
    botones(width-width/2, height-height/10, width/4, height/15, "Yll se enoja");
  }
  if (pantalla===7) {
    pantallas(imagen[7], texto[7], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===8) {
    pantallas(imagen[8], texto[8], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===9) {
    pantallas(imagen[9], texto[9], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===10) {
    pantallas(imagen[10], texto[10], width/10, height/3, width/2-width/3, height-height/10, width/4, height/15, "Yll ataca la nave");
    botones(width-width/2, height-height/10, width/4, height/15, "Yll no ataca la nave");
  }
  if (pantalla===11) {
    pantallas(imagen[11], texto[11], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Siguiente");
  }
  if (pantalla===12) {
    pantallas(imagen[12], texto[12], width/10, height/3, width/2-width/3, height-height/10, width/4, height/15, "Ylla mira desde lejos");
    botones(width-width/2, height-height/10, width/4, height/15, "Yll sale a ver que pasa");
  }
  if (pantalla===13) {
    pantallas(imagen[13], texto[13], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Reiniciar");
  }
  if (pantalla===14) {
    pantallas(imagen[14], texto[14], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Reiniciar");
  }
  if (pantalla===15) {
    pantallas(imagen[15], texto[15], width/10, height/3, width/2-width/8, height-height/10, width/4, height/15, "Reiniciar");
  }
}



//navegacion
function mousePressed() {
  if (pantalla===0) {
    if (posMouse(width/4, height/2+height/4, width/4, height/15)) {
      pantalla=1;
      sonidoBoton.play();
    }
    if (!musica.isPlaying()) {
      musica.loop();
      musica.setVolume(0.5);
    }
  }
  if (pantalla===1) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=2;
      sonidoBoton.play();
    }
  } else if (pantalla===2) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=3;
      sonidoBoton.play();
    }
  } else if (pantalla===3) {
    if (posMouse(width/2-width/3, height-height/10, width/4, height/15)) {
      pantalla=5;
      sonidoBoton.play();
    } else if (posMouse(width-width/2, height-height/10, width/4, height/15)) {
      pantalla=4;
      sonidoBoton.play();
    }
  } else if (pantalla===4) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=6;
      sonidoBoton.play();
    }
  } else if (pantalla===5) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=9;
      sonidoBoton.play();
    }
  } else if (pantalla===6) {
    if (posMouse(width/2-width/3, height-height/10, width/4, height/15)) {
      pantalla=7;
      sonidoBoton.play();
    } else if (posMouse(width-width/2, height-height/10, width/4, height/15)) {
      pantalla=8;
      sonidoBoton.play();
    }
  } else if (pantalla===7) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=10;
      sonidoBoton.play();
    }
  } else if (pantalla===8) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=9;
      sonidoBoton.play();
    }
  } else if (pantalla===9) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=10;
      sonidoBoton.play();
    }
  } else if (pantalla===10) {
    if (posMouse(width/2-width/3, height-height/10, width/4, height/15)) {
      pantalla=11;
      sonidoBoton.play();
    } else if (posMouse(width-width/2, height-height/10, width/4, height/15)) {
      pantalla=13;
      sonidoBoton.play();
    }
  } else if (pantalla===11) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=12;
      sonidoBoton.play();
    }
  } else if (pantalla===12) {
    if (posMouse(width/2-width/3, height-height/10, width/4, height/15)) {
      pantalla=15;
      sonidoBoton.play();
    } else if (posMouse(width-width/2, height-height/10, width/4, height/15)) {
      pantalla=14;
      sonidoBoton.play();
    }
  } else if (pantalla===13 || 14 || 15) {
    if (posMouse(width/2-width/8, height-height/10, width/4, height/15)) {
      pantalla=0;
      sonidoBoton.play();
      musica.stop();
    }
  }
}
//funciones genericas
function pantallas(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0);
  fill(255);
  text(texto, posX, posY, width-tamXB, height-tamYB);
  botones(posXB, posYB, tamXB, tamYB, textoB);
}

function botones(posX, posY, tamX, tamY, textoB) {
  if (posMouse(posX, posY, tamX, tamY)) {
    fill(255, 50, 0);
  } else {
    fill(200, 10, 0, 100);
  }
  noStroke();
  rect(posX, posY, tamX, tamY, tamY/4);
  fill(255);
  textAlign(CENTER, CENTER);
  text(textoB, posX+tamX/2, posY+tamY/2);
}

function posMouse(posX, posY, tamX, tamY) {
  return mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY;
}
