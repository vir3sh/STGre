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
    },
    {
      name: "New Building",
      address: "N. B. Patil Marg, Chembur, Mumbai - 400 071",
      phones: ["+91 93247 47718", "+91 85918 79613"],
      landmark: "Ghatla Area",
      mapUrl:
        "https://maps.google.com/?q=St+Gregorios+High+School+NB+Patil+Marg+Chembur",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#541418] via-red-900 to-[#541418] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Quick Contact Info */}

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
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Building className="text-[#541418] mr-4" size={28} />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {campus.name}
                  </h3>
                </div>

                <div className="space-y-4">
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

                  <div className="flex items-center">
                    <Phone className="text-[#541418] mr-3" size={20} />
                    <div>
                      {campus.phones.map((phone, phoneIndex) => (
                        <p key={phoneIndex} className="text-gray-700">
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a Message
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                <CheckCircle className="text-green-600 mr-3" size={20} />
                <p className="text-green-700">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#541418] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#541418] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#541418] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#541418] focus:border-transparent outline-none transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="general">General Information</option>
                    <option value="academic">Academic Programs</option>
                    <option value="facilities">School Facilities</option>
                    <option value="transport">Transportation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#541418] focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#541418] text-white py-4 px-6 rounded-lg hover:bg-red-800 transition-colors duration-300 font-medium flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-8">
            {/* Interactive Map */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Find Us
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8234567890!2d72.8891234567890!3d19.0504567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzAxLjYiTiA3MsKwNTMnMjAuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Principal Info */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                School Leadership
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#541418] rounded-full flex items-center justify-center mr-4">
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Mr. Jamal Jackson
                    </p>
                    <p className="text-gray-600">Principal</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#541418] rounded-full flex items-center justify-center mr-4">
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Ms. Ranjini Krishnaswamy
                    </p>
                    <p className="text-gray-600">Vice Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
