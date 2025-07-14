import React, { useState, useEffect } from "react";
import aboutusSection from "../assets/home-about-sec-2.webp";
import phoneicon from "../assets/icon/phone.png";
const SchoolHistory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const el = document.getElementById("about-us-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-us-section" className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: IMAGE */}
        <div
          className={`w-full h-full transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <img src={aboutusSection} alt="St Gregorios School" />
        </div>

        {/* RIGHT: TEXT */}
        <div
          className={`space-y-6 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#541418] leading-snug">
            Foundations of a Brighter Future
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            The Mar Gregorios Nursery and Kindergarten opened its doors to
            children in 1994. Just a year later, the school began operating
            formally with only a handful of students. From these humble
            beginnings, the institution has grown steadily, guided by vision and
            dedication. Today, the Main Building proudly hosts the Primary
            Section, with its grounds and basketball court standing as a symbol
            of perseverance and commitment.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            In 2012, the New Building became operational. What began as a
            five-storey structure has now evolved into a majestic seven-storey
            edifice. It houses the Pre-school, Secondary, and ISC Sections, and
            features state-of-the-art science and computer laboratories, a
            football turf built to international standards, and a dedicated play
            park that delights the youngest learners each day.
          </p>

          {/* CTA Section */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="/facilities"
              className="bg-[#fcb900] hover:bg-[#e0a200] text-white px-6 py-3 rounded-[50px_50px_50px_0px] transition-all font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Explore Our Facilities →
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-full font-bold text-xl">
                <img src={phoneicon} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Now</p>
                <p className="text-[#541418] font-semibold text-lg">
                  +91 22 35112723
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;
