// 1- getSeniales
function getSeniales() {
    let seniales = [];
    while (true) {
      let senial = parseInt(prompt("Ingresa una señal (o un número aleatorio < 360 para salir):"));
      if (senial < 0 || (senial >= 0 && senial < 360)) {
        if (senial < 0) break;
        seniales.push(senial);
      }
    }
    return seniales;
  }
  
  // 2- obtenerCuadrante
  function obtenerCuadrante(seniales) {
    let cuadrantes = "";
    for (let senial of seniales) {
      let normalizada = senial % 360;
      if (normalizada < 90 || normalizada >= 270) cuadrantes += "N";
      else cuadrantes += "S";
      if ((normalizada >= 0 && normalizada < 90) || (normalizada >= 180 && normalizada < 270)) cuadrantes += "E";
      else cuadrantes += "O";
    }
    return cuadrantes;
  }
  
  // 3- contarCiclos
  function contarCiclos(cuadrantes) {
    let ciclos = 0;
    let secuencia = cuadrantes.join("");
    for (let i = 0; i < secuencia.length - 3; i++) {
      if (secuencia.substring(i, i + 4) === "NESO" || secuencia.substring(i, i + 4) === "OSEN") {
        ciclos++;
      }
    }
    return ciclos;
  }
  
  // 4- calcularPorcentaje
  function calcularPorcentaje(cuadrantes, cuadrante) {
    let ocurrencias = 0;
    for (let c of cuadrantes) {
      if (c === cuadrante) ocurrencias++;
    }
    return (ocurrencias / cuadrantes.length) * 100;
  }
  
 
  let seniales = getSeniales();
  let cuadrantes = obtenerCuadrante(seniales);
  console.log("Secuencia de cuadrantes:", cuadrantes);
  let ciclos = contarCiclos(cuadrantes);
  console.log("Cantidad de ciclos completos:", ciclos);
  console.log("Porcentaje de ocurrencia de cada cuadrante:");
  console.log("N:", calcularPorcentaje(cuadrantes, "N").toFixed(2) + "%");
  console.log("S:", calcularPorcentaje(cuadrantes, "S").toFixed(2) + "%");
  console.log("E:", calcularPorcentaje(cuadrantes, "E").toFixed(2) + "%");
  console.log("O:", calcularPorcentaje(cuadrantes, "O").toFixed(2) + "%");
  