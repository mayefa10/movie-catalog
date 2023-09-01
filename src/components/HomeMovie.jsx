import React, { useEffect, useState } from 'react';
import Movies from '../screen/Movies';
import { BiSolidMoviePlay } from "react-icons/bi";

//const API_URL = process.env.REACT_APP_API_URL;
const API_URL =
  ' https://api.themoviedb.org/3/movie/popular?api_key=1cdd3b92796c0f7dda36f8e393d4449b';

//console.log(API_URL);
export default function HomeMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
  <h3 className='text-dark title-movie' ><BiSolidMoviePlay className='icon-movie'/>Movies</h3>

    <div className="card">
      
      {movies.map((movieReq) => (
        <Movies key={movieReq.id} {...movieReq} />
      ))}
    </div>
    </>
  );
}
