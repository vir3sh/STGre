import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Navigation,
  CheckCircle,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import studentimage from "../assets/logo.png"; // Replace with your image path
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const campuses = [
    {
      name: "Main Building",
      address:
        "Gregorios Path, V.N. Purav Marg, Besides Fairlawn, Chembur, Mumbai - 400 071",
      phones: ["(022) 35112723", "(022) 35112724"],
      landmark: "Besides Fairlawn",
      mapUrl:
        "https://maps.google.com/?q=St+Gregorios+High+School+Chembur+Main+Building",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4098.958641015237!2d72.8962473515623!3d19.050038787202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c61d34555555%3A0x8c85c263ef023923!2sSt.%20Gregorios%20High%20School!5e1!3m2!1sen!2sin!4v1752081195302!5m2!1sen!2sin",
    },
    {
      name: "New Building",
      address: "N. B. Patil Marg, Chembur, Mumbai - 400 071",
      phones: ["+91 93247 47718", "+91 85918 79613"],
      landmark: "Ghatla Area",
      mapUrl:
        "https://maps.google.com/?q=St+Gregorios+High+School+NB+Patil+Marg+Chembur",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5882.8362487393815!2d72.89873657770995!3d19.050512300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c60508681da9%3A0xe7ce066a06e48b92!2sSt%20Gregorios%20High%20School%2C%20New%20Building%20Premises!5e1!3m2!1sen!2sin!4v1752081340509!5m2!1sen!2sin",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Breadcrumb title="Contact Us" />

      <div className=" mx-auto px-6 py-16">
        {/* Quick Contact Info */}

        <div className="py-16 px-4">
          <div className=" mx-auto bg-white rounded-3xl  overflow-hidden flex flex-col md:flex-row">
            {/* Left Image Section */}
            <div className="md:w-1/2">
              <img
                src={studentimage} // Replace with your image path
                alt="Students walking"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Form Section */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Get In Touch
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page randomised words which don't
                look even slightly when looking at its layout.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border rounded-lg px-4 py-3 w-full text-sm focus:ring-2 focus:ring-[#541418] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border rounded-lg px-4 py-3 w-full text-sm focus:ring-2 focus:ring-[#541418] outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Your Subject"
                  className="border rounded-lg px-4 py-3 w-full text-sm focus:ring-2 focus:ring-[#541418] outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Write Your Message"
                  className="border rounded-lg px-4 py-3 w-full text-sm focus:ring-2 focus:ring-[#541418] outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="inline-flex items-center bg-[#fcb900] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e2a600] transition-all"
                >
                  SEND MESSAGE <Send className="ml-2" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Campus Locations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#541418] relative">
            Our Campus Locations
            <span className="block w-20 h-1 mx-auto mt-2 bg-gradient-to-r from-[#fcb900] to-[#541418] rounded"></span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campuses.map((campus, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Map on Top */}
                <div className="aspect-video">
                  <iframe
                    src={campus.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Info Section */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center mb-2">
                    <Building className="text-[#541418] mr-4" size={28} />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {campus.name}
                    </h3>
                  </div>

                  <div className="flex items-start">
                    <MapPin
                      className="text-[#541418] mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        {campus.address}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Near: {campus.landmark}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-[#541418] mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-gray-800 font-medium">Phone</p>
                      {campus.phones.map((phone, phoneIndex) => (
                        <p key={phoneIndex} className="text-gray-700">
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={campus.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#fcb900] text-white rounded-lg hover:bg-[#e2a600] transition-colors duration-300 font-medium"
                    >
                      <Navigation className="mr-2" size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form & Map Section */}
      </div>
    </div>
  );
};

export default Contact;
