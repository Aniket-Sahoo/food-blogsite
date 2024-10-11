import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './HorizontalCard.css';

const HorizontalCard = ({recipe}) => {
  return (
    <div className="my-1 d-flex">
        <div className='image-placeholder'>
          <img
            src={recipe.image_url}
            className="img-fluid flex-image"
            alt="Placeholder Image"
          />
        </div>
          <div className='ms-2'>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>{recipe.description.substring(0, 125)}</Card.Text>
          </div>
    </div>
  );
};

export default HorizontalCard;
