// import { useEffect, useState} from 'react';

// function RemoveMovie() {

//     let [movies, setMovies] = useState(null);

//     useEffect( () => {
//       fetch("../movies.json")
//       .then( response => response.json() )
//       .then( setMovies )
//       .catch( e => console.log(e.message))
//     }, [])

//     if( movies == null) {
//         return <h1>Loading...</h1>;
//       }

//       let removeHandler=(e) => {
//         let movie = e.target.getAttribute(removeMovies)
//       }

//     return (
//         <div>
//             <h2>Remove Movie</h2>
//             {
//                 movies.map( (movie) => {
//                  <div> 
//                     <img className="photo" src={movie.image} alt="" />
//                     <br />Title: {movie.title}
//                     <br />Release Date: {movie.release_date}
//                     <br />Actors: {movie.actors}
//                     <br />Rating: {movie.rating}
//                     <br />
//                     <button removeMovies={movie.id}>Remove</button>
//                  </div>  

//                 })
//             }
//         </div>
//     )

// }

// export default RemoveMovie