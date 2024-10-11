import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import '../../DevMode.css';

const RecipeListComponent1 = ({recipes}) => {
  return (
    <Row xs={2} sm={2} lg={3} className="g-4">
      {recipes.map((recipe, idx) => (
        <Col key={idx}>
          <Card className="h-100 border">
            <Card.Img className="top-recipe-image" src={recipe.image_url}/>
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text> 
                {recipe.description.substring(0, 100)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RecipeListComponent1;