const numberOfFilms = +prompt("Сколько вы посмотрели фильмов?", '0');

const personalMovie = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName = prompt("Один из последний просмотренных фильмов?", "");
let filmRate = +prompt("На сколько оцените его?", "");

personalMovie.movie[filmName] = filmRate;

console.log(personalMovie);