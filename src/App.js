import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    setMovies(data.results)
    setIsLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Movies Are Loading...</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;
