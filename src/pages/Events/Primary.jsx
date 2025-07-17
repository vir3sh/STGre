import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Masonry from "react-masonry-css";
import Breadcrumb from "../../components/Breadcrumb";

import img1 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (1).jpeg";
import img2 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (1).jpg";
import img3 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (2).jpeg";
import img4 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (2).jpg";
import img5 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (3).jpeg";
import img6 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (3).jpg";
import img7 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (4).jpeg";
import img8 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (4).jpg";
import img9 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (5).jpeg";
import img10 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (5).jpg";
import img11 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (6).jpeg";
import img12 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (6).jpg";
import img13 from "../../assets/events/primary/2021-2023/Children’s Day/childrens-day (7).jpg";
import independence1 from "../../assets/events/primary/2021-2023/independence/independence (1).jpg";
import independence2 from "../../assets/events/primary/2021-2023/independence/independence (2).jpg";
import independence3 from "../../assets/events/primary/2021-2023/independence/independence (3).jpg";
import independence4 from "../../assets/events/primary/2021-2023/independence/independence (4).jpg";
import interhousecarol1 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (1).jpeg";
import interhousecarol16 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (2).jpg";
import interhousecarol2 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (3).jpg";
import interhousecarol3 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (4).jpg";
import interhousecarol4 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (5).jpg";
import interhousecarol5 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (6).jpg";
import interhousecarol6 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (7).jpg";
import interhousecarol7 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (8).jpg";
import interhousecarol8 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (9).jpg";
import interhousecarol9 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (10).jpg";
import interhousecarol10 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (11).jpg";
import interhousecarol11 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (12).jpg";
import interhousecarol12 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (13).jpg";
import interhousecarol13 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (14).jpg";
import interhousecarol14 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (15).jpg";
import interhousecarol15 from "../../assets/events/primary/2021-2023/Inter-House Carol Singing Festival/inter-house-carol-singing-festival (1).jpg";
import mastermind from "../../assets/events/primary/2021-2023/Mastermind/mastermind.jpg";

