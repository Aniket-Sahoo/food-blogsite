import { useParams } from "react-router-dom";
import SampleArticles from "../TestData/SampleArticles.json";
import IngredientsComponent from "../Components/RecipePageSection/IngredientsSection";
import RecipeStepsComponent from "../Components/RecipePageSection/RecipeStepsSection";
import RecipePageIntroComponent from "../Components/RecipePageSection/RecipeIntroSection";
import { Container } from "react-bootstrap";
import TestNavbar2 from "../Components/TestNavbar2";

// path to this page is /recipes/:id
const RecipePage = () => {

  const { id } = useParams();
  console.log(id);
  const article = SampleArticles.find((article) => article.id === id);

  return (
    <>
      <TestNavbar2 />
      <Container className="border">
        {/* <div>
          <h1>{article.title}</h1>
        </div> */}
        <RecipePageIntroComponent article={article}/>
        <IngredientsComponent ingredients={article.ingredients}/>
        <RecipeStepsComponent instructions={article.instructions}/>
      </Container>
    </>
  )
}

export default RecipePage;