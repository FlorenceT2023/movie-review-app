import { useState, useEffect } from "react";
import React from 'react';


function MovieList(props) {

    let [movies, setMovies] = useState(null);

    useEffect( () => {
        fetch("../movies.json")
        .then( response => response.json() )
        .then( setMovies )
        .catch( e => console.log(e.message))
      }, [])

    function removeMovie(id) {
        console.log(id);
        let newMovies = movies.filter(movies => movies.id !== id)
        setMovies(newMovies)
        console.log(newMovies);

    }

    return (
      <>
      <h2> Movie Ratings </h2>
      <div align = "center" >
        {
          props.fav_movies.map(movie =>
          <div>
            <img className="photo" src={movie.image} alt="" />
            <br />Title: {movie.title}
            <br />Release Date: {movie.release_date}
            <br />Actors: {movie.actors}
            <br />Rating: {`${movie.rating}/5`}
            <br />
  
            <button type="button" onClick={() => removeMovie(movie.id)}>Remove</button>
          </div>
          )
        }
      </div>
      </>
    )
  }

  export default MovieList;