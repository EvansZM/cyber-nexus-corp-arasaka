// runner.js
// Pruebas con misiones fáciles y difíciles

window.addEventListener("DOMContentLoaded", () => {

  // Subimos el nivel de seguridad de la facción
  nivelSeguridad = 5;
  console.log("Nivel de seguridad actual:", nivelSeguridad);

  // Registramos mercenarios
  console.log(registrarMercenario("Evans", "CQC"));
  console.log(registrarMercenario("Dayne", "Versatilidad"));
  console.log(registrarMercenario("Javiera", "Súper Oído"));

  // Mostramos el equipo
  console.log(consultarEquipo());

  // Mostramos misiones disponibles
  console.log("Misiones disponibles:", misiones);

  // ---------- Misiones de dificultad baja (deberían pasar) ----------
  console.log("=== PRUEBAS BAJAS ===");
  ejecutarContrato("Evans", "Escolta", 2);
  ejecutarContrato("Dayne", "Robo de datos", 3);

  // ---------- Misiones de dificultad alta (una pasa, otra falla) ----------
  console.log("=== PRUEBAS ALTAS ===");
  ejecutarContrato("Javiera", "Infiltracion", 5); // pasa (nivel 5)

  ejecutarContrato("Evans", "Robo de datos", 6);  // falla (nivel 5 no alcanza)

  // ---------- Pruebas de errores (opcionales) ----------
  console.log("=== PRUEBAS ERROR ===");
  ejecutarContrato("Fantasma", "Escolta", 2); // mercenario no existe
  ejecutarContrato("Evans", "Asalto al Banco Lunar", 2); // misión no existe

});
