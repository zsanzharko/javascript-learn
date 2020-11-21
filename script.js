let filmName;
let filmRate;
let numberOfFilms = +prompt("Сколько вы посмотрели фильмов?", '0');

while (numberOfFilms <= 0) {
    alert("Error input");
    numberOfFilms = +prompt("Сколько вы посмотрели фильмов?", '0');
    if (numberOfFilms > 0) {
        break;
    }
}
if (numberOfFilms > 0 && numberOfFilms < 10) {
    alert("Просмотрено довольно мало...");
} else if (numberOfFilms < 30) {
    alert("Вы классичесикй зритель...");
} else alert("Вы киноман :D")

const personalMovie = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

filmName = prompt("Один из последний просмотренных фильмов?", "");
while (filmName.length === 0 || filmName.length >= 50){
    alert("Error input");
    filmName = prompt("Один из последний просмотренных фильмов?", "");
}
filmRate = +prompt("На сколько оцените его?", "");
while (filmRate.length === 0 || filmRate.length >= 50){
    alert("Error input");
    filmRate = prompt("Один из последний просмотренных фильмов?", "");
}
personalMovie.movie[filmName] = filmRate;

console.log(personalMovie);