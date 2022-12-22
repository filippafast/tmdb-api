import React, {useEffect, useState} from "react"
import "./MovieDetails.css"
import { useParams } from "react-router-dom"

//Filmens info-sida


const Movie = () => {
    const [movieDetails, setMovieDetails] = useState()
    const { id } = useParams()

   

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9953b7ebb0231db8dbdf84cb487b605a&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
    }
 useEffect(() => {
        getData()
        window.scrollTo(0,0)
    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
        <div className="detailMoviePage">
            <div className="detailIntro">
                <img className="detailBackdropPath" src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.backdrop_path : "" }`} alt="" />
            </div>
            <div className="detailMovie">
                <div className="detailMovieLeft">
                    <div className="detailPosterBox">
                        <img className="detailPoster" src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.poster_path : ""}`} alt="" />
                    </div>
                </div>
                <div className="detailMovieRight">
                    <div className="detailMovieTop">
                        <div className="detailTitle">{movieDetails ? movieDetails.original_title : ""}</div>
                        <div className="detailTagline">{movieDetails ? movieDetails.tagline : ""}</div>
                        <div className="detailRating">
                            {movieDetails ? movieDetails.vote_average: ""} <i className="fas fa-star" id="detailStar" />
                            <span className="detailVotes">{movieDetails ? "(" + movieDetails.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="detailRuntime">{movieDetails ? movieDetails.runtime + " mins" : ""}</div>
                        <div className="detailReleaseDate">{movieDetails ? "Release date: " + movieDetails.release_date : ""}</div>
                        <div className="detailMovieGenres">
                            {
                                movieDetails && movieDetails.genres
                                ? 
                                movieDetails.genres.map(genre => (
                                    <><span className="detailGenre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="detailDescriptionBottom">
                        <div className="detailDescription">Description</div>
                        <div>{movieDetails ? movieDetails.overview : ""}</div>
                    </div>
                    
                </div>   
            </div>
         
        </div>
    </>
    )
}

export default Movie