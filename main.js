'use strict';

//QUERYSELECTOR
//Select
const chooseRace = document.querySelector('.js-choose-race');
//Botón
const btn = document.querySelector('.js-btn');
//Resultado
const result = document.querySelector('.js-result');

//VARIABLES


//FUNCIONES
//Función para generar un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//ADDEVENTLISTENER
//Llamada al botón
btn.addEventListener("click", (event) =>{
    event.preventDefault();
});

//LLAMADAS A LAS FUNCIONES