'use strict';

//QUERYSELECTOR
//Select
const chooseRace = document.querySelector('.js-choose-race');
//Botón Batalla
const btn = document.querySelector('.js-btn');
//Resultado
const result = document.querySelector('.js-result');
//Botón reset
const resetBtn = document.querySelector('.js-reset-btn');

// //Array Bad guys
// const badGuysArray = [
//     {name: 'Sureños malos', value:2},
//     {name: 'Orcos', value:2},
//     {name: 'Goblins', value:2},
//     {name: 'Huargos', value:3},
//     {name: 'Trolls', value:5},
// ];

//Párrafos contadores buenos/malos
const goodCounter = document.querySelector('.js-good-counter');
const badCounter = document.querySelector('.js-bad-counter');

//Número mayor de jugadas (10)
const totalPlays = 9;

let useOption = '';
let selectedRace = '';
let randomBadGuy = 0;
let textResult = '';

//Contadores
let counterGoodRaces = 0;
let counterBadRaces = 0;
let counterPlays = 0;

//FUNCIONES

//Función para recoger el valor del select
function getUserRace() {
    useOption = chooseRace.value;
    return useOption;
};

//Función para generar un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

//Función para generar el valor de la raza mala
function getVillainRace() {
 
    let randomNumber = 0;

    randomNumber = getRandomNumber(5);
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
        randomBadGuy = 2;
    }else if (randomNumber === 4) {
        randomBadGuy = 3;
    }else {
        randomBadGuy = 5;
    }
    return randomBadGuy;
};


//Función para comparar valores de razas buenas y malas
function getResult() {

    if (counterPlays >= totalPlays) {
        resetBtn.classList.toggle('hidden');
        btn.classList.toggle('hidden');
    }
    randomBadGuy = getVillainRace();
    if (useOption === '') {
        alert('Por favor seleccione una opción');
        }else{
        useOption = getUserRace();
    }

    if (useOption>randomBadGuy) {
        textResult = '¡Ha ganado el Ejército del Bien! Enhorabuena.'
        counterGoodRaces++;
    }else if (useOption<randomBadGuy) {
        textResult = '¡Ha ganado el Ejército del Mal! Vuelve a intentarlo.'
        counterBadRaces++;
    }else {
        textResult = 'Empate.'
    }
    result.innerHTML = textResult;
    counterPlays++;
    goodCounter.innerHTML = counterGoodRaces;
    badCounter.innerHTML = counterBadRaces;

};

//Función reset
function handleReset(event) {
    event.preventDefault();
    resetBtn.classList.toggle('hidden');
    btn.classList.toggle('hidden');
    counterGoodRaces = 0;
    counterBadRaces = 0;
    counterPlays = 0;
    goodCounter.innerHTML = counterGoodRaces;
    badCounter.innerHTML = counterBadRaces;
};


//ADDEVENTLISTENER

//Llamar al select
chooseRace.addEventListener("click", getUserRace);

//Llamada al botón Batalla
btn.addEventListener("click", (event) =>{
    event.preventDefault();
    getResult();
});

//Llamar al botón reset
resetBtn.addEventListener('click', handleReset);