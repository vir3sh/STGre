import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import schoolLogo from "../assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "#",
      dropdown: [
        { name: "Principal Message", href: "/principal-Message" },
        { name: "Trust Members", href: "/about/trust-members" },
        { name: "Accreditation", href: "/about/accreditation" },
        { name: "Flag, Crest & Motto", href: "/about/flag-crest-motto" },
        { name: "School Song", href: "/about/school-song" },
      ],
    },
    {
      name: "Academics",
      href: "#",
      dropdown: [
        { name: "Curriculum", href: "/academics/curriculum" },
        {
          name: "Students & Teachers Achievement",
          href: "/academics/achievements",
        },
        { name: "Beyond Academics", href: "/academics/beyond-academics" },
      ],
    },
    { name: "Facilities", href: "/facilities" },
    { name: "Events Gallery ", href: "/event-gallery" },
    {
      name: "Results",
      href: "#",
      dropdown: [
        { name: "Standard X (ICSE) 2023", href: "/results/icse-2023" },
        { name: "Standard X (ICSE) 2024", href: "/results/icse-2024" },
        { name: "Standard XII (ISC) 2023", href: "/results/isc-2023" },
        { name: "Standard XII (ISC) 2024", href: "/results/isc-2024" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <header className="relative bg-white shadow-lg z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#541418] text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>(022) 35112723 / (022) 35112724</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>info@stgregoriosschool.edu.in</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-2" />
            <span>Chembur, Mumbai - 400 071</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center ">
            <img
              src={schoolLogo}
              alt="St. Gregorios Logo"
              className="w-24 h-24 object-contain mr-4 rounded"
            />
            <div>
              <h2 className="text-xl font-bold bg-[#541418] bg-clip-text text-transparent">
                St. Gregorios High School
              </h2>
              {/* <p className="text-sm text-black "></p> */}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            ref={dropdownRef}
          >
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#541418] font-medium transition-colors duration-300 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 py-2 z-50">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#541418] transition-colors duration-200 text-sm border-b border-gray-50 last:border-b-0"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-[#541418] font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 max-h-96 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#541418] font-medium transition-colors duration-300"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    {activeDropdown === index && (
                      <div className="pl-4 pb-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-[#541418] transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-[#541418] font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Contact Info */}
          <div className="bg-gray-50 px-4 py-3 border-t">
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center">
                <Phone size={12} className="mr-2" />
                <span>(022) 35112723</span>
              </div>
              <div className="flex items-center">
                <Mail size={12} className="mr-2" />
                <span>info@stgregoriosschool.edu.in</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
