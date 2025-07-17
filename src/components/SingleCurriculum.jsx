import React, { useState, useEffect } from "react";
import { Users, Globe } from "lucide-react";

const SingleCurriculum = ({ image, title, text1, text2 }) => {
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

    const element = document.getElementById("about-us-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-us-section" className="py-10 bg-white overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: IMAGE AREA */}
        <div
          className={`w-full h-full max-w-full rounded-[50px_50px_50px_0px] transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <img src={image} className="rounded-[50px_50px_50px_0px]" alt="" />
        </div>

        {/* RIGHT: CONTENT */}
        <div
          className={`space-y-6 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* <h4 className="uppercase text-orange-500 font-bold text-sm tracking-wider">
            About Us
          </h4> */}

          <h2 className="text-3xl md:text-4xl font-bold text-[#541418] leading-snug">
            {title}
          </h2>

          <p className="text-gray-700 text-[16px] leading-relaxed text-justify">
            {text1}
          </p>
          <p className="text-gray-700 text-[16px]  leading-relaxed text-justify">
            {text2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCurriculum;
