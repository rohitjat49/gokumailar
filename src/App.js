import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/mainPage";
import HeroSection from "./component/HeroSection";
import LandingPage from "./component/mainPage";
import Features from "./component/Features";
import Powerfull from "./component/Powerfull";
import PricingPlans from "./component/PricingPlans";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      {/* {<Navbar />} */}
      <LandingPage />
      <HeroSection />
      <Features />
      <Powerfull />
      <PricingPlans />
    </Provider>
  );
}

export default App;
