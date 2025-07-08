import React from "react";
import flag from "../assets/FLAG-CREST-MOTO.jpg";
const FlagCrest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#541418] to-[#8B1538] mb-4">
            Flag, Crest & Motto
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#541418] to-[#8B1538] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Discover the symbolic heritage and values that define our
            institution's identity
          </p>
        </div>

        {/* FLAG Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#541418]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={flag}
                    alt="School Flag displaying the emblem in red against white background"
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#541418] to-[#8B1538] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#541418]">
                    School Flag
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Our school flag stands as a beacon of our institutional
                    pride, featuring our distinctive emblem rendered in bold red
                    against a pristine white background. This striking contrast
                    symbolizes the purity of knowledge illuminated by the
                    passion for learning.
                  </p>
                  <p className="text-lg">
                    The school proudly displays four House flags representing
                    our student communities:{" "}
                    <span className="font-semibold text-blue-600">AQUA</span>,{" "}
                    <span className="font-semibold text-green-600">FAUNA</span>,{" "}
                    <span className="font-semibold text-emerald-600">
                      FLORA
                    </span>
                    , and{" "}
                    <span className="font-semibold text-amber-600">TERRA</span>.
                    Each flag bears its unique House motto, fostering a spirit
                    of healthy competition and unity among our students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CREST Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-l from-[#541418]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src="/api/placeholder/600/400"
                    alt="School Crest showing the flame at the end of a pencil design"
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#541418] to-[#8B1538] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#541418]">
                    School Crest
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    The school crest embodies our core philosophy through its
                    powerful symbolism. The flame at the tip of a pencil
                    represents the transformative power of education – where
                    knowledge ignites the flame of wisdom and understanding.
                  </p>
                  <p className="text-lg">
                    This elegant design captures the essence of our educational
                    mission: that through dedicated learning and scholarly
                    pursuit, each student's potential is kindled into a bright
                    flame of enlightenment that will guide them throughout their
                    lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOTTO Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#541418] to-[#8B1538] rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <h2 className="text-3xl font-bold">School Motto</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-3xl font-bold mb-6 tracking-wide">
                "EDUCATION FOR ENLIGHTENMENT"
              </p>

              <div className="w-32 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>

              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                This motto encapsulates our fundamental belief that education
                transcends mere knowledge acquisition. It is the pathway to
                enlightenment – a journey that illuminates minds, opens hearts,
                and transforms lives. Through our commitment to holistic
                education, we guide each student toward their own moment of
                enlightenment, empowering them to become thoughtful leaders and
                compassionate global citizens.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 p-8 bg-gray-100 rounded-xl">
          <p className="text-gray-600 italic text-lg">
            "In the flame of knowledge, we find the light of wisdom"
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlagCrest;
