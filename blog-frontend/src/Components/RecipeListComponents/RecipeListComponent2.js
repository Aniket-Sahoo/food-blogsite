import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import '../../DevMode.css';
import { Link } from "react-router-dom";

const RecipeListComponent2 = ({recipes}) => {
  return (
    <div className="d-flex flex-column height-100px">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to = {`/recipes/${recipe.id}`}>
          <HorizontalCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default RecipeListComponent2;