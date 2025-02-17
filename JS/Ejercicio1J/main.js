
//Evento de alerta al hacer click en el botón

const botonGuardar = document.getElementById('botonGuardar')

botonGuardar.addEventListener('click', (evento)=>{
    alert('Mensaje guardado correctamente')
})

//Evento foco en input nombre

const inputNombre = document.getElementById('inputNombre')

inputNombre.addEventListener('focus', (evento)=>{
    inputNombre.style.backgroundColor = '#34ebba'
})

inputNombre.addEventListener('focusout', (evento)=>{
    inputNombre.style.backgroundColor = '#ffffff'
})

// Evento cambio de color en función de si es vocal o consonante

const inputLetra = document.getElementById('inputLetra')

inputLetra.addEventListener('keypress', vocalOConsonante)

const vocales = [97, 101, 105, 111, 117]

function vocalOConsonante(evento) {
    const letraPulsada = evento.keyCode
    if (vocales.indexOf(letraPulsada)=== -1){
        inputLetra.style.color= '#34ebba'
    } else {
        inputLetra.style.color= '#a8323e'
    }
}