import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import ReviewFormButtons from './ReviewFormButtons';

const NewReviewCard = ({article}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">My Rating</Card.Subtitle>
          <Rating name="user-rating"/>
          <Card.Subtitle className="mb-2 text-muted">My Review</Card.Subtitle>
          {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder="Leave a review here" rows={3} />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review Title</Form.Label>
            <Form.Control as="textarea" placeholder="Leave a review here" rows={3} />
          </Form.Group> */}
          <ReviewFormButtons />
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewReviewCard;