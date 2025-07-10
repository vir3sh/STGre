import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Masonry from "react-masonry-css";
import img1 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg";
import img2 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-700x500.jpg";
import img3 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg";
import img4 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg";
import img5 from "../../assets/events/panvel/Inaugration-Of-Panvel-Campus-1St-day-of-the-school-700x500.jpg";
import Breadcrumb from "../../components/Breadcrumb";

const images = [
  { src: img1, caption: "Opening Ceremony" },
  { src: img2, caption: "Basketball Match" },
  { src: img3, caption: "Award Distribution" },
  { src: img4, caption: "Cheering Squad" },
  { src: img5, caption: "Closing Ceremony" },
];

export default function Secondary() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handleKeyDown = (e) => {
    if (currentIndex !== null) {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "Escape") {
        setCurrentIndex(null);
      }
    }
  };

  useEffect(() => {
    if (currentIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      <Breadcrumb title="Secondary" />
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-6xl mx-auto">
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
                onClick={() => setCurrentIndex(index)}
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
          {currentIndex !== null && (
            <Dialog
              open={true}
              onClose={() => setCurrentIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            >
              <div className="relative w-full max-w-4xl mx-auto px-4">
                {/* Close Button */}
                <button
                  onClick={() => setCurrentIndex(null)}
                  className="absolute top-4 right-4 text-white bg-[#541418] hover:bg-[#6b1f1f] rounded-full p-2 z-50"
                >
                  <X size={22} />
                </button>

                {/* Previous Button */}
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + images.length) % images.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#541418] hover:bg-[#6b1f1f] text-white p-2 rounded-full"
                >
                  <ArrowLeft size={22} />
                </button>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % images.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#541418] hover:bg-[#6b1f1f] text-white p-2 rounded-full"
                >
                  <ArrowRight size={22} />
                </button>

                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].caption}
                  className="w-full h-auto rounded-xl shadow-lg max-h-[80vh] object-contain mx-auto"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {images[currentIndex].caption}
                </p>
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </>
  );
}
