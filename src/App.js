import logo from './logo.svg';
import './App.css';
import Navbar from './component/mainPage';
import HeroSection from './component/HeroSection';
import LandingPage from './component/mainPage';
import Features from './component/Features';
import Powerfull from './component/Powerfull';
import PricingPlans from './component/PricingPlans';
import ProfilePage from './component/ProfilePage';

function App() {
  return (
   <>
   {/* <Navbar/> */}
   <LandingPage/>
   <HeroSection/>
   <Features/>
   <Powerfull/>
   <PricingPlans/>
   <ProfilePage/>
   </>
  );
}

export default App;
