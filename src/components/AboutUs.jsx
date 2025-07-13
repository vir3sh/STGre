import React from "react";
import { Users, Globe } from "lucide-react";
import aboutusSection from "../assets/home-about-sec-1.png";
import phoneicon from "../assets/icon/phone.png"; // Replace with your phone icon path
const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: IMAGE AREA */}
        <div className="w-full h-full">
          <div className="w-full  bg-gray-100 rounded-2xl overflow-hidden relative group ">
            <img
              src={aboutusSection}
              alt="About Section"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="space-y-6">
          <h4 className="uppercase text-orange-500 font-bold text-sm tracking-wider">
            About Us
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold text-[#541418] leading-snug">
            Education for <span className="text-yellow-500">Enlightenment</span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At St. Gregorios High School, our aim is to provide children with a
            holistic education that encourages academic excellence, nurtures
            character and promotes a love for lifelong learning. We are
            committed to fostering an environment where every child feels safe,
            valued, and inspired to grow intellectually and personally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 text-orange-500 rounded-full shadow-sm">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#541418] text-lg">
                  Experienced Educators
                </h4>
                <p className="text-sm text-gray-600">
                  Our faculty is dedicated to shaping students with strong
                  values and academic excellence.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 text-yellow-500 rounded-full shadow-sm">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#541418] text-lg">
                  Global Vision
                </h4>
                <p className="text-sm text-gray-600">
                  We blend tradition with modern teaching methodologies to equip
                  our students with the knowledge, skills, and perspectives
                  needed to thrive in a rapidly evolving world. Our curriculum
                  encourages global awareness, critical thinking, and cultural
                  sensitivity—empowering learners to become responsible citizens
                  and future leaders on the international stage.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="/about-us"
              className="bg-[#fcb900] hover:bg-[#e0a200] text-white px-6 py-3 rounded-[50px_50px_50px_0px] transition-all font-semibold shadow-md"
            >
              Discover More →
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-full font-bold text-xl">
                <img src={phoneicon} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Now</p>
                <p className="text-[#541418] font-semibold text-lg">
                  +91 22 3511 2723
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
