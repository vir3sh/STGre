import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ title }) => {
  return (
    <div className="relative  bg-center h-60 flex items-center justify-center text-center bg-[#541418]">
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#000000]/60"></div> */}

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <nav className="text-sm text-white" aria-label="Breadcrumb">
          <ol className="flex justify-center items-center space-x-1">
            <li className="flex items-center">
              <a href="/" className="text-white hover:underline font-medium">
                Home
              </a>
              <ChevronRight className="w-4 h-4 mx-1 text-[#fcb900]" />
            </li>
            <li className="text-[#fcb900] font-medium">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
