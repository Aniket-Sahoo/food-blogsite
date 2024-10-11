import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import SampleArticles from "../../TestData/SampleArticles.json";
import './TopRecipeCard.css';
import '../../DevMode.css';
import RecipeListComponent1 from "../RecipeListComponents/RecipeListComponent1";
import RecipeListComponent2 from "../RecipeListComponents/RecipeListComponent2";

const TopRecipesComponent = () => {
  const topRecipes = SampleArticles.slice(0, 4);
  console.log(topRecipes);
  return (
    <section className="thick-border border-primary mb-2 py-2">
      <div className="text-center">
        <h2>Our Most Loved</h2>
      </div>
      <RecipeListComponent2 recipes={topRecipes} />
    </section>
  );
};

export default TopRecipesComponent;