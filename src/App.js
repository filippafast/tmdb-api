
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Navbar";
import Movie from "./components/moviedetail/MovieDetails";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched"
import { Search } from "./components/Search";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import  Home from "./components/header/TopRatedMovies";
import UpcomingMovies from "./components/header/UpcomingMovies";

export default function App () {
  return (
      <GlobalProvider>
      <Router>
     <Header/>
        <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="movie/:id" element={<Movie/>}/>
                <Route path="/upcomingmovies" element={<UpcomingMovies/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/watchlist" element={<Watchlist/>}/>
                <Route path="/watched" element={<Watched/>}/>
                <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
        </GlobalProvider>
  
  );
}


