import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';


export function LeaveReview(props) {

    const movieTitle = useRef();

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
        <>
        <form onSubmit={submit}>
            <label> Movie Title </label>
            <input
            ref = {movieTitle}
            type = "text" /><br></br>
            <button>ADD</button>
        </form>
        </>
    )

};

