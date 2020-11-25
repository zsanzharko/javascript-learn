let filmName;
let filmRate;
const personalMovieDB = {
    count: null,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько вы посмотрели фильмов?", '0');

        while (personalMovieDB.count === '' || personalMovieDB.count == null) {
            personalMovieDB.count = +prompt("Сколько вы посмотрели фильмов?", '0');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало...");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классичесикй зритель...");
        } else alert("Вы киноман :D")
    },
    rememberMyFilm: function () {
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
        personalMovieDB.movie[filmName] = filmRate;
    },
    writeYourGenres: function () {
        for (let number = 1; number <= 3; number++) {
            let genre = prompt(`Ваш любимый жанр под номером ${number}`);
            if (genre === '' || genre === null) {
                console.log("Вы ввели не короректно");
                number--;
            } else {
                personalMovieDB.genres[number - 1] = prompt(`Ваш любимый жанр под номером ${number}`);
            }
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else personalMovieDB.private = true;
    },
    showMyDB: function () {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    }
};