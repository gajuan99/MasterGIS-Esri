// //Número de enlaces en la página web

const enlaces = document.getElementsByTagName("a");

console.log("Número de enlaces es: ", enlaces.length);

// Link al que apunta el penúltimo enlace de la página web

const penultimoEnlace = enlaces[enlaces.length - 2].href;

console.log(penultimoEnlace);

//Número de links que hay en el 3er párrafo

const tercerParrafo = document.getElementById("third-paragraph");
const numeroEnlacesTercerParrafo =
  tercerParrafo.getElementsByTagName("a").length;

console.log(numeroEnlacesTercerParrafo);

//Printear resultados al final de la página con innerHTML y creando un nodo

const parrafoResultados = document.createElement("p");
const contenidoParrafoResultados = document.createTextNode(
  `El número de enlaces en la página es ${enlaces.length}. El link al que apunta el penúltimo es: ${penultimoEnlace}, y el número de enlaces del último párrafo es ${numeroEnlacesTercerParrafo}`
);

parrafoResultados.appendChild(contenidoParrafoResultados);
document.body.appendChild(parrafoResultados);
