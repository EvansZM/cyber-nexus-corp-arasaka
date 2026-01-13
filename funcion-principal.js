// Se agrega para comprobar si el mercenario esta en la lista de mercenarios
function existeMercenario(nombre) {
    for (let i = 0; i < listaMercenarios.length; i++) {
        if (listaMercenarios[i].nombre == nombre) {
            return true;
        }
    }
    return false;
}


function ejecutarContrato(nombreMercenario, nombreMision, dificultad) {

   
    function validarAcceso() {
        // Si el nivel de seguridad de la faccion es menor que la dificultad, no se da acceso
        return nivelSeguridad > dificultad; //Booleano true o false 
    };

};


/*  // Ejecutamos el punto de inicio en 3 segundos 
    let numero = 3;                      // Arrancamos en 3

    const intervalo = setInterval(() => {
        console.log(numero);            // Imprime el número actual
        numero--;                       // Bajamos 1

        if (numero === 0) {             // Cuando ya imprimimos el 1…
            setTimeout(() => {
                console.log("🚀 ¡YA!");
            }, 1000);                   // Espera 1 segundo más para el YA
            clearInterval(intervalo);   // Detenemos el intervalo
        }
    }, 1000);                           // Cada 1 segundo


    console.log('Agregando mercenarios');

    agregarMercenario('Evans','CQC');
    agregarMercenario('Dayne','Versatilidad');
    agregarMercenario('Javiera','Super Oido');

 */