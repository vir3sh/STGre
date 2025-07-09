import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import panvelimage1 from "../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg"; // Placeholder for image import
import panvelimage2 from "../assets/events/panvel/Inaugration-Of-Panvel-Campus-700x500.jpg"; // Placeholder for image import
import panvelimage3 from "../assets/events/panvel/Inaugration-Of-Panvel-Campus-with-Managment-700x500.jpg"; // Placeholder for image import

const galleryData = {
  Preschool: {
    "2021-2023": [
      { src: panvelimage1, caption: "Annual Day 2021" },
      { src: panvelimage1, caption: "Sports Day 2022" },
    ],
    "2023-2024": [{ src: panvelimage1, caption: "Art Exhibition 2023" }],
    "2024-2025": [{ src: panvelimage1, caption: "Orientation Day 2024" }],
  },
  Primary: {
    "2021-2023": [{ src: panvelimage1, caption: "Group Activity 2021" }],
    "2023-2024": [{ src: panvelimage2, caption: "Science Fair 2024" }],
  },
  Secondary: {
    "2021-2023": [{ src: panvelimage3, caption: "Cultural Fest 2022" }],
    "2023-2024": [{ src: panvelimage1, caption: "Farewell 2024" }],
  },
  "CISCE Basketball Tournament 2024": [
    { src: panvelimage1, caption: "Opening Ceremony" },
    { src: panvelimage1, caption: "Final Match" },
  ],
  "Panvel Inauguration": [
    { src: panvelimage1, caption: "Ribbon Cutting" },
    { src: panvelimage1, caption: "Campus Tour" },
  ],
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState("Preschool");
  const [selectedYear, setSelectedYear] = useState("2021-2023");
  const [lightboxImage, setLightboxImage] = useState(null);

  const events = Object.keys(galleryData);
  const isGrouped =
    typeof galleryData[selectedEvent] === "object" &&
    !Array.isArray(galleryData[selectedEvent]);
  const years = isGrouped ? Object.keys(galleryData[selectedEvent]) : [];
  const images = isGrouped
    ? galleryData[selectedEvent][selectedYear] || []
    : galleryData[selectedEvent];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#541418] text-center mb-12">
          Events Gallery
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {events.map((event) => (
            <button
              key={event}
              onClick={() => {
                setSelectedEvent(event);
                setSelectedYear("2021-2023");
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                selectedEvent === event
                  ? "bg-[#541418] text-white"
                  : "bg-[#fcb900] text-[#541418]"
              }`}
            >
              {event}
            </button>
          ))}
        </div>

        {/* Year Filter (if grouped) */}
        {isGrouped && (
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  selectedYear === year
                    ? "bg-[#541418] text-white"
                    : "bg-gray-200 text-[#541418]"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-56 object-cover cursor-pointer"
                onClick={() => setLightboxImage(img)}
              />
              <div className="p-4 text-center text-[#541418] font-medium">
                {img.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <Dialog
            open={true}
            onClose={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          >
            <div className="relative max-w-4xl w-full mx-auto">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-2 right-2 text-white bg-[#541418] rounded-full p-2"
              >
                <X size={20} />
              </button>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="w-full h-auto rounded-xl"
              />
              <p className="text-white text-center mt-4 text-lg">
                {lightboxImage.caption}
              </p>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
}
