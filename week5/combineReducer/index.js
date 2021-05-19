const store = require('./redux/index.js');
const {addMovie, removeMovie, getMovies} = require('./redux/movies.js');
const {addTvShow, removeTvShow, getShows} = require('./redux/tvShows.js');

console.log('Adding: I Orgin (Movie)');
store.dispatch(addMovie('I Orgin'));

console.log('Removing: Another Earth (Movie)')
store.dispatch(removeMovie('Another Earth'));

console.log('Adding: The OA (TV Show)');
store.dispatch(addTvShow('The OA'));

console.log('Removing: Mr Queen (TV Show)');
store.dispatch(removeTvShow('Mr Queen'));

console.log('Fetching ALL shows and movies...');
store.dispatch(getShows());
store.dispatch(getMovies());