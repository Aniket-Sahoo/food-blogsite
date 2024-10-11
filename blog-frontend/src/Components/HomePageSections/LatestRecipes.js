import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import SampleArticles from "../../TestData/SampleArticles.json";
import '../../DevMode.css';
import RecipeListComponent1 from "../RecipeListComponents/RecipeListComponent1";

const LatestRecipesComponent = () => {
  const latestRecipes = SampleArticles.slice(5, 11);
  console.log(latestRecipes);
  return (
    <section className="thick-border border-primary mb-2">
      <div className="text-center">
        <h2>Latest Recipes</h2>
      </div>
      <RecipeListComponent1 recipes={latestRecipes} />
    </section>
  );
};

export default LatestRecipesComponent;