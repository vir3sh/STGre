import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 text-[#fcb900]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <a
              href={item.href}
              className={`font-medium hover:underline ${
                index === items.length - 1 ? "text-[#541418]" : "text-[#fcb900]"
              }`}
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-1 text-[#541418]" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
