import React from "react";
import img1 from "../assets/debate.jpg";
import img2 from "../assets/Maharashtra-State-Rank-merit-holders.jpg";
import img3 from "../assets/Naisha-bhatoye-badminton.jpg";

const cards = [
  {
    img: img3,
    tag: "Health",
    title: "Naishaa Kaur Bhatoye",
    description:
      "Ranked World No. 6 (U-19), 487 (Senior) won silver at U-19 Polish Open 2023",
  },
  {
    img: img2,
    tag: "Health",
    title: "Maharashtra State Merit Rank Holders – ICSE Year 2023",
    description:
      "Our students ranked among the top in Maharashtra in the 2023 ICSE examinations",
  },
  {
    img: img1,
    tag: "Health",
    title: "All–India Inter School Debate Competition 2023",
    description:
      "Finalists at Frank Anthony All–India Inter School Debate 2023 by CISCE",
  },
];

const PortfolioSection = () => (
  <section className="py-16 px-4 bg-white text-center">
    {/* headline */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Students & Teachers <span className="text-[#FFB000]">Achievements</span>
    </h2>
    <p className="text-gray-600 max-w-xl mx-auto mb-10">
      Honoring the dedication and success of our students and educators
    </p>

    {/* cards */}
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {cards.map(({ img, tag, title, description }, i) => (
        <div
          key={i}
          className="relative group rounded-[50px_50px_50px_0px] overflow-hidden shadow-md"
        >
          {/* image */}
          <img
            src={img}
            alt={title}
            className="w-full h-56 object-cover duration-300 ease-in-out group-hover:blur-sm"
          />

          {/* overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/60 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 duration-300 text-left">
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-white mb-4">{description}</p>
            <button className="w-10 h-10 rounded-full bg-[#541418] text-white flex items-center justify-center shrink-0">
              <span className="text-xl leading-none">&#8594;</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
