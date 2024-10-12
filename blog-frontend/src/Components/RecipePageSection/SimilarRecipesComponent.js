import RecipeListComponent2 from "../RecipeListComponents/RecipeListComponent2";
import SampleArticles from "../../TestData/SampleArticles.json";

const SimilarRecipesComponent = () => {
  return (
    <div className="border border-primary">
      <h2>Similar Recipes</h2>
      <RecipeListComponent2 recipes={SampleArticles.slice(0, 4)}/>
    </div>
  )
};

export default SimilarRecipesComponent;