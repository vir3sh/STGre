import React, { useState, useEffect, useRef } from "react";

const SecondCurriculum = ({ image, title, text1, text2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-10 bg-white overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* RIGHT: IMAGE (comes first on mobile) */}
        <div
          className={`w-full h-full max-w-full rounded-[50px_50px_50px_0px] transition-all duration-1000 ease-out transform 
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } 
            order-1 lg:order-2`}
        >
          <img
            src={image}
            alt="Curriculum Visual"
            className="rounded-[50px_50px_50px_0px] w-full object-cover"
          />
        </div>

        {/* LEFT: TEXT CONTENT */}
        <div
          className={`space-y-6 transition-all duration-1000 ease-out delay-300 transform 
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } 
            order-2 lg:order-1`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#541418] leading-snug">
            {title}
          </h2>

          <p className="text-gray-700 text-[16px] leading-relaxed text-justify">
            {text1 || ""}
          </p>
          <p className="text-gray-700 text-[16px] leading-relaxed text-justify">
            {text2 || ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondCurriculum;
  