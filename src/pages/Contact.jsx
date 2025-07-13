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
  Globe,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import schoolimage from "../assets/stgregorious-contact.jpg";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
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

  const quickInfo = [
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Email Us",
      content: "info@stgregoriosschool.com",
      subContent: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Call Us",
      content: "(022) 35112723",
      subContent: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Visit Us",
      content: "Chembur, Mumbai",
      subContent: "Two convenient locations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#541418] via-[#741b21] to-[#541418] text-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Connect with St. Gregorios High School - Your partner in educational
            excellence
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#fcb900] to-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Quick Contact Info */}
      <div className="relative -mt-8 sm:-mt-10 md:-mt-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {quickInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-[#fcb900] to-yellow-400 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white">
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 ml-3 sm:ml-4">
                  {info.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-700 mb-1 break-words">
                {info.content}
              </p>
              <p className="text-sm text-gray-500">{info.subContent}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Contact Form Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Image Section */}
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#541418]/90 to-[#741b21]/90 z-10"></div>
                <img
                  src={schoolimage}
                  alt="Students walking"
                  className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="text-center text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                      Have Any Question Just Contact Us
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 sm:mb-8">
                      Experience excellence in education with personalized
                      attention
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <div className="flex items-center text-xs sm:text-sm justify-center sm:justify-start">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>1000+ Happy Students</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm justify-center sm:justify-start">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>50+ Years Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Section */}
              <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="max-w-md mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    Whether you're a parent with questions, a student seeking
                    guidance, or simply curious about our programs, we're here
                    to help you every step of the way.
                  </p>

                  {isSubmitted && (
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg sm:rounded-xl flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-green-800 font-medium">
                        Message sent successfully! We'll get back to you soon.
                      </span>
                    </div>
                  )}

                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 focus:border-[#fcb900] focus:ring-2 sm:focus:ring-4 focus:ring-[#fcb900]/20 outline-none transition-all duration-300"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="w-full border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 focus:border-[#fcb900] focus:ring-2 sm:focus:ring-4 focus:ring-[#fcb900]/20 outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone Number"
                      className="w-full border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 focus:border-[#fcb900] focus:ring-2 sm:focus:ring-4 focus:ring-[#fcb900]/20 outline-none transition-all duration-300"
                    />

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="w-full border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 focus:border-[#fcb900] focus:ring-2 sm:focus:ring-4 focus:ring-[#fcb900]/20 outline-none transition-all duration-300"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Write your message here..."
                      className="w-full border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 focus:border-[#fcb900] focus:ring-2 sm:focus:ring-4 focus:ring-[#fcb900]/20 outline-none transition-all duration-300 resize-none"
                    ></textarea>

                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#fcb900] to-yellow-400 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-[#e2a600] hover:to-[#fcb900] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent mr-2 sm:mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Locations */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
              Our Campus Locations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Visit our modern campuses designed to inspire learning and growth
            </p>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#fcb900] to-yellow-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            {campuses.map((campus, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
              >
                {/* Map Section */}
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    src={campus.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>

                {/* Info Section */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="bg-gradient-to-r from-[#fcb900] to-yellow-400 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white">
                      <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 ml-3 sm:ml-4">
                      {campus.name}
                    </h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <div className="bg-gray-100 p-1.5 sm:p-2 rounded-md sm:rounded-lg mt-1 flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#541418]" />
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                          {campus.address}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Near: {campus.landmark}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-gray-100 p-1.5 sm:p-2 rounded-md sm:rounded-lg mt-1 flex-shrink-0">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#541418]" />
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="text-sm sm:text-base text-gray-800 font-semibold mb-1">
                          Contact Numbers
                        </p>
                        {campus.phones.map((phone, phoneIndex) => (
                          <p
                            key={phoneIndex}
                            className="text-sm sm:text-base text-gray-700 font-medium"
                          >
                            {phone}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                    <a
                      href={campus.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-[#fcb900] to-yellow-400 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-[#e2a600] hover:to-[#fcb900] transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                    >
                      <Navigation className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Get Directions
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
