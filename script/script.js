"use strict";


// const arr = [];
// arr[0] = prompt('Ваше имя', '');
// arr[1] = prompt('Ваша фамилия', '');
// arr[2] = +prompt('Ваш возраст', '');
// document.write(arr);
// console.log(typeof arr[2]);

// const category = 'video';
// const obg = 5;
// console.log(`https://someUrl.com/${category}/${obg}`);

let numberOfFilm;

function start() {
    numberOfFilm = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilm == '' || numberOfFilm === null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMouvieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Какой последний фильм посмотрели?', ''),
       b = +prompt('Как его оцените?', '');
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
       personalMouvieDB.movies[a] = b;
       console.log('Done');
   } else {console.log('Error');
   i--;
   }}}

rememberMyFilm();


function detectPersonalLevel() {
    if (numberOfFilm < 10) {
        console.log('Слишком мало фильмов');
    } else if (10 <= numberOfFilm < 30) {
        console.log('Вы классический зритель');
    } else if (30 <= numberOfFilm < 100) {
        console.log('Вы заядлый киноман');
    } else {console.log('ERROR');}
}

detectPersonalLevel();

function showMyDB() {
    if (personalMouvieDB.privat === false) {
        console.log(personalMouvieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMouvieDB.genres[i -1] = genre;
    }
}

writeYourGenres();

console.log(personalMouvieDB);
