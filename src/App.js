import "./App.css";
import LandingPage from "./component/mainPage";
import Features from "./component/Features";
import Powerfull from "./component/Powerfull";
import PricingPlans from "./component/PricingPlans";
import { Provider } from "react-redux";
import store from "./store";
// import ProfilePage from "./component/HeroSectionRoot/ProfilePage";
import { QueryResolver } from "./component/QueryResolver";
import HeroSectionRoot from "./component/HeroSectionRoot";

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
      <HeroSectionRoot />
      <Features />
      <Powerfull />
      <PricingPlans />
      {/* <ProfilePage /> */}
      <QueryResolver />
      
    </Provider>
  );
}

export default App;
