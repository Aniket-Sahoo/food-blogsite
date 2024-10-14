import Rating from '@mui/material/Rating'; 

const IntroReviewBar = ({reviews}) => {
  
  // Calculate average rating
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const avgRating = totalRating / reviews.length || 0; // Handle case when reviews.length is 0

  console.log(avgRating.toFixed(2));
  console.log(typeof(avgRating));
  console.log(typeof(avgRating.toFixed(2))); // this is a String, find a way to convert to number
  const numReviews = reviews.reduce((acc, review) => acc + isNotEmptyString(review.comment), 0);
  return (
    <div className="d-flex align-items-center">
      <Rating className='' name="half-rating-read" defaultValue={avgRating} precision={0.5} readOnly />
      <div className="me-2 p-1 border-end">{avgRating.toFixed(2)} ({reviews.length})</div>
      <div className="me-2 p-1">{numReviews} Reviews</div>
    </div>
  )
}

function isNotEmptyString(str) {
  if (!str || str.trim().length === 0){
    return 0;
  }
  else 
    return 1;
}

export default IntroReviewBar;