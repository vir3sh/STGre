import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import imgPhilip from "../assets/trust/Philip-Mammen-Chairman.jpeg";
import imgBenny from "../assets/trust/Vice-chairman.jpeg";
import imgThamban from "../assets/trust/Thamban-John.jpeg";
import imgMolly from "../assets/trust/Untitled-design.png";
import imgRex from "../assets/trust/Rex-Kurian.jpeg";

const teamMembers = [
  { name: "Mr. Philip Mammen", position: "Hon. Chairman", image: imgPhilip },
  { name: "Mr. Benny Mathew", position: "Hon. Vice Chairman", image: imgBenny },
  {
    name: "Mr. Thamban K. John",
    position: "Hon. Secretary",
    image: imgThamban,
  },
  {
    name: "Ms. Molly George",
    position: "Hon. Joint Secretary",
    image: imgMolly,
  },
  { name: "Mr. Rex Kurian", position: "Hon. Treasurer", image: imgRex },
];

const TrustSlider = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#541418]">
        Trust Members
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded- overflow-hidden text-center p-12 transition-transform duration-300 hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-62 h-62 rounded-4xl object-cover mx-auto mb-4 border-4 border-[#541418]"
                />
                <h3 className="text-xl font-semibold text-[#541418]">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-1">{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustSlider;
