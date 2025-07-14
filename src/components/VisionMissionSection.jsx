import React from "react";
import targetIcon from "../assets/mission-yellow.png";
import binocularsIcon from "../assets/vision.png";

const VisionMissionSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Mission Image (Mobile first) */}
        <div className="bg-white flex items-center justify-center p-6 md:p-10 min-h-[400px] md:order-2">
          <img
            src={targetIcon}
            alt="Target Icon"
            className="w-60 h-60 md:w-80 md:h-80 object-contain"
          />
        </div>

        {/* Mission Text */}
        <div className="bg-[#7b1113] text-white p-6 md:p-10 flex flex-col justify-center min-h-[400px] md:order-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-wide">
            Our Mission
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
            The Management and Staff of the school firmly believe that
            <strong> “BETTER INDIVIDUALS MAKE A BETTER COUNTRY”</strong> and
            strive to instill the necessary values in the students.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Our mission is to provide holistic education that fosters academic
            excellence, builds character, and promotes global citizenship
            through a nurturing and inclusive environment. We aim to empower
            every student with confidence and values for a successful future.
          </p>
        </div>

        {/* Vision Image (Mobile first) */}
        <div className="bg-white flex items-center justify-center p-6 md:p-10 min-h-[400px] md:order-3">
          <img
            src={binocularsIcon}
            alt="Binoculars Icon"
            className="w-60 h-60 md:w-80 md:h-80 object-contain"
          />
        </div>

        {/* Vision Text */}
        <div className="bg-[#fcb900] text-white p-6 md:p-10 flex flex-col justify-center min-h-[400px] md:order-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-wide">
            Our Vision
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
            To inspire and guide students toward academic and personal
            excellence, nurturing their curiosity and passion for lifelong
            learning.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            We envision our students as confident, compassionate leaders who
            will contribute meaningfully to society and shape a better world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
