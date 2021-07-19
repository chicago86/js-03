;(function () {
'use strict';

let playList = [
    'I Did It My Way',
    'Respect',
    'Vovchuchtsya',
    'Imagine',
    'Born to Run',
    'Louie Louie',
    'Maybellene'
 ];
 let playListElement = document.querySelector('.ba-playlist')
 let list = '';
 for (let i = 0; i < playList.length; i++) {
     list += '<li>' + playList[i] + '</li>';
    //  console.log(list);
 }
 playListElement.innerHTML = list
//  playList.forEach(song => 
//     {playListElement.innerHTML += '<li>' + song + '</li>'});


let salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250,
    "Kate": 700
    };
let sum = 0

for (const name in salaries) {
    sum =  salaries[name]
}
console.log(sum);
let big = 0
let name = ''
for (let key in salaries){
    if(salaries[key] > big){
        big = salaries[key]
        name = key
    }
}
console.log(name);


const quiz = [
    ['Сколько областей в Украине', 27],
    ['Сколько население в Украине', 48000000],
    ['Число независимости Украины', 24],
    // ['Столица Украины', 'Киев'],
    // ['Президент Украины', 'Вакарчук'],
    // ['Валюта Украины', 'UAH']
];

let quizList = document.querySelector('.ba-quiz')

let correctNum = 0;
let wrongNum = 0

quiz.forEach(question => {
    let answer = prompt(question[0])
    
    let vernoNeverno
    if(answer == question[1]){
    vernoNeverno = 'Верно'
    correctNum++ 
    }
    else{
        vernoNeverno = 'Неверно'
        wrongNum++
    }
    quizList.innerHTML += '<li>' + question[0] + ' - ' + vernoNeverno + '</li>'
    
});
console.log(correctNum, wrongNum);


let styles = ["Джаз", "Блюз"]
console.log(styles);

styles.push('Рок-н-ролл')
console.log(styles);

styles[styles.length - 2] = 'Классика'
console.log(styles);

alert(styles.shift())
console.log(styles);
styles.unshift('Рэп', 'Регги')
console.log(styles);


let number = prompt('Enter number')
console.log(number);
let array = [];

while (number !== null && parseInt(number) !== NaN){
    number = prompt('Enter number')
    array.push(+number)

} 
console.log(array);

})();