const imageGroups = [
  {
    year: "2021–2023",
    events: [
      {
        name: "Children's Day ",
        images: [
          { src: img1, caption: "Opening Ceremony" },
          { src: img2, caption: "Track Events" },
          { src: img3, caption: "Track Events" },
          { src: img4, caption: "Track Events" },
          { src: img5, caption: "Track Events" },
          { src: img6, caption: "Track Events" },
          { src: img7, caption: "Track Events" },
          { src: img8, caption: "Track Events" },
          { src: img9, caption: "Track Events" },
          { src: img10, caption: "Track Events" },
          { src: img11, caption: "Track Events" },
          { src: img12, caption: "Track Events" },
          { src: img13, caption: "Track Events" },
        ],
      },
      {
        name: "Independence Day",
        images: [
          { src: independence1, caption: "Flag Hoisting" },
          { src: independence2, caption: "Cultural Dance" },
          { src: independence3, caption: "Cultural Dance" },
          { src: independence4, caption: "Cultural Dance" },
        ],
      },
      {
        name: "Inter-House Carol Singing Festival",
        images: [
          { src: interhousecarol1, caption: "Flag Hoisting" },
          { src: interhousecarol10, caption: "Cultural Dance" },
          { src: interhousecarol11, caption: "Cultural Dance" },
          { src: interhousecarol12, caption: "Cultural Dance" },
          { src: interhousecarol13, caption: "Cultural Dance" },
          { src: interhousecarol14, caption: "Cultural Dance" },
          { src: interhousecarol15, caption: "Cultural Dance" },
          { src: interhousecarol2, caption: "Cultural Dance" },
          { src: interhousecarol3, caption: "Cultural Dance" },
          { src: interhousecarol4, caption: "Cultural Dance" },
          { src: interhousecarol5, caption: "Cultural Dance" },
          { src: interhousecarol6, caption: "Cultural Dance" },
          { src: interhousecarol7, caption: "Cultural Dance" },
          { src: interhousecarol8, caption: "Cultural Dance" },
          { src: interhousecarol9, caption: "Cultural Dance" },
        ],
      },
      {
        name: "Mastermind",
        images: [{ src: mastermind, caption: "Flag Hoisting" }],
      },
      {
        name: "Welcome back ot school",
        images: [
          { src: img3, caption: "Flag Hoisting" },
          { src: img4, caption: "Cultural Dance" },
        ],
      },
    ],
  },
  {
    year: "2023–2024",
    events: [
      {
        name: "Advertising Campaign",
        images: [
          { src: img5, caption: "Inauguration" },
          { src: img1, caption: "Match Day 1" },
        ],
      },
      {
        name: "Annual Athletic Meet",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Annual Concert",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Bastille Day ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Best of of Waste ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Christmas Programme ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Cookery Festival ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Cynosure ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Economics quiz ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "English elocution ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "English Essay Writing Festival ",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "English Handwriting Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Farewell assembly",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Festival Of Songs",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "French Handwriting Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Gregorian Day",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Hindi Elocution",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Hindi Essay Writing Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Hindi Handwriting Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Independence Day",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Inter-house Debate",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Inter-house G.K. Quiz",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Inter-House Patriotic Singing Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Inter-house Rangoli Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Investiture ceremony",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Marathi Handwriting Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Mind Your Language",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Photography Festival",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Psychology quiz",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Republic day celebration",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Sci Fi Quiz",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Swachhata Pakhwada",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
      {
        name: "Website designing",
        images: [
          { src: img2, caption: "Robotics Showcase" },
          { src: img3, caption: "Student Projects" },
        ],
      },
    ],
  },
];

export default function Primary() {
  const [selectedYear, setSelectedYear] = useState(imageGroups[0].year);
  const [selectedEvent, setSelectedEvent] = useState(
    imageGroups[0].events[0].name
  );
  const [currentIndex, setCurrentIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const selectedGroup = imageGroups.find((g) => g.year === selectedYear);
  const selectedEventImages =
    selectedGroup?.events.find((e) => e.name === selectedEvent)?.images || [];

  const filteredEvents =
    selectedGroup?.events.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handleKeyDown = (e) => {
    if (currentIndex !== null) {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % selectedEventImages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex(
          (prev) =>
            (prev - 1 + selectedEventImages.length) % selectedEventImages.length
        );
      } else if (e.key === "Escape") {
        setCurrentIndex(null);
      }
    }
  };

  useEffect(() => {
    if (currentIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Mouse drag handlers for event slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const handleMouseDown = (e) => {
      isDragging.current = true;
      slider.classList.add("cursor-grabbing");
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };
    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };
    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5; // scroll-fast
      slider.scrollLeft = scrollLeft.current - walk;
    };
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);
    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Breadcrumb title="Primary" />
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Year Filter */}
          <h2 className="text-lg sm:text-xl font-semibold text-center text-[#541418] mb-3">
            Select Academic Year
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 px-2">
            {imageGroups.map((group) => (
              <button
                key={group.year}
                onClick={() => {
                  setSelectedYear(group.year);
                  setSelectedEvent(group.events[0].name);
                  setSearchTerm("");
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold border transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap
                  ${
                    selectedYear === group.year
                      ? "bg-[#541418] text-white border-transparent"
                      : "bg-white text-[#541418] border-[#541418] hover:bg-[#f5f5f5]"
                  }`}
              >
                {group.year}
              </button>
            ))}
          </div>

          {/* Event Filter Header with Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 px-2 gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl font-semibold text-[#541418]">
              Choose an Event
            </h2>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#541418] text-sm"
            />
          </div>

          {/* Event Filter with Horizontal Slider, Hidden Scrollbar, and Arrow Buttons */}
          <div className="relative mb-10 px-2">
            {/* Left Arrow */}
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => {
                const container = document.getElementById("event-scroll");
                if (container)
                  container.scrollBy({ left: -200, behavior: "smooth" });
              }}
              className="hidden sm:flex absolute  left-0 top-1/2 -translate-y-1/2 z-10 bg-[#541418] text-white p-2 rounded-full hover:bg-[#6b1f1f] shadow"
              style={{ pointerEvents: "auto" }}
            >
              <ArrowLeft size={18} />
            </button>
            <div
              id="event-scroll"
              ref={sliderRef}
              className="flex overflow-x-auto gap-2 sm:gap-3 mx-9 px-6 scrollbar-hide no-scrollbar cursor-grab select-none"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filteredEvents.map((event) => (
                <button
                  key={event.name}
                  onClick={() => setSelectedEvent(event.name)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap
                    ${
                      selectedEvent === event.name
                        ? "bg-[#541418] text-white border-transparent"
                        : "bg-white text-[#541418] border-[#541418] hover:bg-[#f5f5f5]"
                    }`}
                >
                  {event.name}
                </button>
              ))}
            </div>
            {/* Right Arrow */}
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => {
                const container = document.getElementById("event-scroll");
                if (container)
                  container.scrollBy({ left: 200, behavior: "smooth" });
              }}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#541418] text-white p-2 rounded-full hover:bg-[#6b1f1f] shadow"
              style={{ pointerEvents: "auto" }}
            >
              <ArrowRight size={18} />
            </button>
            <style>{`
              #event-scroll::-webkit-scrollbar { display: none; }
              #event-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
          </div>

          {/* Image Grid */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto gap-6"
            columnClassName="my-masonry-grid_column"
          >
            {selectedEventImages.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg mb-6 cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover hover:opacity-90 transition"
                />
                {/* <div className="p-3 text-[#541418] font-medium text-center">
                  {img.caption}
                </div> */}
              </div>
            ))}
          </Masonry>

          {/* Lightbox */}
          {currentIndex !== null && (
            <Dialog
              open={true}
              onClose={() => setCurrentIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            >
              <div className="relative w-full max-w-4xl mx-auto px-4">
                <button
                  onClick={() => setCurrentIndex(null)}
                  className="absolute top-4 right-4 text-white bg-[#541418] hover:bg-[#6b1f1f] rounded-full p-2 z-50"
                >
                  <X size={22} />
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + selectedEventImages.length) %
                        selectedEventImages.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#541418] hover:bg-[#6b1f1f] text-white p-2 rounded-full"
                >
                  <ArrowLeft size={22} />
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex + 1) % selectedEventImages.length
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#541418] hover:bg-[#6b1f1f] text-white p-2 rounded-full"
                >
                  <ArrowRight size={22} />
                </button>
                <img
                  src={selectedEventImages[currentIndex].src}
                  alt={selectedEventImages[currentIndex].caption}
                  className="w-full h-auto rounded-xl shadow-lg max-h-[80vh] object-contain mx-auto"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {selectedEventImages[currentIndex].caption}
                </p>
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </>
  );
}
