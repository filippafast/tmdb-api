import React from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Header = () => {
    return (
        <header>
       <div className="container">
                <div className="inner-content">
                    <div className="brand">
                    
                    <Link to="/"><img className="navbar-icon" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" /></Link>
                 </div> 
                
                    <Link to="/upcomingmovies" className="NavbarUpcomingMovies">Upcoming movies</Link>
               
                <ul className="nav-links">
               
                <li>
                    <Link to="/watchlist">Watchlist</Link>
                </li>
                <li>
                    <Link to="/watched">Recently viewed</Link>
                </li>
                <li>
                    <Link to="/search" className="btn-search">Search</Link>
                </li>
            </ul>
           </div> 
        </div>
        
        </header>
    );
};


