
# 🦾 Actividad Práctica: Cyber-Nexus Duo-Dev

## 🎯 Objetivo

Desarrollar un sistema de gestión de personajes y misiones cyberpunk. Aplicarán funciones, arreglos, ciclos, condicionales y manejo de ámbitos (scope). Al final, deberán integrar ambos trabajos en un único archivo funcional.

---

## 🛠️ Instrucciones de Colaboración (Git Workflow)

1. **Repositorio**: Creen un repositorio e inicialicen una rama llamada `main`.
2. **Ramas Separadas**:
* **Persona A** trabajará en una rama llamada `feature-personaje`.
* **Persona B** trabajará en una rama llamada `feature-misiones`.


3. **Integración**: Una vez terminadas sus partes, realizarán un *merge* de ambas ramas a la rama `main` para probar el sistema completo.

---

## 📋 Instrucciones Paso a Paso

### 1. Elemento Personalizable

Antes de empezar, acuerden la **"Facción"** de su mundo (ej. "Cyber-Ninjas", "Hackers del Vacío", "Corporación Arasaka"). Todas las funciones y mensajes deben usar este concepto.

---

### 👤 Persona A: Arquitecto de Personajes (Rama: `feature-personaje`)

Tu objetivo es gestionar quiénes son los mercenarios de la facción.

1. 
**Base de Datos**: Crea un **arreglo global** llamado `listaMercenarios` y una **variable global** para el `nivelSeguridad` de la facción (Número).


2. **Función de Registro**: Crea una función que reciba el nombre y la habilidad especial del mercenario.
* Debe agregar un objeto o string al arreglo.
* Debe retornar un mensaje de éxito que incluya el nombre en mayúsculas.




3. 
**Consulta de Equipo**: Crea una función que use un **ciclo `for**` para imprimir a todos los mercenarios registrados.


4. **Verificación de Rango**: Crea una función que reciba un nombre y verifique si el mercenario existe en el arreglo usando un **ciclo `while**` y **condicionales `if-else**`.

---

### 🛰️ Persona B: Maestro de Misiones (Rama: `feature-misiones`)

Tu objetivo es gestionar los contratos y el peligro del entorno.

1. **Tablón de Anuncios**: Crea un **arreglo global** con 3 misiones iniciales (ej: "Robo de datos", "Escolta").
2. 
**Cálculo de Recompensa**: Crea una función que reciba la `dificultad` (Número) y un `bono` con un **valor por defecto** de 500.


* Debe calcular la recompensa multiplicando dificultad por 1000 y sumando el bono.
* Utiliza una **variable local** para el cálculo intermedio.


* 
**Retorna** el valor total.




3. **Simulador de Peligro**: Crea una función que use un **ciclo `do-while**` para simular intentos de hackeo. Debe detenerse cuando un número aleatorio sea mayor a 8 o se alcancen 5 intentos.
4. **Validación de Misión**: Crea una función que reciba el nombre de una misión y use un **`if-else`** para determinar si es legal o ilegal según una lista interna.

---

### 🔗 Integración Final (Rama: `main`)

Una vez que ambos códigos estén juntos, deben crear la **Función Maestra**:

1. 
**Función `ejecutarContrato**`: Esta función debe **anidar** una función interna llamada `validarAcceso`.


* `validarAcceso` debe revisar si el mercenario (de Persona A) tiene el nivel suficiente para la misión (de Persona B).
* La función principal debe invocar las funciones de ambos integrantes para mostrar el resumen de la operación.



---

