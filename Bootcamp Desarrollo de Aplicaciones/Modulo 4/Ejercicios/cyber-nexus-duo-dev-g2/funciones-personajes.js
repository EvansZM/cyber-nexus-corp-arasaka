
const listaMercenarios = [];
let nivelSeguridad = 5;

// Función de registro de mercenario
function registrarMercenario(nombre, habilidad) {
  if (!nombre || !habilidad) {
    return 'Error: datos incompletos';
  }

  const mercenario = {
    nombre: nombre,
    habilidad: habilidad
  };

  listaMercenarios.push(mercenario);

  return `MERCENARIO ${nombre.toUpperCase()} REGISTRADO CON ÉXITO`;
}

// Consulta del equipo usando ciclo for
function consultarEquipo() {
  if (listaMercenarios.length === 0) {
    return 'No hay mercenarios en la facción.';
  }

  let salida = 'Equipo de la facción:\n';

  for (let i = 0; i < listaMercenarios.length; i++) {
    salida += `${i + 1}. ${listaMercenarios[i].nombre} - ${listaMercenarios[i].habilidad}\n`;
  }

  return salida;
}

// Verificación de rango usando ciclo while + if-else
function verificarRango(nombre) {
  let i = 0;
  let encontrado = false;

  while (i < listaMercenarios.length && !encontrado) {
    if (listaMercenarios[i].nombre === nombre) {
      encontrado = true;
    } else {
      i++;
    }
  }

  if (encontrado) {
    if (nivelSeguridad >= 4) {
      return `${nombre.toUpperCase()} TIENE RANGO ALTO`;
    } else {
      return `${nombre.toUpperCase()} TIENE RANGO BAJO`;
    }
  } else {
    return `${nombre.toUpperCase()} NO ESTÁ REGISTRADO EN LA FACCIÓN`;
  }
}



//opcional para uso del registro de mercenrario con html
//boton para registro 
document.getElementById('btnRegistrar').addEventListener('click', () => { 
    const nombre = document.getElementById('nombre').value; 
    const habilidad = document.getElementById('habilidad').value; 
    const mensaje = registrarMercenario(nombre, habilidad); 
    
    // Mostrar en consola 
    console.log("Mercenario registrado", mensaje); 

    // Mostrar en pantalla (si quieres) 
    let log = document.querySelector('.log'); 
        if (!log) { 
            log = document.createElement('div'); 
            log.className = 'log'; 
            document.querySelector('.panel').appendChild(log); 
        } 
        log.textContent = mensaje; 
    }); 