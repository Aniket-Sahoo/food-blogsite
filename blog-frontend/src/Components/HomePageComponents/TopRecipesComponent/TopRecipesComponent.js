import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import SampleArticles from "../../../TestData/SampleArticles.json";
import './TopRecipeCard.css';
import '../../../DevMode.css';

const TopRecipesComponent = () => {
  const topRecipes = SampleArticles.slice(0, 4);
  console.log(topRecipes);
  return (
    <Container className="thick-border border-primary mb-2 py-2">
      <div className="">
        <h2>Our Most Loved</h2>
      </div>
      <Row xs={2} sm={2} lg={4} className="g-4">
        {topRecipes.map((recipe, idx) => (
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
    </Container>
  );
};

export default TopRecipesComponent;