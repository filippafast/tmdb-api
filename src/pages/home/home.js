import React, { useEffect, useState } from "react";
import "./home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";




const Home = () => {
    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=9953b7ebb0231db8dbdf84cb487b605a&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

  return (
    <>
       <div className="poster">
          <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
           {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="posterMovie" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" id="star" />{" "}
                                        </span>
                                    </div>
                                    
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
              
            </div>
        </>
    )
}


export default Home;