import TestNavbar from "../Components/TestNavBar";
import TestNavbar2 from "../Components/TestNavbar2";
import TestFlexBox from "../Components/TestFlexBox";
import TopRecipesComponent from "../Components/HomePageSections/TopRecipesComponent/TopRecipesComponent";
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