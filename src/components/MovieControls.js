
import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./MovieControls.css";

export const MovieControls = ({type, movie}) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist, 
    removeFromWatched,
  } = useContext(GlobalContext);
  
  return (
    <div className='inner-card-controls'>
        {type === "watchlist" && (
            <>
            <div className='boxes'>
            <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon icon={faPlay} className="ctrl-btn-watch"/>
            <h5 className="WatchBtn">Watch Movie</h5>
            </button>
            
            <button className='ctrl-btn' onClick={() => removeMovieFromWatchlist(movie.id)}>
            <FontAwesomeIcon icon={faTrash} className="ctrl-btn-remove"/>
            <h5 className="RemoveBtn">Remove Movie</h5>
            </button>
            </div>
            </>
        )}

        {type === 'watched' && (
          <>
           <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
            <FontAwesomeIcon icon={faPlus} className="ctrl-btn-add"/>
            <h5 className="WatchBtn">Add to watchlist</h5>
            </button>
          <button className='ctrl-btn' onClick={() => removeFromWatched(movie.id)}>
          <FontAwesomeIcon icon={faTrash} className="ctrl-btn-remove"/>
          <h5 className="RemoveBtn">Remove Movie</h5>
          </button>
          </>
        )}
        </div>
  );
};

