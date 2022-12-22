import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SearchMovieCards } from './SearchMovieCards';

export const Watched = () => {
  const {watched} = useContext(GlobalContext);
 
  return (
    <div className='moviePage'>
    <div className='container'>
      <div className='header'>
        <h1 className='heading'>Recently viewed movies</h1>
     
      <span className='counter'>
        {watched.length} {watched.length === 1 ? "Movie" : "Movies"} 
        </span>
        </div>
      {watched.length > 0 ? (
  <div className='movie-grid'>
      {watched.map((movie) => (
        <SearchMovieCards movie={movie} key={movie.id} type="watched"/>
      ))}
      </div>
      ) : (
        <h2 className='no-movies'>No movies in this list yet.</h2>
      )}
    </div>
    </div>
  );
};


