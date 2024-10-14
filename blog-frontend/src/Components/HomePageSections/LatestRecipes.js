import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import SampleArticles from "../../TestData/SampleArticles.json";
import '../../DevMode.css';
import RecipeListComponent1 from "../RecipeListComponents/RecipeListComponent1";
import { useState, useEffect } from "react";
import axios from "axios";

const LatestRecipesComponent = () => {

  const [latestRecipes2, setLatestRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/food-blog/homepage/latest-recipes');
        setLatestRecipes(response.data);
      } catch (error) {
          console.log(error);
      }
    }
    fetchData();
  }, []);

  const latestRecipes = SampleArticles.slice(5, 11);
  console.log(latestRecipes2);
  return (
    <section className="thick-border border-primary mb-2">
      <div className="text-center">
        <h2>Latest Recipes</h2>
      </div>
      <RecipeListComponent1 recipes={latestRecipes2} />
    </section>
  );
};

export default LatestRecipesComponent;