const listaMercenarios = [];
let nivelSeguridad = 3;

/** Agregar mercenario en Araska */
function agregarMercenario(nombre, habilidad) {
    const nombreVerificado = String(nombre || '').trim();
    const habilidadVerificada = String(habilidad || '').trim();

    if (!nombreVerificado || !habilidadVerificada) {
        return 'Error: datos incompletos para Araska.';
    }

    const mercenario = {
        nombre: nombreVerificado,
        habilidad: habilidadVerificada
    };
    listaMercenarios.push(mercenario);
    return `Araska: ${nombreVerificado.toUpperCase()} registrado con habilidad de ${habilidadVerificada}.`;
}

/** Consulta de equipo segun los registro de los mercenarios */

function consultarEquipo() {
    if (listaMercenarios.length == 0) {
        return 'No hay mercenarios registrados en el sistema.';
    }
    let salida = `Araska - Equipo registrado (${listaMercenarios.length}):\n`;
    for (let i = 0; i < listaMercenarios.length; i++) {
        const m = listaMercenarios[i];
        salida += `${i + 1}. ${m.nombre} - Habilidad: ${m.habilidad}\n`;
    }
    return salida.trim();
}

/** Verificar rango de acceso de mercenario */
function verificarRango(nombre) {
    const objetivo = String(nombre || '').trim().toLowerCase();
    let i = 0;
    let encontrado = false;

    while (i < listaMercenarios.length && !encontrado) {
        const m = listaMercenarios[i];
        if (m.nombre.toLowerCase() == objetivo) {
            encontrado = true;
        } else {
            i++;
        }
    }
    if (encontrado) {
        if (nivelSeguridad >= 4) {
            return `Araska: ${nombre.toUpperCase()} tiene rango ALTO de acceso.`;
        } else {
            return `Araska: ${nombre.toUpperCase()} tiene rango BAJO de acceso.`;
        }
    } 
    else {    
        return `Araska: ${nombre.toUpperCase()} no está registrado en el sistema.`;
    }
}




