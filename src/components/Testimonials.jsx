import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Class 10 Student",
    text: "Our school has given me so many opportunities to learn and grow. The teachers are always supportive, and the environment is full of encouragement. I feel confident every day I step into class.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    company: "St. Gregorios School",
  },
  {
    name: "Rohan Mehta",
    role: "Class 12 Science Stream",
    text: "The labs, library, and facilities here are excellent. I've developed a strong interest in science thanks to our amazing faculty. I'm grateful to be part of such an inspiring place.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    company: "St. Gregorios School",
  },
  {
    name: "Sneha Patel",
    role: "Class 9 Student",
    text: "I love how our school focuses not just on academics, but also on sports and extra activities. I've become more confident and active since joining. The events here are always fun and engaging.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    company: "St. Gregorios School",
  },
  {
    name: "Aarav Kapoor",
    role: "Class 11 Commerce Stream",
    text: "Our school has helped me discover my passion for business and economics. The teachers go beyond textbooks to explain real-world applications. It's a great place to prepare for the future.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5,
    company: "St. Gregorios School",
  },
  {
    name: "Meera Iyer",
    role: "Class 8 Student",
    text: "The teachers are so kind and helpful. Every day I learn something new, and my creativity has really improved through art and music classes. I love coming to school!",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    company: "St. Gregorios School",
  },
  {
    name: "Kabir Joshi",
    role: "Class 12 Humanities",
    text: "What makes our school special is the friendly environment and the focus on values. It has shaped my personality and taught me discipline, compassion, and leadership.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    company: "St. Gregorios School",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerView, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
            <Star className="w-3 h-3 text-amber-600" />
            <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold">
              Student Success Stories
            </p>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What Our Students <span className="text-amber-500">Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from students who transformed their careers through our
            programs. Their success is our greatest achievement.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-amber-50 border-2 border-amber-200 hover:border-amber-300 rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600 group-hover:text-amber-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-amber-50 border-2 border-amber-200 hover:border-amber-300 rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600 group-hover:text-amber-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden mx-1 md:mx-0">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
                width: `${(testimonials.length / cardsPerView) * 100}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="px-1 md:px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 h-full border border-gray-100">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-amber-100 p-2 md:p-3 rounded-full">
                        <Quote className="w-4 h-4 md:w-6 md:h-6 text-amber-600" />
                      </div>
                      <div className="flex gap-1">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-3 md:gap-4 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-3 border-amber-200 object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-amber-600 text-xs md:text-sm font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          Now at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 md:mt-12 gap-2 md:gap-3">
            {Array(maxIndex + 1)
              .fill(0)
              .map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-amber-500 w-6 md:w-8"
                      : "bg-gray-300 hover:bg-amber-300"
                  }`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
