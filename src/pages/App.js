import '../App.css'
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { LeaveReview } from './Form';

function MovieList(props) {
  return (
    <>
    <h2>Movie List</h2>
    <div className="movielist">
      {
        props.fav_movies.map(movie => <li> <img className="photo" src={movie.image} /><br />Title: {movie.title}
        <br />Release Date: {movie.release_date}<br />Rating: {movie.rating}/5
        </li>)
      }
    </div>
    </>
  )
}

function App() {

  let [movies, setMovies] = useState(null);

  useEffect( () => {
    fetch("../movies.json")
    .then( response => response.json() )
    .then( setMovies )
    .catch( e => console.log(e.message))
  }, [])

  if( movies == null) {
    return <h1>Loading...</h1>;
  }
  console.log(movies);
  
  return (
    <Routes>
      <Route path="/" element={<MovieList fav_movies={(movies)} />} />
      <Route path="/review" element={<LeaveReview movies={movies} setMovies={setMovies} />} />
    </Routes>
  )

}

export default App;