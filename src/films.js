const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directors = array.map((movies) => movies.director);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let arrayPelicules = array.filter( directors =>  director == directors.director);
  return arrayPelicules;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  let arrayPelicules = array.filter( directors => director == directors.director);
  let score = arrayPelicules.reduce((valorAnterior, valorActual) => valorAnterior + valorActual.score, 0);
  let mitjaPelicules = score / arrayPelicules.length;

  return mitjaPelicules;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  const arrayCopia = [...array];
  let arrayOrdenado = arrayCopia.sort((a,b) => a.title.localeCompare(b.title));
  let peliculasOrdenadas = arrayOrdenado.map((movies) => movies.title);
  return peliculasOrdenadas.slice(0, 20);
  
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  
  let arrayCopia = [...array];
  let arrayAnyosOrdenados = arrayCopia.sort(function (a,b) {
    if (a.year == b.year) {
      if (a.title === b.title) return 0;
        return (a.title < b.title) ? -1 : 1;}
        else {
          return (a.year < b.year) ? -1 : 1;
        }
        });
        return arrayAnyosOrdenados;
};

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genero) {
 
  let arrayPelicules = array.filter( a => genero == a.genre && a.score != false);
  let score = arrayPelicules.reduce((valorAnterior, valorActual) => valorAnterior + valorActual.score, 0);
  let mitjaPelicules = score / arrayPelicules.length;

  return parseFloat(mitjaPelicules.toFixed(2));

}

// Exercise 7: Modify the duration of movies to minutes

function hoursToMinutes(array) {
  
  let copiaArray = [...array];
  let arrayHorasMin = copiaArray.map(a => ((a.duration).slice(0,1) * 60))
  let arrayOnlyMin = copiaArray.map(a => (parseInt((a.duration).slice(2))));

  for (let x=0; x < arrayOnlyMin.length ; x++) {
    if (isNaN(arrayOnlyMin[x]))
    arrayOnlyMin[x] = 0;
}

  let totalMin = arrayHorasMin.map( (item, ix) => item + Number(arrayOnlyMin[ix]));

  for (let x=0; x < copiaArray.length ; x++) {
      copiaArray[x].duration = (totalMin[x]);
  }
 
  return copiaArray;  
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
