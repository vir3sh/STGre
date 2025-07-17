import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  Award,
  MapPin,
} from "lucide-react";

import img1 from "../assets/gregorianmun1.jpg";
import img2 from "../assets/gregorianmun2.jpg";
import img3 from "../assets/gregorianmun3.jpg";
import img4 from "../assets/gregorianmun4.jpg";
const images = [img1, img2, img3, img4];

const committees = [
  {
    name: "Prime Minister's Scholarship Scheme (PMSS)",
    agenda:
      "Discussing the implementation of the New National Education Policy.",
    category: "Education",
  },
  {
    name: "All India Political Party Meet (AIPPM)",
    agenda:
      "Discussion on Electoral reforms with special emphasis on 'One Nation One Election' Policy.",
    category: "Politics",
  },
  {
    name: "Lok Sabha",
    agenda: "Discussing places of worship act of 1991 and its applications.",
    category: "Governance",
  },
  {
    name: "International Olympic Committee (IOC)",
    agenda: "Question of including Esports as a part of the Olympics.",
    category: "Sports",
  },
  {
    name: "Disarmament and International Security Committee (DISEC)",
    agenda:
      "Impact of Private Military Security Contractors on Global Security.",
    category: "Security",
  },
  {
    name: "United Nations Environment Programme (UNEP)",
    agenda: "Dealing with implications of a heating world.",
    category: "Environment",
  },
  {
    name: "United Nations Security Council (UNSC)",
    agenda:
      "Dealing with the Israel-Palestine conflict taking learning from the Arthashastra.",
    category: "Security",
  },
  {
    name: "Special Political and Decolonization Committee (SPECPOL)",
    agenda: "Strengthening International Cooperation in space exploration.",
    category: "Space",
  },
  {
    name: "Influencer's Summit",
    agenda: "Discussing the influence of social media on Mental Health.",
    category: "Social Media",
  },
  {
    name: "India Inc.",
    agenda:
      "Analysing India's journey to become a Cashless Economy: Problems and Prospects.",
    category: "Economics",
  },
  {
    name: "United Nations General Assembly (UNGA)",
    agenda:
      "Discussing the introduction of multiple official languages in the United Nations.",
    category: "International",
  },
  {
    name: "World Bank",
    agenda: "Dealing with the financial and economic aftermath of COVID-19.",
    category: "Finance",
  },
  {
    name: "Fédération Internationale de Football Association (FIFA)",
    agenda: "Discussing the Qualifying Format for FIFA 2026.",
    category: "Sports",
  },
];

const GregorianMUN = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  let startX = 0;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e) => {
    startX = e.clientX;
  };

  const handleMouseUp = (e) => {
    const endX = e.clientX;
    if (endX - startX > 50) {
      handlePrev();
    } else if (startX - endX > 50) {
      handleNext();
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Education: "bg-[#fcb100] text-[#541418]",
      Politics: "bg-[#fcb100] text-[#541418]",
      Governance: "bg-[#fcb100] text-[#541418]",
      Sports: "bg-[#fcb100] text-[#541418]",
      Security: "bg-[#fcb100] text-[#541418]",
      Environment: "bg-[#fcb100] text-[#541418]",
      Space: "bg-[#fcb100] text-[#541418]",
      "Social Media": "bg-[#fcb100] text-[#541418]",
      Economics: "bg-[#fcb100] text-[#541418]",
      International: "bg-[#fcb100] text-[#541418]",
      Finance: "bg-[#fcb100] text-[#541418]",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Gregorian <span className="text-[#fcb100]">M.U.N</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            St. Gregorios High School, in collaboration with India's
            International Movement to Unite Nations (I.I.M.U.N.), conducted a
            transformative experience for young diplomats.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Image Slider */}
          <div className="relative">
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-2xl group"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              ref={sliderRef}
            >
              <img
                src={images[currentIndex]}
                alt="MUN Event"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About the Event
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This MUN aimed to enhance student skills for future success,
                offering personalized and dynamic committees. Outstanding
                delegates received awards and sponsored vouchers, making it a
                memorable experience for all participants.
              </p>
            </div>
          </div>

          {/* Right Committees List */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Committee Overview
              </h2>
              <p className="text-gray-600 mb-6">
                Explore the diverse range of committees that participated in the
                Gregorian MUN, each addressing crucial global issues and
                contemporary challenges.
              </p>

              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {committees.map((committee, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-blue-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                        {committee.name}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          committee.category
                        )}`}
                      >
                        {committee.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-medium text-gray-900">AGENDA:</span>{" "}
                      {committee.agenda}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GregorianMUN;
