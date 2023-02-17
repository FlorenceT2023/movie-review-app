import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';


export function LeaveReview(props) {

    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const moviePoster = useRef();
    const movieRating = useRef();
    


    const submit = (event) => {

        event.preventDefault();
        const movieData = [];
        props.movies.forEach( movie => {
            movieData.push(movie);
        })

        const title = movieTitle.current.value;
        const releaseDate = movieReleaseDate.current.value;
        const actors = movieActors.current.value;
        const poster = moviePoster.current.value;
        const rating = movieRating.current.value;
        movieData.push({"title": title, "release_date": releaseDate, "actors": actors, "image": poster, "rating": rating});
        props.setMovies(movieData);

        alert(title);
        movieTitle.current.value = "";
        movieReleaseDate.current.value = "";
        movieActors.current.value = "";
        moviePoster.current.value = "";
        movieRating.current.value = "";
    }

    return (
        <>
        <center>
            <h2>Submit Review</h2>
            <form onSubmit={submit}>
                <label> Movie Title: 
                    <input
                    ref = {movieTitle}
                    type = "text" />
                </label><br />
                <label> Release Date (yyyy-mm-dd):
                    <input
                    ref = {movieReleaseDate}
                    type = "text" />
                </label><br />
                <label> Actors:
                    <input
                    ref = {movieActors}
                    type = "text" />
                </label><br />
                <label> Movie Poster:
                    <select ref={moviePoster}>
                        <option>/images/popcorn_placeholder.png</option>
                        <option>/images/terminator2.jpg</option>
                        <option>/images/grand_budapest_hotel.jpg</option>
                        <option>/images/office_space.jpg</option>
                        <option>/images/turning_red.jpg</option>
                        <option>/images/Princess_Mononoke.png</option>
                    </select>
                </label><br />
                <label> Rating:
                    <select ref={movieRating}>
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

