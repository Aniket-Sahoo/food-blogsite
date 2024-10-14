import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewReviewCard = ({article}) => {

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      const review = {
        name: "Ben 10",
        comment: comment,
        rating: rating,
        date: new Date()
      };
      console.log(review);
      const response = await axios.post(`/api/food-blog/recipePage/${article.id}/review`, review);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setComment("");
    setRating(0);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">My Rating</Card.Subtitle>
          <Rating name="user-rating" value={rating} onChange={(e, newValue) => setRating(newValue)} />
          {/* <Card.Subtitle className="mb-2 text-muted">My Review</Card.Subtitle>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder="Leave a review here" rows={3} />
          </Form.Group> */}
          <Form.Group  className="">
            <Form.Label className='mb-2 text-muted'>Review Title</Form.Label>
            <Form.Control as="textarea" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Leave a review here" rows={3} />
            <button onClick={submitReview} className="btn btn-primary">Submit</button>
            {/* <ReviewFormButtons /> */}
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
}

const ReviewFormButtons = () => {
  return (
    <div className="d-flex justify-content-end">
      <button type="reset" className="btn btn-primary">Cancel</button>
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  );
}

export default NewReviewCard;