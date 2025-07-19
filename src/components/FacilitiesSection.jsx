import React from "react";
import { Link } from "react-router-dom";
import slab from "../assets/s-lab-2.jpg";
import Infirmary from "../assets/Infirmary.jpg";
import music from "../assets/music-room.jpg";
import auditorium from "../assets/auditorium-2-200x300.jpg";
import library from "../assets/Library-1024x731.jpg";
import computer from "../assets/computer-lab-1.jpg";
import { useState, useEffect } from "react";
const facilities = [
  {
    title: "Science Lab",
    description:
      "Well-equipped labs for Physics, Chemistry, and Biology experiments, designed to spark inquiry and hands-on scientific learning",
    image: slab,
    tag: "Academics",
  },
  {
    title: "Infirmary",
    description:
      "A fully equipped medical room with a qualified nurse to handle emergencies and ensure students' health and well-being on campus",
    image: Infirmary,
    tag: "Health & Wellness",
  },
  {
    title: "Computer Lab",
    description:
      "Modern computer labs with fast internet, up-to-date software to build digital skills and computational thinking",
    image: computer,
    tag: "Technology",
  },
  {
    title: "Auditorium",
    description:
      "A spacious, well-equipped auditorium for assemblies, cultural programs, seminars, and inter-school events, enhancing student expression and confidence",
    image: auditorium,
    tag: "Co-Curricular",
  },
  {
    title: "Music Room",
    description:
      "An acoustically designed space for vocal and instrumental training, nurturing creativity and musical expression",
    image: music,
    tag: "Arts",
  },
  {
    title: "Library",
    description:
      "A well-stocked library with academic, reference, magazine, and periodical collections to instill a love of reading",
    image: library,
    tag: "Knowledge Hub",
  },
];

const FacilitiesSection = () => {
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

    const element = document.getElementById("facilities-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="facilities-section" className="py-16 bg-[#541418]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h4 className="text-orange-500 uppercase font-bold tracking-widest mb-2">
            Our Facilities
          </h4> */}
          <h2 className="text-4xl font-bold text-white">
            Our <span className="text-yellow-500">Facilities</span>
          </h2>
          <p className="text-[#ddd] max-w-xl mx-auto mt-2">
            Discover the infrastructure that supports academic excellence,
            creativity, and safety at every level.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <a
              href="#."
              key={index}
              className={`bg-white border border-[#fcb900] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
              style={{
                borderRadius: "25px 25px 25px 0px",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-yellow-400 text-[#541418] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {facility.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#541418] group-hover:text-[#fcb900] transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {facility.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/facilities"
            className={`inline-block bg-[#fcb900] hover:bg-[#e0a200] text-white px-8 py-3 rounded-3xl transition-all font-semibold shadow-lg transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            Show More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
