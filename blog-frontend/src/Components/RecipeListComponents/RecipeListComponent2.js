import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import '../../DevMode.css';

const RecipeListComponent2 = ({recipes}) => {
  return (
    <div className="d-flex flex-column height-100px">
      {recipes.map((recipe, idx) => (
        <HorizontalCard key={idx} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeListComponent2;