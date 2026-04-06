import React from "react";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import Future from "../components/Future";
import Contact from "../components/Contact";
import AboutSection from "../components/AboutSection";

const Home = () => {
  console.log("Home component rendered");
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <OurServices />
      <Testimonials />
      <Future />
      <Contact />
    </div>
  );
};

export default Home;
