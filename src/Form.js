import React, { useEffect, useState, useRef } from 'react';


export function LeaveReview(props) {

    const movieTitle = useRef();
    const releaseDate = useRef();
    const actors = useRef();
    const moviePoster = useRef();
    const rating = useRef();

    const submit = (event) => {

        event.preventDefault();
        const movieData = [];
        props.movies.forEach( movie => {
            movieData.push(movie);
        })

        const title = movieTitle.current.value;
        movieData.push({"title": title});
        props.setMovies(movieData);

        alert(title);
        movieTitle.current.value = "";
    }

    return (

        <form onSubmit={submit}>
    
        Movie Title
        <input
        ref = {movieTitle}
        type = "text" /><br></br>
        <button>ADD</button>
    </form>

    )

};

