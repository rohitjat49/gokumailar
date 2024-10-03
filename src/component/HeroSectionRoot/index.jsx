import React from "react";
import HeroSection from "./HeroSection";
import ProfilePage from "./ProfilePage";
import { useUserLogin } from "../../store/auth/hook";

const HeroSectionRoot = () => {
  const authStatus = useUserLogin();
  return <>{authStatus.status ? <ProfilePage /> : <HeroSection />}</>;
};

export default HeroSectionRoot;
