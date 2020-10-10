const numberOfFilms = +prompt('Колько фильмов вы посмотрели?', '0');

const personMoiveaDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов', ''),
    b = prompt('Оценка фильму', ''),
    d = prompt('Один из просмотренных фильмов', ''),
    f = prompt('Оценка фильму', '');

    personMoiveaDB.movies[a] = b;
    personMoiveaDB.movies[d] = f;

    console.log(personMoiveaDB);