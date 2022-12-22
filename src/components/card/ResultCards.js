import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ResultCards.css";

// Resultatet när man söker på en film
export const ResultCards = ({ movie }) => {
    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched} = useContext(GlobalContext);
    
    let storedMovie = watchlist.find((o) => o.id === movie.id);
    let storedMovieWatched = watched.find((o) => o.id === movie.id);
    
    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true: false; 

    const watchedDisabled = storedMovieWatched ? true : false;
    
    return ( 
       
         <div className="resultCard">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}/>
                ):(
                    <div className="posterfiller"/>
                )}
            </div>
            <div className="info">
                <div className="result-header">
                    <h3 className="result-title">{movie.title}</h3>
                    <h4 className="releaseDate">
                        {movie.release_date ? movie.release_date.substring(0, 4) :"-"} 
                        </h4>
                     </div>
                    <div className="controls">
                        <button className="btn-add-to-watchlist"
                        disabled={watchlistDisabled} //för att inte lägga in samma film fler gånger i watchlist
                        onClick={() => addMovieToWatchlist(movie)}>Add to watchlist</button>
                       
                        <button className="btn-add-to-watched"
                        disabled={watchedDisabled} //för att inte lägga in samma film fler gånger i watched
                        onClick={() => addMovieToWatched(movie)}>Add to watched</button>
                    </div>
                </div>
            </div>
   
    );
};