'use strict';
let numberOfFilms;
 
let personalMovieDB ={
    count: numberOfFilms, // сюда передается ответ на первый вопрос
    movies :{}, // - в это свойство поместить пустой объект
    actors : {}, //тоже поместить пустой объект
    genres : [], // сюда поместить пустой массив
    privat : false // в это свойство поместить boolean(логическое) значение false
    };

function start() {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ('Не ввели! Сколько фильмов?', '');
    }

   }
start();
 
 let movy = "www", 
     mark, ok, len;
len = movy.length;

function rememberMyFilms1(){

    for (let i = 0; i< numberOfFilms; i++){
        movy = prompt ('Один из последних просмотренных фильмов?', '');
        ok=false;
        while (!ok) 
            if (!movy) movy = prompt ('Не ввели! Введите фильм?', '')
            else {
                len = movy.length;
                if (len == 0)  movy = prompt ('Не ввели! Введите фильм?', '')
                    else {
                        if (len >50)  movy = prompt ('Too long! Введите фильм?', '') 
                        else ok=true
                    }        
                } 
        mark = prompt ('На сколько оцените его?', ''); 
        personalMovieDB.movies[movy] = mark;
    }
}



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden ) console.log(personalMovieDB)
}


function writeYourGenres (n) {
    
    for (let i = 0; i < n; i++) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');;
    }
}
 
writeYourGenres (3);
showMyDB (personalMovieDB.privat);

 

 

