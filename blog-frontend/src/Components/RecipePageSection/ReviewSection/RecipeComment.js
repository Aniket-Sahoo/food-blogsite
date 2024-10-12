import { Card } from "react-bootstrap";
import Rating from '@mui/material/Rating';

const RecipeComment = ({review}) => {
  return (
    <>
      {
        review.comment && (
          <Card className="my-3">
            <Card.Body>
              <Card.Title>{review.name}</Card.Title>
              <Card.Text>
                <Rating name="read-only" value={review.rating} readOnly />
              </Card.Text>
              <Card.Text>{review.comment}</Card.Text>
            </Card.Body>
          </Card>
        )
      }
    </>
  );
}

export default RecipeComment;