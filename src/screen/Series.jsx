import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsCalendar3 } from 'react-icons/bs';
import { LiaEyeSolid } from 'react-icons/lia';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';
export default function Series({
  name,
  poster_path,
  first_air_date,
  vote_average,
  release_date,
  overview,
  popularity,
}) {
  return (
    
    <Container>
      <Card
        style={{ width: '12.5rem'}}
        bg="dark"
        data-bs-theme="dark"
        className=""
      >
        <Card.Body className='card-body'>
          <Card.Img
            className=""
            variant="top"
            src={API_IMG + poster_path}
            alt=""
          />
          <Card.Title className="title">{name}</Card.Title>
          <Card.Text>
            <BsCalendar3 />
            {first_air_date}
          </Card.Text>
          <Card.Text>
            {release_date}
          </Card.Text>
          <Card.Text>
            <LiaEyeSolid />
            {popularity}
          </Card.Text>
          <Card.Text>
            <AiTwotoneStar />
            {vote_average}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>


  );
}