import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const HorizontalCard = () => {
  return (
    <div className="my-2 d-flex justify-content-start border border-success border-3 border-dashed">
          <img
            src="https://via.placeholder.com/100x100"
            className="img-fluid border border-primary"
            alt="Placeholder Image"
          />
          <div className='border border-secondary border-dotted'>
            <Card.Title>Placeholder Title</Card.Title>
            <Card.Text>Placeholder text content for the card layout.</Card.Text>
          </div>
    </div>
  );
};

export default HorizontalCard;
