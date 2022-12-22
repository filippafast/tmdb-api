import React from 'react';
import { MovieControls } from "./MovieControls";

export const SearchMovieCards = ({movie, type }) => {
  return (
    <div className='MovieCard'>
        <div className='overlay'></div>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
         />
                <MovieControls type={type} movie={movie}/>
            </div>

  );
};


