import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';
export default function Movies({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  return (
    <div>
     
      

        
      <Card
        bg="dark"
        data-bs-theme="dark"
        style={{ width: '20rem' }}
        className="m-2"
      >
        <Card.Body className='d-flex flex-column'>
        <Card.Title className="text-center ">{title}</Card.Title>
          <Card.Img
            className="pt-3 pb-0 px-3"
            variant="top"
            src={API_IMG + poster_path}
            alt=""
          />
         <Card.Text className='m-4'>{overview}</Card.Text>
        </Card.Body>
      </Card>
      

    </div>
  );
}
