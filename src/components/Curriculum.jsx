import React from "react";
import preprimary from "../assets/preprimary.jpg";
import primary from "../assets/primary.jpg";
import secondary from "../assets/secondary.jpeg";
import isc from "../assets/isc.jpeg";

const kids = [
  {
    name: "Pre‑Primary Section",
    img: preprimary,
    link: "#",
    bg: "bg-purple-100",
  },
  {
    name: "Primary Section",
    img: primary,
    link: "#",
    bg: "bg-yellow-100",
  },
  {
    name: "Secondary Section",
    img: secondary,
    link: "#",
    bg: "bg-green-100",
  },
  {
    name: "ISC Section",
    img: isc,
    link: "#",
    bg: "bg-pink-100",
  },
];

const Curriculum = () => {
  return (
    <section className="bg-[#541418] text-white py-16 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 sm:mb-8">
          Guiding Students from Pre-Primary to ISC Excellence
        </h1>

        {/* Paragraphs */}
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-justify sm:text-center">
          The School follows the Curriculum designed by the CISCE. It endeavours
          to provide a strong foundation at the elementary level and to
          facilitate upward mobility for students.
        </p>

        <p className="text-base sm:text-lg md:text-xl mb-8 text-justify">
          The school trains students to appear for the ICSE and the ISC
          Examination. The academic session is from March to February comprising
          two terms. For purposes of curricular organization, the school is
          divided into four sections:
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#curriculum-cards"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition"
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Cards */}
        <div
          id="curriculum-cards"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {kids.map((kid, index) => (
            <a
              key={index}
              href={kid.link}
              className={`group relative block rounded-[50px_50px_50px_0px] overflow-hidden ${kid.bg} shadow-lg transition-transform hover:scale-105`}
            >
              <img
                src={kid.img}
                alt={kid.name}
                className="w-full h-64 sm:h-72 object-cover rounded-[50px_50px_50px_0px] transition-all duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-center">
                <h3 className="text-white text-base sm:text-lg font-semibold">
                  {kid.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
