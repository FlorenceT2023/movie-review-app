import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';


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
        <>
        <center>
        <form onSubmit={submit}>
            <label> Movie Title: 
                <input
                ref = {movieTitle}
                type = "text" />
            </label><br />
            <label> Release Date (yyyy-mm-dd):
                <input
                ref = {releaseDate}
                type = "text" />
            </label><br />
            <label> Actors:
                <input
                ref = {actors}
                type = "text" />
            </label><br />
            <label> Movie Poster:
                <select ref={moviePoster}>
                    <option>Movie Poster Placeholder</option>
                </select>
            </label><br />
            <label> Rating:
                <select ref={rating}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </label><br />
            <button>ADD</button>
        </form>            
        </center>
        </>
    )

};

