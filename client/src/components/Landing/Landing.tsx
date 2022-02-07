import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// Add components below
import Hero from "../HeroSection/Hero";
import Navigation from "../Navigation/Navigation";
import Pricing from "../Pricing/Pricing";
import Statistics from "../Statistics/Statistics";
import Footer from "../Footer/Footer";

const Landing: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <Statistics />
      <Pricing />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
