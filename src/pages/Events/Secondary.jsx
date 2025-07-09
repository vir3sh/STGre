import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import Masonry from "react-masonry-css";
import img1 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg"; // Placeholder for image import
import img2 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg"; // Placeholder for image import
import img3 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg"; // Placeholder for image import
import img4 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg"; // Placeholder for image import
import img5 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg"; // Placeholder for image import

const images = [
  { src: img1, caption: "Opening Ceremony" },
  { src: img2, caption: "Basketball Match" },
  { src: img3, caption: "Award Distribution" },
  { src: img4, caption: "Cheering Squad" },
  { src: img5, caption: "Closing Ceremony" },
];

export default function Secondary() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#541418] text-center mb-8">
          CISCE Basketball Tournament 2024
        </h1>

        {/* Masonry Gallery */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-6"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg mb-6 cursor-pointer"
              onClick={() => setLightboxImage(img)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full object-cover hover:opacity-90 transition"
              />
              <div className="p-3 text-[#541418] font-medium text-center">
                {img.caption}
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox */}
        {lightboxImage && (
          <Dialog
            open={true}
            onClose={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          >
            <div className="relative max-w-3xl w-full mx-auto px-4">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-2 right-2 text-white bg-[#541418] rounded-full p-2 z-50"
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
