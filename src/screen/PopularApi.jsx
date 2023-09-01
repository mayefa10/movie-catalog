import React, { useEffect, useState } from 'react';
import Popular from '../components/Popular';
import { ImHeart } from "react-icons/im";

//const API_URL = process.env.REACT_APP_API_URL;
const API_URL_POPULAR =
'https://api.themoviedb.org/3/trending/all/day?api_key=1cdd3b92796c0f7dda36f8e393d4449b';

//console.log(API_URL);
export default function PopularApi() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(API_URL_POPULAR)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopular(data.results);
      });
  }, []);

  return (
    <>
    <h3 className='text-dark title-popular' >
      <ImHeart className='icon-popular'/>
      Trends</h3>
    <div className="card">
        {popular.map((popularReq) => (
        <Popular key={popularReq.id} {...popularReq} />
      ))}
    </div>
    </>
  );
}

