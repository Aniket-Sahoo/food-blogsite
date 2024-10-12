import { useParams } from "react-router-dom";
import SampleArticles from "../TestData/SampleArticles.json";
import IngredientsComponent from "../Components/RecipePageSection/IngredientsSection";
import RecipeStepsComponent from "../Components/RecipePageSection/RecipeDirectionsSection";
import RecipePageIntroComponent from "../Components/RecipePageSection/IntroSection/IntroSectionComponent";
import ReviewSection from "../Components/RecipePageSection/ReviewSection/ReviewSectionComponent";
import { Container } from "react-bootstrap";
import TestNavbar2 from "../Components/TestNavbar2";
import SimilarRecipesComponent from "../Components/RecipePageSection/SimilarRecipesComponent";

// path to this page is /recipes/:id
/*
  1. RecipeIntroSection - Done
  2. Media Section -
  3. DetailsCard -
  4. RecipeBlogSection -
  5. IngredientsSection - Done
  6. RecipeDirectionsSection - Done
  7. NutritionFactsSection -
  8. ReviewsSection - Done
  9. RelatedRecipesSection - Done
*/
const RecipePage = () => {

  const { id } = useParams();
  console.log(id);
  const article = SampleArticles.find((article) => article.id === id);

  return (
    <>
      <TestNavbar2 />
      <Container className="border">
        <RecipePageIntroComponent article={article}/>
        <IngredientsComponent ingredients={article.ingredients}/>
        <RecipeStepsComponent instructions={article.instructions}/>
        <ReviewSection article={article}/>
        <SimilarRecipesComponent article={article}/>
      </Container>
    </>
  )
}

export default RecipePage;