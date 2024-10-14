import { useParams } from "react-router-dom";
import SampleArticles from "../TestData/SampleArticles.json";
import IngredientsComponent from "../Components/RecipePageSection/IngredientsSection";
import RecipeStepsComponent from "../Components/RecipePageSection/RecipeDirectionsSection";
import RecipePageIntroComponent from "../Components/RecipePageSection/IntroSection/IntroSectionComponent";
import ReviewSection from "../Components/RecipePageSection/ReviewSection/ReviewSectionComponent";
import { Container } from "react-bootstrap";
import TestNavbar2 from "../Components/CommonComponents/TestNavbar2";
import SimilarRecipesComponent from "../Components/RecipePageSection/SimilarRecipesComponent";
import axios from "axios";
import { useEffect, useState } from "react";

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
  // console.log(id);

  // state variables
  const [article, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/food-blog/recipePage/${id}`);
        setRecipe(response.data);
        setIsLoading(false);
      } catch (error) {
          console.log(error);
          setError("Failed to Load Recipe");
          setIsLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error: {error}</div>
  }
  console.log(article);
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