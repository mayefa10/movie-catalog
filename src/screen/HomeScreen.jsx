import React, { useEffect, useState } from 'react';
import Movies from './Movies';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


//const API_URL = process.env.REACT_APP_API_URL;
const API_URL =
  ' https://api.themoviedb.org/3/movie/popular?api_key=1cdd3b92796c0f7dda36f8e393d4449b';

//console.log(API_URL);
export default function HomeScreen() {
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
    <Container>
    <Row>
      <div className="d-flex
      flex-row-3 
      
      justify-content-between 
      py-2
      mb-2">
        {movies.map((movieReq) => (
          <Col  md={4} sm={8}>
          <Movies key={movieReq.id} {...movieReq} />
          </Col>
        ))}
      </div>
      
    </Row>
    </Container>
  );
}
