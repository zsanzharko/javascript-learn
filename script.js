let filmName;
let filmRate;
let numberOfFilms = +prompt("Сколько вы посмотрели фильмов?", '0');
const personalMovie = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

start();
detectPersonalLevel();
rememberMyFilm();
showMyDB(personalMovie.privat)

function start() {
    while (numberOfFilms === ''|| numberOfFilms == null) {
        numberOfFilms = +prompt("Сколько вы посмотрели фильмов?", '0');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovie)
    }
}

function writeYourGenres() {
    for (let number = 1; number <= 3; number++) {
        personalMovie.genres[number - 1] = +prompt(`Ваш любимый жанр под номером ${number}`);
    }
}
function detectPersonalLevel() {
    if (numberOfFilms > 0 && numberOfFilms < 10) {
        alert("Просмотрено довольно мало...");
    } else if (numberOfFilms < 30) {
        alert("Вы классичесикй зритель...");
    } else alert("Вы киноман :D")
}

function rememberMyFilm() {
    filmName = prompt("Один из последний просмотренных фильмов?", "");
    while (filmName.length === 0 || filmName.length >= 50) {
        alert("Error input");
        filmName = prompt("Один из последний просмотренных фильмов?", "");
    }
    filmRate = +prompt("На сколько оцените его?", "");
    while (filmRate.length === 0 || filmRate.length >= 50) {
        alert("Error input");
        filmRate = prompt("Один из последний просмотренных фильмов?", "");
    }
    personalMovie.movie[filmName] = filmRate;
}