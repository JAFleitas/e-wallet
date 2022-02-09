import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// Add components below
import Hero from "./Body/Hero";
import Navigation from "./Body/Navigation";
import Footer from "./Body/Footer";
import Testimonials from "./Body/Testimonials";
import Features from "./Body/Features";

const Landing: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <Testimonials />
      <Features />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
