import React from "react";
import accreditatio from "../assets/trust/accreditation-top.jpg";
import accreditation from "../assets/trust/accreditation.jpg";

const Accreditation = () => {
  return (
    <>
       <div className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-[#541418] mb-12">
            Accreditation
          </h1>

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="overflow-hidden rounded-xl w-full max-w-md transition-transform duration-300 hover:scale-105">
                <img
                  src={accreditatio}
                  alt="Accreditation Banner" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 space-y-6 text-gray-700 text-lg leading-relaxed">
              <h2 className="text-2xl font-bold text-[#541418]">
                Council for the Indian School Certificate Examinations
              </h2>
              <p>
                The school is affiliated with the CISCE and conducts public
                examinations in Std. 10 and Std. 12.
              </p>
              <p>
                <strong>
                  ICSE (Indian Certificate of Secondary Education):
                </strong>{" "}
                A two-year course covered in Std. 9 and Std. 10.
              </p>
              <p>
                <strong>ISC (Indian School Certificate):</strong> A two-year
                syllabus covered in Std. 11 and Std. 12 beyond the ICSE or its
                equivalent.
              </p>
            </div>
          </div>

          {/* Certificate Image (Responsive) */}
          <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-105 mx-auto w-full max-w-4xl px-4">
            <img
              src={accreditation}
              alt="CISCE Certificate"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accreditation;
