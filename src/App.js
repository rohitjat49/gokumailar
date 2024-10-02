import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./component/HeroSection";
import LandingPage from "./component/mainPage";
import Features from "./component/Features";
import Powerfull from "./component/Powerfull";
import PricingPlans from "./component/PricingPlans";
import { Provider } from "react-redux";
import store from "./store";
import ProfilePage from "./component/ProfilePage";
import { QueryResolver } from "./component/QueryResolver";

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
      <HeroSection />
      <Features />
      <Powerfull />
      <PricingPlans />
      <ProfilePage />
      <QueryResolver />
    </Provider>
  );
}

export default App;
