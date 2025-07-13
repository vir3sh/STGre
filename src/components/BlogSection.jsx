import React, { useState, useEffect } from "react";
import { Play } from "lucide-react"; // optional for icon

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("blog-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog-section" className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h4 className="uppercase text-orange-500 font-bold text-sm tracking-widest mb-2 flex items-center gap-2">
            Latest Blog
          </h4>
          <h2 className="text-4xl font-bold text-[#111]">
            Let's Check Our <span className="text-yellow-500">Latest Blog</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-6 max-w-md">
            Explore in-depth stories, updates, and insightful articles curated
            by our educators and students — get inspired and informed!
          </p>
          <a
            href="/blog"
            className="inline-block bg-[#fcb900] hover:bg-[#e0a200] text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 transform"
          >
            Learn More →
          </a>
        </div>

        {/* Right Blog Thumbnail with Play Button */}
        <div
          className={`relative rounded-[60px] overflow-hidden shadow-lg group transform transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Play size={40} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Blog Image</h3>
              <p className="text-gray-600 mt-2">Replace with your blog image</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
            {/* <div className="w-14 h-14 bg-[#fcb900] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
              <Play className="text-white" size={28} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
