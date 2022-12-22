import React, { useEffect, useState } from "react";
import "./TopRatedMovies.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import MovieList from "../movielist/MovieList";

//Top Rated Movies carousel
const Home = () => {
    const [topRatedMovies, setTopRatedMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9953b7ebb0231db8dbdf84cb487b605a&adult=false&language=en-US")
        .then(res => res.json())
        .then(data => setTopRatedMovies(data.results))
    }, [])

  return (
    <>
       <div className="topRatedposters">
          <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
           {
                        topRatedMovies.map((movie, index) => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="topRatedImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="posterMovie" className="TopRatedMovies" />
                                </div>
                                <div className="topRatedOverlay">
                                    <div className="topRatedTitle">{movie ? movie.original_title: ""}</div>
                                    <div className="topRatedRuntime">
                                        <span className="topRatedImageRating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" id="star" />{" "}
                                        </span>
                                    </div>
                                    <div className="topRatedDescription">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}



export default Home;