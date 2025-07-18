import React, { useState, useEffect } from "react";
import ICSE from "../assets/results/2024/ICSE-BANNER_2024.jpg";
import ICS from "../assets/results/2024/ISC-BANNER-HSC.jpg";
import ISCTOPPER from "../assets/results/2024/ISC-toppers.jpeg";

// Class X photos
const photosStandardX = [
  {
    id: 1,
    src: ICSE,
    alt: "ICSE 2024 Results",
    year: "2024",
  },
];

// Science Category
const photosStandardXII = [
  {
    id: 2,
    src: ICS,
    alt: "ICS year results",
    year: "2024",
    category: "Science",
  },
  {
    id: 3,
    src: ISCTOPPER,
    alt: "2024 ICS Toppers from Mumbai",
    year: "2024",
    category: "Science",
  },
];

const Result2024 = () => {
  const [selectedStandard, setSelectedStandard] = useState("X");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentPhotos =
    selectedStandard === "X" ? photosStandardX : photosStandardXII;

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % currentPhotos.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  // Add keyboard event listener when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
    }
  }, [isModalOpen, currentImageIndex]);

  // Group Class XII photos by category
  const groupedXIIPhotos =
    selectedStandard === "XII"
      ? {
          Science: photosStandardXII.filter(
            (photo) => photo.category === "Science"
          ),
          Commerce: photosStandardXII.filter(
            (photo) => photo.category === "General"
          ),
          Humanity: photosStandardXII.filter(
            (photo) => photo.category === "Humanity"
          ),
        }
      : {};

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-3/12 w-full bg-white shadow-lg border-r-2 border-[#0000]">
          <div className="p-6">
            <h2
              className="text-2xl font-bold text-center mb-8"
              style={{ color: "#541418" }}
            >
              Results
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => setSelectedStandard("X")}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-[1.03] ${
                  selectedStandard === "X"
                    ? "text-white bg-[#541418] shadow-lg"
                    : "text-[#374151] bg-[#f3e9e8] hover:bg-[#e4d5d4] hover:shadow"
                }`}
                style={{
                  border: "2px solid #541418",
                }}
              >
                Standard X (2024)
              </button>

              <button
                onClick={() => setSelectedStandard("XII")}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-[1.03] ${
                  selectedStandard === "XII"
                    ? "text-white bg-[#541418] shadow-lg"
                    : "text-[#374151] bg-[#f3e9e8] hover:bg-[#e4d5d4] hover:shadow"
                }`}
                style={{
                  border: "2px solid #541418",
                }}
              >
                Standard XII (2024)
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-9/12 w-full p-6">
          <div className="mb-6">
            <h3
              className="text-3xl font-bold text-center"
              style={{ color: "#541418" }}
            >
              Standard {selectedStandard} Results
            </h3>
            <div
              className="h-1 w-32 mx-auto mt-4 rounded"
              style={{ backgroundColor: "#fcb100" }}
            ></div>
          </div>

          {/* Class X Photo Grid */}
          {selectedStandard === "X" && (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
              {currentPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4
                      className="font-semibold text-lg"
                      style={{ color: "#541418" }}
                    >
                      {photo.alt}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{photo.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Class XII Photo Grid with Categories */}
          {selectedStandard === "XII" && (
            <div className="space-y-8">
              {Object.entries(groupedXIIPhotos).map(([category, photos]) => (
                <div key={category} className="mb-8">
                  {/* <h4
                    className="text-sm font-bold mb-4 text-center bg-amber-200 rounded-4xl py-2 px-4 w-fit mx-auto"
                    style={{ color: "#541418" }}
                  >
                    {category} Stream
                  </h4> */}

                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    {photos.map((photo, photoIndex) => {
                      const globalIndex = photosStandardXII.findIndex(
                        (p) => p.id === photo.id
                      );
                      return (
                        <div
                          key={photo.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                          onClick={() => openModal(globalIndex)}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-4">
                            <h4
                              className="font-semibold text-lg"
                              style={{ color: "#541418" }}
                            >
                              {photo.alt}
                            </h4>
                            <div className="flex justify-between items-center mt-2">
                              <p className="text-sm text-gray-600">
                                {photo.year}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {currentPhotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No results available for Standard {selectedStandard}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 "
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-4 right-4 z-50 bg-white text-[#541418] rounded-full p-2 shadow hover:bg-gray-100 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Arrows */}
          {currentPhotos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 sm:p-4 z-50 transition-all"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 sm:p-4 z-50 transition-all"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image and Caption */}
          <div
            className="relative w-full max-w-3xl max-h-[90vh] mx-4 sm:mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhotos[currentImageIndex]?.src}
              alt={currentPhotos[currentImageIndex]?.alt}
              className="w-full h-auto max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-1">
                {currentPhotos[currentImageIndex]?.alt}
              </h4>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <p>{currentPhotos[currentImageIndex]?.year}</p>
                  {/* {selectedStandard === "XII" && (
              <span className="px-2 py-0.5 bg-white text-[#541418] rounded-full text-xs">
                {currentPhotos[currentImageIndex]?.category}
              </span>
            )} */}
                </div>
                <p>
                  {currentImageIndex + 1} of {currentPhotos.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result2024;
