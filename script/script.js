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

const numberOfFilm = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMouvieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой последний фильм посмотрели?', ''),
    b = prompt('Какой последний фильм посмотрели?', ''),
    c = +prompt('Как его оцените?', ''),
    d = +prompt('Как его оцените?', '');

personalMouvieDB.movies[a] = c;
personalMouvieDB.movies[b] = d;

console.log(personalMouvieDB);