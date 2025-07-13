import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import FacilitiesSection from "../components/FacilitiesSection";
import BlogSection from "../components/BlogSection";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <FacilitiesSection />
      <BlogSection />
      <WhyChooseUs />
    </>
  );
};

export default Home;
