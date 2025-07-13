import React from "react";
import { Users, Heart, BookOpen, Award } from "lucide-react";
import principalImage from "../assets/stgre-principal.jpeg";
import logo from "../assets/logo.png"; // Assuming you have a logo image
import Breadcrumb from "../components/Breadcrumb";
import TrustSlider from "../components/TrustSlider";
const PrincipalMessage = () => {
  return (
    <>
      <Breadcrumb title="Principal's Message" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header */}
        {/* <header className="bg-gradient-to-br from-[#541418] to-gray-900 text-white py-8 shadow-lg">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-2">
              St. Gregorios High School
            </h1>
            <p className="text-center text-blue-200 text-lg">
              Excellence in Education Since 1992
            </p>
          </div>
        </header> */}

        <div className="container mx-auto px-6 py-12">
          {/* Principal's Message Section */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                <div>
                  <img src={principalImage} alt="St Gre Principal " srcset="" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Principal's Message
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-center text-gray-600">
                  "Dear Parents and Visitors, Welcome to the website of St.
                  Gregorios High School!"
                </p>

                <div className="space-y-6 text-justify">
                  <p>
                    As you navigate your way through the site discovering what
                    we have to offer, you will find answers to the many
                    preliminary questions you may have about our school, our
                    academic programmes, the extra-curricular activities and
                    life as a member of the Gregorian family
                  </p>

                  <p>
                    We, at Gregorios, are dedicated to maintaining an
                    exceptional educational environment. Our engaging teaching
                    methodologies adhere to the highest standard and encourage
                    success in concept-based learning and developing
                    competencies. The entire world has witnessed an era of
                    intense transformation in all areas, whether it is
                    education, global trade and economy, technology or society
                  </p>

                  <p>
                    A different skill–set is required that would enable an
                    individual to cope and succeed in facing the challenges in
                    real-life, leading to his holistic progress. With countless
                    opportunities for academic and personal growth both inside
                    and outside the classrooms, St. Gregorios High School could
                    be the place for you. Tomorrow’s jobs may not exist yet
                  </p>

                  <p>
                    However, through exposure to collaborative problem solving,
                    creativity, oral and written communication, critical
                    thinking, ethical decision making and leadership, our
                    skills-based 21st-century curriculum would go a long way in
                    preparing our students to face the future with confidence
                    and equanimity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Information Section */}
          <section className="mb-16">
            <div className="bg-[#541418] rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <div className="flex items-center justify-center mb-8">
                <div className=" p-4 rounded-full">
                  <img src={logo} alt="St Gre Logo" srcset="" />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-center">
                About Our Trust
              </h2>

              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl mb-6 text-blue-100">
                  The St. Gregorios Education & Medical Trust was formed in
                  1992, with the express purpose of giving back to the community
                  in which they were based, something special - and what could
                  be more special than young people, enlightened and eager to do
                  their bit for humanity.
                </p>

                <p className="text-lg text-blue-100">
                  They drew inspiration from their Patron Saint, St. Gregorios,
                  who believed in love for all and sympathy and affection to all
                  mankind. Thus was born St. Gregorios High School.
                </p>
              </div>
            </div>
          </section>

          <TrustSlider />

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Why Choose St. Gregorios?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full w-fit mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  ICSE/ISC Affiliation
                </h3>
                <p className="text-sm text-gray-600">
                  Affiliated to Council for Indian School Certificate
                  Examinations
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  21st Century Curriculum
                </h3>
                <p className="text-sm text-gray-600">
                  Skills-based education preparing students for the future
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full w-fit mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Holistic Development
                </h3>
                <p className="text-sm text-gray-600">
                  Academic excellence with personality development
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full w-fit mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Values-Based Education
                </h3>
                <p className="text-sm text-gray-600">
                  Inspired by St. Gregorios's love and compassion for all
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Our Campuses
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 text-black">
                  <h3 className="text-xl font-semibold mb-4 text-[#fcb900]">
                    Main Building
                  </h3>
                  <p className="mb-2">Gregorios Path, V.N. Purav Marg</p>
                  <p className="mb-2">Besides Fairlawn, Chembur</p>
                  <p className="mb-2">Mumbai - 400 071</p>
                  <p className="text-[#fcb900]">
                    Phone: (022) 35112723 / (022) 35112724
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-xl p-6 text-black">
                  <h3 className="text-xl font-semibold mb-4 text-[#fcb900]">
                    New Building
                  </h3>
                  <p className="mb-2">N. B. Patil Marg</p>
                  <p className="mb-2">Chembur</p>
                  <p className="mb-2">Mumbai - 400 071</p>
                  <p className="text-[#fcb900]">
                    Phone: 9324747718 / 8591879613
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrincipalMessage;
