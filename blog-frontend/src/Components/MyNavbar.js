import { Container, Navbar ,Form, Row, Col, Button } from "react-bootstrap"

const MyNavbar = () => {
  return (
    <Navbar className="bg-body-secondary">
      <Container>
        <Navbar.Brand>Brand</Navbar.Brand>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Login</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  )
};

export default MyNavbar;