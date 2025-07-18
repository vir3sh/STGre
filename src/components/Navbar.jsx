import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu or dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about-us",
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
      href: "/academics",
      dropdown: [
        { name: "Curriculum", href: "/academics" },
        {
          name: "Students & Teachers Achievement",
          href: "/academics/achievements",
        },
        { name: "Beyond Academics", href: "/academics/beyond-academics" },
      ],
    },
    { name: "Facilities", href: "/facilities" },
    { name: "Events Gallery", href: "/event-gallery" },
    {
      name: "Results",
      href: "#.",
      dropdown: [
        { name: "2023", href: "/results-2023" },
        { name: "2024", href: "/results-2024" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const handleMobileDropdownToggle = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMobileDropdown(null);
  };

  const handleMobileItemClick = (item, index) => {
    if (item.dropdown) {
      // If it has a dropdown, toggle the dropdown
      handleMobileDropdownToggle(index);
    } else {
      // If it's a direct link, navigate and close menu
      setIsMenuOpen(false);
      setActiveMobileDropdown(null);
    }
  };

  const handleMobileSubItemClick = () => {
    // Close menu when clicking on sub-items
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <header className="relative bg-white shadow-lg z-50">
      {/* Top Bar */}
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
      <div className="bg-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="St. Gregorios Logo"
              className="w-24 h-24 object-contain mr-4 rounded"
            />
            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-[#541418]">
                St. Gregorios High School
              </h2>
            </div>
          </a>

          {/* Desktop Nav (CSS-driven dropdowns) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <a
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#541418] font-medium transition-colors duration-300 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className="transform transition-transform duration-300 group-hover:rotate-180"
                      />
                    </a>

                    {/* Dropdown container appears on hover */}
                    <div
                      className="absolute top-full left-0 mt-0.10 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 py-2 z-50
                                  hidden group-hover:block opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0
                                  transition-all duration-300 ease-out"
                    >
                      {item.dropdown.map((dropdownItem, i) => (
                        <a
                          key={i}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#541418] transition-colors duration-200 text-sm border-b border-gray-50 last:border-b-0"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </>
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
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg z-50"
          ref={mobileMenuRef}
        >
          <div className="px-4 py-2 max-h-96 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                {item.dropdown ? (
                  <>
                    {/* Main item with dropdown */}
                    <div className="flex items-center justify-between py-3">
                      <a
                        href={item.href}
                        onClick={(e) => {
                          // Only prevent default if it's a placeholder link
                          if (item.href === "#.") {
                            e.preventDefault();
                          } else {
                            // Allow navigation to the main page
                            setIsMenuOpen(false);
                            setActiveMobileDropdown(null);
                          }
                        }}
                        className="text-gray-700 font-medium hover:text-[#541418] flex-grow"
                      >
                        {item.name}
                      </a>
                      <button
                        onClick={() => handleMobileDropdownToggle(index)}
                        aria-label={`Toggle ${item.name} Dropdown`}
                        className="ml-2 p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform duration-300 ${
                            activeMobileDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Dropdown items */}
                    {activeMobileDropdown === index && (
                      <div className="pl-4 pb-2 bg-gray-50 rounded-md mb-2">
                        {item.dropdown.map((dropdownItem, i) => (
                          <a
                            key={i}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-[#541418] hover:bg-gray-100 rounded px-2 transition-colors duration-200"
                            onClick={handleMobileSubItemClick}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-gray-700 hover:text-[#541418] font-medium"
                    onClick={() => handleMobileItemClick(item, index)}
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
