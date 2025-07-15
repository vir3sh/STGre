import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import whychoose from "../assets/homw-whychoose-us.png";
// import backgroundImage from "../assets/whychooseus-bg.jpg";
import teacher from "../assets/teacher.png";
import moderncir from "../assets/moderncir.png";
import skill from "../assets/skill.png";
import global from "../assets/global.png";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("why-choose-us-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: teacher,
      isImage: true,
      title: "Expert Faculty",
    },
    {
      icon: moderncir,
      isImage: true,
      title: "Modern Curriculum",
    },
    {
      icon: global,
      isImage: true,
      title: "Global Perspective",
    },
    {
      icon: skill,
      isImage: true,
      title: "Skill Development",
    },
  ];

  return (
    <section
      id="why-choose-us-section"
      className="bg-no-repeat bg-[#541418] bg-cover bg-center bg-fixed text-white py-20 relative overflow-hidden"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Left Content */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h4 className="uppercase text-orange-400 font-semibold tracking-[0.2em] text-xs mb-2 relative inline-block">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            We Are Expert &{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Do Our Best
            </span>{" "}
            For Your Goal
          </h2>

          <p className="text-[#b8c5d6] mb-6 text-base leading-relaxed max-w-md text-justify">
            Since 1992, St. Gregorios High School has stood out for academic
            excellence, modern facilities, and a nurturing environment that
            builds character and global readiness.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm text-[#031B4E] p-4 rounded-2xl flex items-center gap-4 shadow-lg border border-white/20 hover:shadow-orange-400/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-4 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  {feature.isImage ? (
                    <img
                      src={feature.icon}
                      alt="icon"
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <feature.icon size={66} className="text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base mb-1 text-[#031B4E] group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h4>
                  {/* <p className="text-sm text-gray-600 leading-snug">
                    {feature.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`relative transform transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="relative group">
            {/* <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-[90px_10px_90px_10px] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div> */}

            <img
              src={whychoose}
              alt="Why Choose Us"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
