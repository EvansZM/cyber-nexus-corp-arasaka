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
        return nivelSeguridad >= dificultad; //Booleano true o false 
    };

    //Las siguientes tres validan que exista el mercenario que la mision este disponible y que tenga el nivel adecuado para la mision 
    if (!existeMercenario(nombreMercenario)) {
        console.log("Sistema Corporación Arasaka: Mercenario no registrado.");
        return;
    }

    if (!validarMision(nombreMision)) {
        console.log("Sistema Corporación Arasaka: Misión no disponible.");
        return;
    }

    if (!validarAcceso()) {
        console.log("Sistema Corporación Arasaka: Nivel de seguridad insuficiente.");
        return;
    }
 
    //Si se cumplen las tres validaciones entonces se ejecuta la ultima parte de la funcion
    //Se almacena la recompensa en una variable para ser mostrada despues
    let recompensa = calcularRecompensa(dificultad);

    //Se muestra la info del mercenario y la mision 
    console.log("===== OPERACIÓN ARASKA =====");
    console.log("Mercenario: " + nombreMercenario);
    console.log("Misión: " + nombreMision);
    console.log("Recompensa: " + recompensa);

    //Se ejecuta el bloque de intentos de hackeo
    simuladorDePeligro();
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