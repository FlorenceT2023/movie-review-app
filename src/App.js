import './App.css';
import { useState, useEffect, useReducer } from "react";
import { Routes, Route } from 'react-router-dom';
import { LeaveReview } from './Form';
import { Link, Outlet } from 'react-router-dom';


function MovieList(props) {
  return (
    <>
    <Link to="/review">Review</Link>
    <ul>
      {
        props.fav_movies.map(movie => <li>{movie.title}</li>)
      }
    </ul>
    
    </>
  )
}

function Home() {
  return (
    <div>
      <nav>
        <Link>Home</Link>
        <Link>Reviews</Link>
        <Link>Submit Movie Review</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  )
}



function App() {

  let [movies, setMovies] = useState(null);

  useEffect( () => {
    console.log("Loading Data");
    fetch("./movies.json")
    .then( response => response.json() )
    .then( setMovies )
    .catch( e => console.log(e.message))
  }, [])

  if( movies == null) {
    return <h1>Loading...</h1>;
  }
  console.log(movies);
  
      {/* // Add movie reviews page and a page to submit movie reviews in Home page */}

  return (
    <Routes>
      <Route path="/" element={<MovieList fav_movies={(movies)} />} />
      <Route path="/review" element={<LeaveReview movies={movies} setMovies={setMovies} />} />
    </Routes>
  )

}

export default App;


    // <Routes>
    //   <Route path="/" element={<MovieList fav_movies={(movies)} />} />
    //   {/* <Route path="/review" element={<LeaveReview movies={(movies) setMovies={setMovies}} />} /> */}

    // </Routes>