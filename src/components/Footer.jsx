import React from "react";
import schoolLogo from "../assets/logo.png";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Academics",
    "Facilities",
    "Event Gallery",
    "Contact Us",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#541418] to-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#541418] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#541418] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative px-6 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center mb-6">
                <img
                  src={schoolLogo}
                  alt="St. Gregorios Logo"
                  className="w-16 h-16 object-contain mr-4 rounded"
                />
                <div>
                  <h2 className="text-xl font-bold bg-white bg-clip-text text-transparent">
                    St Gregorios
                  </h2>
                  <p className="text-sm text-gray-300">High School</p>
                </div>
              </a>

              <p className="text-gray-300 leading-relaxed mb-6">
                Committed to excellence in education and holistic development,
                nurturing tomorrow's leaders with values and knowledge.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                  >
                    <Icon
                      size={18}
                      className="text-gray-300 hover:text-white"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-[#541418] to-red-600 rounded-full mr-3"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-3 text-[#fcb900] group-hover:translate-x-1 transition-transform duration-300"
                      />
                      <span className="group-hover:underline underline-offset-4">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Building */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-[#541418] to-red-600 rounded-full mr-3"></span>
                Main Building
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin
                    size={16}
                    className="text-[#fcb900] mr-3 mt-1 flex-shrink-0"
                  />
                  <div className="text-sm text-gray-300 leading-relaxed">
                    St. Gregorios High School
                    <br />
                    Gregorios Path, V.N. Purav Marg,
                    <br />
                    Besides Fairlawn, Chembur,
                    <br />
                    Mumbai - 400 071
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="text-[#fcb900] mr-3" />
                  <div className="text-sm text-gray-300">
                    (022) 35112723 / (022) 35112724
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-[#fcb900] hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <MapPin
                    size={14}
                    className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  Get Directions
                </a>
              </div>
            </div>

            {/* New Building */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-[#541418] to-red-600 rounded-full mr-3"></span>
                New Building
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin
                    size={16}
                    className="text-[#fcb900] mr-3 mt-1 flex-shrink-0"
                  />
                  <div className="text-sm text-gray-300 leading-relaxed">
                    St. Gregorios High School
                    <br />
                    N. B. Patil Marg,
                    <br />
                    Chembur, Mumbai - 400 071
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="text-[#fcb900] mr-3" />
                  <div className="text-sm text-gray-300">
                    9324747718 / 8591879613
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-[#fcb900] hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <MapPin
                    size={14}
                    className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; 2025 St. Gregorios High School. All rights reserved.
            </div>
            <div className="text-sm text-gray-400 mb-1 md:mb-0">
              Made by Jump Creatives
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
