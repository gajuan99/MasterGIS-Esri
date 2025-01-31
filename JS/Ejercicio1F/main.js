
const notas = [6,7,2,9,3,4,5,8,2];

let sumafor = 0  // Suma notas que inicia en 0

for (let i = 0; i < notas.length; i++)//Crear contador y usar la variable del contador como condición.
     {sumafor += notas[i]} //iterar sobre notas e ir sumando las notas con su posición.


console.log(sumafor)


//FOR OF

let sumaForOF = 0 //nueva variable

for (let nota of notas){
    sumaForOF += nota
}

console.log(sumaForOF)