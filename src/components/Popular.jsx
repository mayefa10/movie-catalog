import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsCalendar3 } from 'react-icons/bs';
import { LiaEyeSolid } from 'react-icons/lia';
import { ImVideoCamera } from "react-icons/im";



const API_IMG2 = 'https://image.tmdb.org/t/p/w500/';
export default function Popular({
  title,
  name,
  poster_path,
  popularity,
  release_date,
  overview,
  vote_average,
  media_type,
  first_air_date,
}) {
  return (
    <>
      <Container >
        <Card
          style={{ width: '12.5rem' }}
          bg="dark"
          data-bs-theme="dark"
          className=""
        >
          <Card.Body className="card-body-popular">
            <Card.Img
              className=""
              variant="top"
              src={API_IMG2 + poster_path}
              alt=""
            />
            <Card.Title className="title">{title}</Card.Title>
            <Card.Title className="title">{name}</Card.Title>
            <Card.Text>
              <BsCalendar3 />
              {release_date} {first_air_date}
            </Card.Text>
            <Card.Text>
              <LiaEyeSolid />
              {popularity}
            </Card.Text>
            <Card.Text>
              <ImVideoCamera className='m-1 '/>
              {media_type}
            </Card.Text>
            <Card.Text>
              <AiTwotoneStar />
              {vote_average}

            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
