import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  //fetching data with async await functioality
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json();
      setMovies(data.results)
      /* setIsLoading(false) */
    }
    catch (error) {
      setError(error.message);
      /*  setIsLoading(false) */
    }

    setIsLoading(false)

  }

  /*   function fetchMoviesHandler() {
      fetch('https://swapi.dev/api/films')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setMovies(data.results)
        })
    } */

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found No Movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Movies Are Loading...</p>}

      </section>
    </React.Fragment>
  );
}

export default App;
