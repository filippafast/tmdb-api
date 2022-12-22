
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SearchMovieCards } from './SearchMovieCards';
import "./Watchlist.css"

export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);

  return (
  <div className='moviePage'>
    <div className='container'>
      <div className='header'>
        <h1 className='heading'>My watchlist</h1>
     
      <span className='counter'>
        {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"} 
        </span>
        </div>
      {watchlist.length > 0 ? (
  <div className='movie-grid'>
      {watchlist.map((movie) => (
        <SearchMovieCards movie={movie} key={movie.id} type="watchlist"/>
      ))}
      </div>
      ) : (
        <h2 className='no-movies'>No movies in your watchlist</h2>
      )}
    </div>
    </div>
  );
};
