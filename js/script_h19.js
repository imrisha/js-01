'use strict';


let personalMovieDB ={
    count: 0, // сюда передается ответ на первый вопрос
    movies :{}, // - в это свойство поместить пустой объект
    actors : {}, //тоже поместить пустой объект
    genres : [], // сюда поместить пустой массив
    privat : false, // в это свойство поместить boolean(логическое) значение false
    start: function () {
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt ('Не ввели! Сколько фильмов?', '');
        }
     },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' &4& b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done film');
            } else {
                console.log('error film');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка при вводе количества");
        }
    },
    showMyDB:function  (hidden) {
        if (!hidden ) console.log(personalMovieDB)
    },
    toggleVisibleMyDB: function() {
        (this.privat) ? this.privat = false : this.privat = true;
         return this.privat
     },
    writeYourGenres: function (n) {
        
        for (let i = 0; i < n; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (a != null  && a != '' ) {
                personalMovieDB.genres[i] = a;
            } else {
                console.log('error Genres ');
                i--;
            }        
        }
        personalMovieDB.genres.forEach((member, i) => {
                console.log(`Любимый жанр ${i+1} - это ${member} `)
            });
    } 
 
    };
    

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel(); 
personalMovieDB.writeYourGenres (3);
personalMovieDB.showMyDB (personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB (personalMovieDB.privat);

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
 

 

