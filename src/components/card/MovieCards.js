import React, {useEffect, useState} from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./MovieCards.css";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

//Korten som är under toprated movies-karusellen

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme baseColor="#5bbdb8b2" highlightColor="#ffffff">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cardImg" alt="Pictures of movies" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cardOverlay">
                    <div className="cardTitle">{movie ? movie.original_title:""}</div>
                    <div className="cardRuntime">
                        {movie?movie.release_date:""}
                        <span className="cardRating">{movie ? movie.vote_average:""}<i className="fas fa-star" id="cardStar"/></span>
                    </div>
                    <div className="cardDescription">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards;