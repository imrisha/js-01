"use strict"; // Вначале!!! (док или ф-ии) использов нового стиля, строго, объявл обязательно
/* 
console.log (1)
let num = 5; //новый стиль
var numb = 7; // старый стиль
const leftBorderWith = 1;
num = 16;
console.log(num);

const obj =  {
    name: 'John',
    age: 25,
    isMarried: false,
    a: 50
}
obj.a = 10; // так можно менять конс

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);

let arr = [1, 2, 3]
// 13
let storeName = 'QQ';
let storeDescription = {
    budget: 1000,
    employees: ['An', 'Ed', 'Tom'],
    products: {
        rr: 45,
        dd: 65,
        open: true 
    }
} 
console.log(storeDescription);*/
/* alert('helloQQQ!!!');
const result = confirm('Qqqq???'); //вовроc y/n
console.log (result);
const answer = +prompt('вам есть 18?', '18') ; // с ответом
console.log (answer);
console.log (typeof(answer)); */

/* const answers = [];
answers[0] = prompt('возраст?', '18') ; // с ответом
answers[1] = prompt('имя?', '') ; // с ответом
answers[2] = prompt('фамилия', '') ; // с ответом

document.write(answers); // заменяет весь текст на сайте можно писать прям  */
const category = "toys";
console.log ('https://qqq.com/' + category + '/' + 4) //без интерполяции
console.log (`https://qqq.com/${category}/4`) //интерполяции - косые кавычки, фиг скобки и ;