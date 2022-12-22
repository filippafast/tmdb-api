
import React from 'react';
import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import "./UpcomingMovies.css";
import { Link } from 'react-router-dom';

const UpcomingMovies = () => {
    const [ upcomingMovies, setUpcomingMovies ] = useState([])
//Popular Movies 
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9953b7ebb0231db8dbdf84cb487b605a&language=en-US&adult=false")
        .then(res => res.json())
        .then(data => setUpcomingMovies(data.results))
    }, [])
   
    return (
        <>
        <AwesomeSlider>
        { 
             upcomingMovies.map(movie => (
             <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
            <div className="UpcomingImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="posterMovie" className="UpcomingMovies" />
            </div>
            <div className="UpcomingOverlay">
                <div className="UpcomingTitle">{movie ? movie.original_title: ""}</div>
                <div className="UpcomingRuntime">
                    <span className="UpcomingImageRating">
                        {movie ? movie.vote_average :""}
                        <i className="fas fa-star" id="star" />{" "}
                    </span>
                </div>
                <div className="UpcomingDescription">{movie ? movie.overview : ""}</div>
            </div>
        </Link>
             ))
}
        </AwesomeSlider>
            </>     
        
      
         );
        };

   export default UpcomingMovies;
 