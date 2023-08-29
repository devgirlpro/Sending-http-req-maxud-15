import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  /*   function fetchMoviesHandler() {
      fetch('https://swapi.dev/api/films')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setMovies(data.results)
        })
    } */

  //fetching data with async await functioality
  async function fetchMoviesHandler() {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    setMovies(data.results)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
