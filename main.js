'use strict';

//QUERYSELECTOR
//Select
const chooseRace = document.querySelector('.js-choose-race');
//Botón
const btn = document.querySelector('.js-btn');
//Resultado
const result = document.querySelector('.js-result');

//Const razas buenas
const raceGood1 = document.querySelector('.race-good1');
const raceGood2 = document.querySelector('.race-good2');
const raceGood3 = document.querySelector('.race-good3');
const raceGood4 = document.querySelector('.race-good4');
const raceGood5 = document.querySelector('.race-good5');

//Const razas malvadas
const raceBad1 = 'Sureños malos'; //2
const raceBad2 = 'Orcos'; //2
const raceBad3 = 'Goblins'; //2
const raceBad4 = 'Huargos'; //3
const raceBad5 = 'Trolls'; //5

//FUNCIONES
//Función para generar un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};
//Función para comparar valores de razas buenas y malas
function getResult() {
    if{
        
    }
};

//ADDEVENTLISTENER
//Llamada al botón
btn.addEventListener("click", (event) =>{
    event.preventDefault();
});

//LLAMADAS A LAS FUNCIONES