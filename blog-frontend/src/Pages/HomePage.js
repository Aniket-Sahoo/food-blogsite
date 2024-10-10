import MyNavbar from "../Components/MyNavbar";
import TestNavbar from "../Components/TestNavBar";
import TestNavbar2 from "../Components/TestNavbar2";
import TestFlexBox from "../Components/TestFlexBox";
import TopRecipesComponent from "../Components/HomePageComponents/TopRecipesComponent/TopRecipesComponent";
import ExploreComponent from "../Components/HomePageComponents/ExploreComponent/ExploreComponent"; 

const HomePage = () => {
  return (
    <div className="col-xs-12 col-md-12">
      {/* <MyNavbar /> */}
      {/* <TestNavbar /> */}
      <TestNavbar2 />
      <TopRecipesComponent />
      <ExploreComponent />
      {/* <TestFlexBox /> */}
      {/* <h1>Home Page</h1> */}
    </div>
  )
}

export default HomePage;