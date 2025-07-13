import React from "react";
import bgHero from "../assets/stgregorious-hero-section.png"; // replace with your background image
import { BookOpen, Users, Library } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[600px] text-white"
      style={{
        backgroundImage: `url(${bgHero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Text */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="uppercase tracking-widest text-yellow-400 font-bold text-sm mb-2">
            Welcome to St Gregorios!
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Start Your Beautiful <br />
            And <span className="text-yellow-400">Bright</span> Future
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-[#541418] px-6 py-3 font-semibold transition-all duration-300"
              style={{ borderRadius: "50px 50px 50px 0px" }}
            >
              About More →
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-[#541418] px-6 py-3 font-semibold transition-all duration-300"
              style={{ borderRadius: "50px 50px 50px 0px" }}
            >
              Learn More →
            </button>
          </div>
        </div>

        {/* Optional Right Side (Empty or Image) */}
        <div className="w-full lg:w-1/2 hidden lg:block"></div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 mt-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {[
          {
            icon: <BookOpen size={28} />,
            title: "Scholarship Facility",
          },
          {
            icon: <Users size={28} />,
            title: "Skilled Lecturers",
          },
          {
            icon: <Library size={28} />,
            title: "Book Library Facility",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white text-[#541418] rounded-2xl shadow-lg p-6 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                It is a long established fact that a reader will be distracted.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
