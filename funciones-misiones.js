
// 1. Tablon de anuncios (Para las misiones legales disponibles)
let misiones = ['Robo de datos', 'Escolta', 'Infiltracion'];

// 2. Calcular recompensa (En base a l bono y la dificultad se calcula el valor de la recompensa)
function calcularRecompensa(dificultad, bono = 500){

    const MULTIPLICADOR_DIFICULTAD =  1000;
    let valorTotal = (dificultad *MULTIPLICADOR_DIFICULTAD) + bono;
    return valorTotal;

};

// 3. Simulador de peligro
function simuladorDePeligro(){
    // Se inicializan la cantidad de intentos
    let intentos = 0;

    //  Se crea una variable para crear un numero aleatorio
    let numero = 0;

    do{
        //Se le asigna un numero aleatorio de 1 a 20 con Math.Floor y Math Random
        numero = Math.floor(Math.random() * 20);
        //Se indican la cantidad de intentos
        console.log(`Intento de hackeo ${intentos}`);
        intentos++;

    }while(intentos > 8 || intentos == 5){

    }

    console.log(`Intentos de hackeo del sistema: ${intentos}`);
};

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



