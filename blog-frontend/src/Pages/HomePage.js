import TestNavbar from "../Components/CommonComponents/TestNavBar.js";
import TestNavbar2 from "../Components/CommonComponents/TestNavbar2.js";
import TopRecipesComponent from "../Components/HomePageSections/TopRecipesComponent.js";
import ExploreComponent from "../Components/HomePageSections/ExploreComponent.js"; 
import Container from "react-bootstrap/Container";
import LatestRecipesComponent from "../Components/HomePageSections/LatestRecipes.js";

const HomePage = () => {
  return (
    <>
      <TestNavbar2 />
      <Container className="border">
        {/* <TestNavbar /> */}
        <TopRecipesComponent />
        <ExploreComponent />
        <LatestRecipesComponent />
        {/* <TestFlexBox /> */}
        {/* <h1>Home Page</h1> */}
        {/* <TestComponent /> */}

      </Container>
    </>

  )
}

export default HomePage;