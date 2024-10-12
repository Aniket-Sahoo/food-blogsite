import NewReviewCard from "./NewReviewCard";
import CommentComponent from "./CommentsComponent";

const ReviewSection = ({article}) => {
  console.log(article);
  return (
    <div className="border border-primary">
      <div>
        <h2>Reviews</h2>
      </div>
      <NewReviewCard className="mb-3" article={article}/>
      <CommentComponent reviews={article.reviews}/>
    </div>
  )
}

export default ReviewSection;