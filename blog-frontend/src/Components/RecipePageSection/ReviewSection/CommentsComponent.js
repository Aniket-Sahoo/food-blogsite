import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import RecipeComment from './RecipeComment';

const CommentComponent = ({reviews}) => {
  console.log(reviews);
  const review = reviews[0];
  return (
    <>
      <ul>
        {reviews.map((review, idx) => (
          <li key={idx}>
            <RecipeComment review={review} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentComponent;