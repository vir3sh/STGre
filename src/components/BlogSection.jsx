import React from "react";
import { Play } from "lucide-react"; // icon

const BlogSection = () => (
  <section
    id="blog-section"
    className="py-16 bg-white overflow-x-hidden" /* hides any stray horizontal scroll */
  >
    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* LEFT */}
      <div>
        <h2 className="text-4xl font-bold text-[#111]">
          Our <span className="text-yellow-500">Latest Blog</span>
        </h2>
        <p className="text-gray-600 mt-4 mb-6 max-w-md">
          Explore in‑depth stories, updates, and insightful articles curated by
          our educators and students — get inspired and informed!
        </p>
        <a
          href="/blog"
          className="inline-block bg-[#fcb900] hover:bg-[#e0a200] text-white px-6 py-3 rounded-full font-semibold transition hover:scale-105"
        >
          Learn More →
        </a>
      </div>

      {/* RIGHT */}
      <div className="relative  overflow-hidden shadow-lg">
        <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-[50px_50px_50px_0px] flex items-center justify-center">
          <div className="text-center">
            {/* <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Play size={40} className="text-blue-500" />
            </div> */}
            <h3 className="text-2xl font-bold text-gray-800">Blog Image</h3>
            <p className="text-gray-600 mt-2">Replace with blog image</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
