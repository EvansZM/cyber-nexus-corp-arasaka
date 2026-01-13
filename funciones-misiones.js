
// 1. Tablon de anuncios (Para las misiones legales disponibles) se agregan misiones extras
let misiones = [
  "Robo de datos",
  "Escolta",
  "Infiltracion",
  "Sabotaje de drones",
  "Rescate de informante",
  "Intercepción de señales",
  "Protección de VIP",
  "Limpieza de evidencia",
  "Hackeo de servidor central"
];


// 2. Calcular recompensa (En base a l bono y la dificultad se calcula el valor de la recompensa)
function calcularRecompensa(dificultad, bono = 500){

    const MULTIPLICADOR_DIFICULTAD =  1000;
    let valorTotal = (dificultad *MULTIPLICADOR_DIFICULTAD) + bono;
    return valorTotal;

};

// 3. Simulador de peligro
function simuladorDePeligro() {
  // Contador de intentos realizados
  let intentos = 0;

  // Variable para guardar el número aleatorio generado
  let numero = 0;

  do {
    // Genera un número aleatorio entre 0 y 20
    numero = Math.floor(Math.random() * 20) + 1;

    // Muestra el intento actual (sumo 1 para que se vea humano: intento 1,2,3...)
    console.log(`Intento de hackeo ${intentos + 1} | señal=${numero}`);

    // Aumenta el contador de intentos
    intentos++;

    // Repite mientras: el número NO supere 8 y aún queden intentos
  } while (numero <= 8 && intentos < 5);

  // Mensaje final con cuántos intentos se hicieron
  console.log(`Intentos de hackeo del sistema: ${intentos}`);
}

// 4. Validador de mision (Valida si una mision es legal o no)
function validarMision(nombreMision){

    // Se recorre las misiones disponibles
    for(mision of misiones){
        //Si el nombre de la mision coincide con alguna mision de la lista devuelve un true
        if(mision == nombreMision){
           return true;
        };
    }
    // Si no devuelve un false
    return false;
};



