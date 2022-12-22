/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/MovieCards";

const MovieList = () => {
        
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()


    useEffect(() => {
        getData()
    // eslint-disable-next-line no-use-before-define
    }, [type])


    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="ListOfMovies">
            <h2 className="ListTitle">{(type ? type : "Popular movies")}</h2>
            <div className="ListOfCards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
