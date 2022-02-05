import React from "react";
// Add components below
import Hero from "../HeroSection/Hero";
import Navigation from "../Navigation/Navigation";
import Pricing from "../Pricing/Pricing";
import Statistics from "../Statistics/Statistics";
import Footer from "../Footer/Footer";

const Landing: React.FC = () => (
  <>
    <Navigation />
    <Hero />
    <Statistics />
    <Pricing />
    <Footer />
  </>
);

export default Landing;
