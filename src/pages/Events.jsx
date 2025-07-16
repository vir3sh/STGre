import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import panvelimage1 from "../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg";
import panvelimage2 from "../assets/events/panvel/Inaugration-Of-Panvel-Campus-700x500.jpg";
import panvelimage3 from "../assets/events/panvel/Inaugration-Of-Panvel-Campus-with-Managment-700x500.jpg";

const galleryData = [
  {
    name: "Preschool",
    slug: "preschool",
    image: panvelimage1,
    caption: "Preschool Annual Day Celebrations",
  },
  {
    name: "Primary",
    slug: "primary",
    image: panvelimage2,
    caption: "Primary Section Cultural Fest ",
  },
  {
    name: "Secondary",
    slug: "secondary",
    image: panvelimage3,
    caption: "Secondary Cultural Fest ",
  },
  {
    name: "CISCE Basketball Tournament 2024",
    slug: "cisce-basketball-tournament-2024",
    image: panvelimage1,
    caption: "CISCE Zonal Basketball Tournament",
  },
  {
    name: "Panvel Inauguration",
    slug: "panvel-inauguration",
    image: panvelimage2,
    caption: "Inauguration of Panvel Campus",
  },
];

export default function EventsGallery() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#541418] text-center mb-12">
          Events Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.map((event, index) => (
            <Link key={index} to={`/events/${event.slug}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-56 object-cover cursor-pointer"
                  // onClick={(e) => {
                  //   e.preventDefault(); // Prevent lightbox on link click
                  //   setLightboxImage(event);
                  // }}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-[#541418] text-center mb-1">
                    {event.name}
                  </h2>
                  <p className="text-sm text-center text-gray-600">
                    {event.caption}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Lightbox */}
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
                src={lightboxImage.image}
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
