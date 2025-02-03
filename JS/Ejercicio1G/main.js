// EJERCICIO 1G: SUMA DE LOS NÚMEROS PARES

const numeros = [1, 2, 3, 4, 5];

function sumaNumerosPares(numeros) {
  let suma = 0;
  for (const numero of numeros) {
    if (numero % 2 == 0) {
      suma += numero;
    }
  }
  return suma;
}

console.log("Ejercicio 1G - NumerosPares = ", sumaNumerosPares(numeros));

// EJERICIO 1G: ELIMINA LAS CONSONANTES

const cadena = "Hola Mundo";

function eliminarConsonantes(cadenaInput) {
  //función

  let vocales = ""; //variable con el resultado

  const cadenaArray = cadenaInput.toLowerCase().split(""); //crear array, pasar minus. y dividir array

  for (const letra of cadenaArray) {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      vocales += letra;
    }
  }

  return vocales;
}

console.log("Ejercicio 1G - Consonantes = ", eliminarConsonantes(cadena));

// EJERCICIO 1G: TEMPERATURA EN GRADOS FAHRENHEIT

function celsiusAFahrenheit(gradoCelsius) {
  return gradoCelsius * (9 / 5) + 32;
}

console.log("Ejercicio 1G - Grados: ", celsiusAFahrenheit(20));

//EJERCICIO 1G: PARES O IMPARES

function checkNumber(numero) {
  if (numero % 2 == 0) {
    return "Número Par";
  } else {
    return "Número Impar";
  }
}

// EJERCICIO 1G: MAYÚSUCLA O MINÚSCULA

const promptUsuario = prompt("Escribe la cadena a evaluar");

function mayusOMinus(cadenaDeTexto) {
  if (promptUsuario == promptUsuario.toUpperCase()) {
    return alert("La cadena está en mayúsculas");
  } else if (promptUsuario == promptUsuario.toLowerCase()) {
    return alert("La cadena está en minúsculas");
  } else {
    return alert("La cadena es una combinación de mayúsculas y minúsculas");
  }
}

mayusOMinus(promptUsuario);

//EJERCICIO 1G: TODO EN MAYÚSCULAS

// const topics = [
//   "JavaScript",
//   "Variables",
//   "funciones",
//   "condicionales",
//   "bucles",
// ];

// function invertirMayus(array){
//     const arrayMayus = array.map((topic)=> {
//         return topic.toUpperCase()
//     })

//     arrayMayus.reverse()
//     return arrayMayus
// }

// console.log('Ejercicio 1G - Mayúsculas y reverso: ', invertirMayus(topics))

// EJERCICIO 1G: SEPARA LOS PARES.

const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

function paresArray(arrayNumeros) {
  return arrayNumeros.filter((numero) => numero % 2 == 0);
}
console.log(
  "Ejercicio 1G - Filtro Array de Números Pares: ",
  paresArray(number)
);

//EJERCICIO 1G: CONCATENACIÓN DE MÉTODOS

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

function mesesLargosMayus(arrayMeses) {
  return arrayMeses
    .filter((mes) => mes.length > 7)
    .map((mes) => {
      return mes.toUpperCase();
    });
}

console.log('Ejercicio 1G: Meses mayus: ', mesesLargosMayus(meses))