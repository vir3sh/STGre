import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Globe,
  Leaf,
  Video,
  BookOpen,
  Recycle,
} from "lucide-react";

import eumind1 from "../assets/eumind1.jpg";
import eumind2 from "../assets/eumind2.jpg";
const images = [eumind1, eumind2];

const projectGroups = [
  {
    title: "Waste Management Solutions",
    description:
      "Comprehensive research on modern waste management techniques and their implementation in educational institutions.",
    icon: <Recycle className="w-5 h-5" />,
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Plastic Recycling Innovation",
    description:
      "Exploring innovative approaches to plastic recycling and sustainable alternatives for everyday use.",
    icon: <Recycle className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Ecological Companies",
    description:
      "Analysis of companies leading the sustainability movement and their impact on global environmental practices.",
    icon: <Leaf className="w-5 h-5" />,
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    title: "Sustainable Meal Practices",
    description:
      "Developing strategies for sustainable food consumption and promoting healthy eating habits in schools.",
    icon: <Users className="w-5 h-5" />,
    color: "bg-orange-100 text-orange-800",
  },
  {
    title: "Energy Conservation at School",
    description:
      "Implementing energy-saving measures and renewable energy solutions in educational environments.",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Minimizing Food Wastage",
    description:
      "Strategies to reduce food waste through community engagement and awareness campaigns.",
    icon: <BookOpen className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-800",
  },
];

const EUMind = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  let startX = 0;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

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

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-800 uppercase tracking-wide">
              International Collaboration
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-green-600">EU</span>MIND
          </h1>
          <p className="text-xl text-gray-600 mb-2 font-medium">
            Europe Meets India
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A collaborative platform fostering cross-border communication and
            learning among students, aimed at cultivating intercultural
            competencies through environmental awareness.
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
                alt="EUMind Project"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Navigation Buttons - Only show if more than 1 image */}
              {images.length > 1 && (
                <>
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
                </>
              )}

              {/* Dots Indicator - Only show if more than 1 image */}
              {images.length > 1 && (
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
              )}
            </div>

            {/* Project Impact */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Impact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Community Engagement:</strong> Students conducted
                    interviews and raised awareness on critical environmental
                    issues
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Cross-Cultural Learning:</strong> Direct
                    collaboration with European students fostered intercultural
                    competencies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Digital Documentation:</strong> Research findings
                    shared globally through online journal platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Project Groups */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Project Groups
              </h2>
              <p className="text-gray-600 mb-6">
                Six specialized groups collaborated on different aspects of the
                "Go Green" initiative, each contributing unique perspectives and
                research findings.
              </p>

              <div className="space-y-4">
                {projectGroups.map((group, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-r from-gray-50 to-green-50 hover:from-green-50 hover:to-green-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md border border-gray-100"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`p-2 rounded-lg ${group.color} transition-transform duration-300 group-hover:scale-110`}
                      >
                        {group.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-green-900 transition-colors duration-300">
                          {group.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed ml-11">
                      {group.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">
                    Successful international collaboration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">
                    Enhanced environmental awareness
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">
                    Developed intercultural competencies
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">
                    Created lasting digital documentation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EUMind;
