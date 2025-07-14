import React from "react";
import SchoolHistory from "../components/SchoolHistory";
import Breadcrumb from "../components/Breadcrumb";
import VisionMissionSection from "../components/VisionMissionSection";
import TrustforAbout from "../components/TrustforAbout";
import WhyChooseUs from "../components/WhyChooseUs";

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <SchoolHistory />
      <VisionMissionSection />
      <TrustforAbout />
      <WhyChooseUs />
    </>
  );
};

export default About;
