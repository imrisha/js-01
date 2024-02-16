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
/* const category = "toys";
console.log ('https://qqq.com/' + category + '/' + 4) //без интерполяции
console.log (`https://qqq.com/${category}/4`) //интерполяции - косые кавычки, фиг скобки и ; */
// Место для первой задачи
function firstTask() {
    for (i = 2; i < 11; i+=2) {
        console.log(i);   
}

// Место для второй задачи

for (let i = 20; i > 9; i--) {
     console.log(i);
        if (i == 13) break
 }


 for (let i = 2; i < 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 1;

while (i < 16) {
     i++;
     if (i % 2 === 0) {
       continue;
     } else {
         console.log(i);
     }

}

const arrayOfNumbers = [];
for (i = 5; i < 11; i++) {
    arrayOfNumbers[i-5] = i;
    //;
};
console.log(arrayOfNumbers)

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 0; i < data.length ; i++) {
    result[i] = data[data.length - i - 1]
};

console.log (result);

// Пишем решение вот тут



function firstTask() {
    for ( i = 5; i < 11; i++) {
        console.log(i);
    }
}

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length ; i++) {
    console.log (typeof(data[i]))
    if (typeof(data[i])  == 'number') data[i] = 2*data[i];
    if (typeof(data[i])  == 'string') data[i] = data[i] + " - done";
}
console.log (data);

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 1; i <= lines ; i++) {
    for (let j=0; j<lines-i; j++) result+=' ';
    for (let j=1; j<2*i; j++) result+='*';
    result+='\n';
    console.log (`-----  ${i}  -----------`);
    console.log (result);
};
console.log (result);
}
// Место для третьей задачи
function getMathResult(b, n) {
    let s = b;
    if (typeof(n) == 'number' && n > 0 )
        for (let i = 2; i<= n; i++)      
          s = s + '---' + i * b;
    return s
}

console.log (getMathResult(5, 8));

// Место для первой задачи
function calculateVolumeAndArea(a) {
    let s;
    if (isNaN(a) || a <= 0 || !(Number.isInteger(a)))
        s = "При вычислении произошла ошибка"  
        else s = `Объем куба: ${a*a*a}, площадь всей поверхности: ${6*a*a}`;
    console.log(s);
    return s
}

// Место для второй задачи
function getCoupeNumber(n) {
     
       if (isNaN(n) || n < 0 || !(Number.isInteger(n))) return "Ошибка. Проверьте правильность введенного номера места"  
       if (n == 0 || n > 36)  return "Таких мест в вагоне не существует"  
         else {
                return Math.ceil(n/4)
                
            }
            
        }


        function getTimeFromMinutes(minutesTotal) {
            if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
                return "Ошибка, проверьте данные";
            }
        
            const hours = Math.floor(minutesTotal / 60);
            const minutes = minutesTotal % 60;
        
            let hoursStr = '';
        
            switch (hours) {
                case 0: 
                    hoursStr = 'часов';
                    break;
                case 1:
                    hoursStr = 'час';
                    break;
                case 2:
                case 3:
                case 4:
                    hoursStr = 'часа';
                    break;
                default:
                    hoursStr = 'часов';
            }
        
            return `Это ${hours} ${hoursStr} и ${minutes} минут`;
        }
        
        getTimeFromMinutes(180)
        
        function findMaxNumber(a, b ,c, d) {
            // Самое простое - это использовать Math.max :)
            // А оптимизировать такую проверку мы научимся совсем скоро
            if (typeof(a) !== 'number' ||
                typeof(b) !== 'number' ||
                typeof(c) !== 'number' ||
                typeof(d) !== 'number') {
                return 0;
            } else {
                return Math.max(a, b ,c, d);
            }
        }
        
        findMaxNumber(1, 5, 6.6, 10.5);
        findMaxNumber(1, 5, '6', '10');

        //////==================

function fib(n) {
    let s='',
    a = 1,
    b = 1, c;
    
    if (isNaN(n) || n <= 0 || !(Number.isInteger(n))) return s;
    if (n==1) s = s + 1;
    if (n>=2) s = '1 1';
    for (let i = 2; i < n; i++){
        
        c = a + b;
        s = s + ' ' + c;
        a = b;  b = c;
    }
    return s;
    
}
console.log(fib('kjkl'))        
