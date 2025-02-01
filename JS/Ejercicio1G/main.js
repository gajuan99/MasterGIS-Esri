const numeros = [1,2,3,4,5]

function sumaNumerosPares(numeros){
    let suma = 0
    for (const numero of numeros){
        if(numero % 2 == 0){
            suma += numero
        }

    }
    return suma
}

console.log('Ejercicio 1G = ', sumaNumerosPares(numeros))