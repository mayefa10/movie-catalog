import React, { useEffect, useState } from 'react';
import Series from '../screen/Series';
import { ImTv  } from "react-icons/im";


//const API_URL = process.env.REACT_APP_API_URL;
const API_URL_SERIES =
'https://api.themoviedb.org/3/discover/tv?api_key=1cdd3b92796c0f7dda36f8e393d4449b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`)';
;

//console.log(API_URL);
export default function HomeSeries() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(API_URL_SERIES)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSeries(data.results);
      });
  }, []);

  return (
    <>
    <h3 className='text-dark title-movie' ><ImTv className='icon-movie'/>Programs</h3>
    <div className="card">
      {series.map((serieReq) => (
        <Series key={serieReq.id} {...serieReq} />
      ))}
    </div>
    </>
  );
}

