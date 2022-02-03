import React from "react";
// Add components below
import Hero from "../HeroSection/Hero";
import Navigation from "../Navigation/Navigation";
import NewsLetter from "../Newsletter/Newsletter";
import Statistics from "../Statistics/Statistics";
import Footer from "../Footer/Footer";

const Landing: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <Statistics />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
