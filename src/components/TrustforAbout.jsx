import React from "react";

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

const TrustforAbout = () => {
  return (
    <div className="py-16 ">
      {/* Heading */}
      <div className="text-center mb-12">
        {/* <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
          Our Trustees
        </p> */}
        <h2 className="text-4xl font-bold text-[#541418]">Meet the Trust</h2>
        <p className="text-gray-600 mt-2 text-base max-w-xl mx-auto">
          Our esteemed trust members lead with vision, integrity, and a deep
          commitment to educational excellence.
        </p>
      </div>

      {/* Static Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md shadow-gray-300 p-2 text-center transition-transform duration-300 hover:scale-105 rounded-[50px_50px_50px_0px]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-82 h-82 object-cover rounded-[50px_50px_50px_0px] mx-auto mb-4 "
            />
            <h3 className="text-xl font-semibold text-[#541418]">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustforAbout;
