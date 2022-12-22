
import React, {useState} from "react";
import { ResultCards } from "./card/ResultCards";
import "./Search.css";
import { Link } from "react-router-dom";

export const Search = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    
    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9953b7ebb0231db8dbdf84cb487b605a&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
           if(!data.errors) {
            setResults(data.results);
           } else {
            setResults([]);
           };
                });
    };
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                    <input type="text" placeholder="Search for a movie.."
                    value={query}
                    onChange={onChange}
                    />
                </div>
                {results.length > 0 && (
                    <ul className="results">
                        {results.map((movie) => (
                            <Link style={{textDecoration:"none"}} to={`/movie/${movie.id}`}>
                                <ResultCards movie={movie}/>
                            </Link>
                        ))}
                    </ul> 
                )}
            </div>
            </div>
</div>
    );
};
























// import React from 'react';


// const SearchForm = (props) => {
//     return ( 
    
//         <div className='col col-sm-4'> 
//             <input className='form-control' 
//             value={props.value} 
//             onChange={(event) => 
//             props.setSearchValue(event.target.value)} 
//             placeholder='Search IMDb'>
//             </input>
             
    
//         </div>
//     );
// };

// export default SearchForm;