import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Star } from "lucide-react"; // Optional: or use image

const testimonials = [
  {
    name: "Ninal Gordon",
    role: "Student",
    photo: "/path/to/ninal.jpg",
    rating: 5,
    score: 99,
    feedback:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
  },
  {
    name: "Anthony Nicoll",
    role: "Student",
    photo: "/path/to/anthony.jpg",
    rating: 5,
    score: 99,
    feedback:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
  },
  // Add more testimonials...
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#0c123d] py-20 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h4 className="uppercase text-orange-400 font-semibold text-xs tracking-widest">
          Testimonials
        </h4>
        <h2 className="text-4xl font-bold mb-3">
          What Our Students <span className="text-orange-400">Say's</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[FreeMode]}
        className="px-6"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-[#031B4E] p-6 rounded-3xl shadow-xl relative overflow-hidden border border-gray-100 transition-all hover:-translate-y-1 duration-300">
              {/* Score badge */}
              <div className="absolute top-0 right-0 bg-orange-400 text-white font-bold text-sm px-3 py-1 rounded-bl-2xl">
                {t.score}
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {t.feedback}
              </p>

              {/* Footer with image */}
              <div className="flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-orange-400 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm">{t.name}</h4>
                  <p className="text-xs text-orange-400">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
