import React from "react";
// Add components below
import Hero from "../HeroSection/Hero";
import Navigation from "../Navigation/Navigation";

const Landing: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
    </React.Fragment>
  );
};

export default Landing;
