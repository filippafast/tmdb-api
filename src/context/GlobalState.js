import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from "./AppReducer";


const initialState = {
    watchlist: localStorage.getItem('watchlist') 
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
    watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched')) 
    : [],   
};

export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect (() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    },[state]);
    
    // add movie to watchlist
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_WATCHLIST", payload: movie});
    };
    
    //remove movie from watchlist
    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_WATCHLIST", payload: id});
    };

    //add movie to watched 
    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_WATCHED", payload: movie});
    };

    //move to watchlist
    const moveToWatchlist = (movie) => {
        dispatch({type: 'MOVE_TO_WATCHLIST', payload: movie});
    };

    //remove to watch
    const removeFromWatched = (id) => {
        dispatch({type: "REMOVE_FROM_WATCHED", payload: id});
    };

    return (
        <GlobalContext.Provider 
        value= {{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched,
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
};