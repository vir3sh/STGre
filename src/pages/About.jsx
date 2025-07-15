import React from "react";
import SchoolHistory from "../components/SchoolHistory";
import Breadcrumb from "../components/Breadcrumb";
import VisionMissionSection from "../components/VisionMissionSection";
import TrustforAbout from "../components/TrustforAbout";
import WhyChooseUs from "../components/WhyChooseUs";
import PortfolioSection from "../components/PortfolioSection";

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <SchoolHistory />
      <VisionMissionSection />
      <TrustforAbout />
      <WhyChooseUs />
      <PortfolioSection />
    </>
  );
};

export default About;
