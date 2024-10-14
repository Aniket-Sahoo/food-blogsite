import IntroReviewBar from "./IntroReviewBar";
import SocialButtonsTest from "./SocialButtonsTest";
import AuthorComponent from "./AuthorComponent";
import IntroDescription from "./IntroDescription";
// add recipe reviews, ratings and action footer. refer to https://www.allrecipes.com/recipe/274690/homemade-portuguese-chicken/

const RecipePageIntroComponent = ({article}) => {
  // console.log(article);
  return (
    <>
      <section>
        <h1>{article.title}</h1>
        <IntroReviewBar reviews={article.reviews} />
        <IntroDescription description={article.description}/>
        <AuthorComponent author={article.author} datePublished={article.date_published}/>
        <SocialButtonsTest />
      </section>
    </>
  )
}

export default RecipePageIntroComponent