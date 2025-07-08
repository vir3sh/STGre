import React from "react";
import Basketball from "../assets/Basket-Ball.jpg";
import MemorialParkImg from "../assets/C-V-Thamp-Memorial-Park.jpg";
import TurfImg from "../assets/Footbal-Turf-2-1.jpg";
import toy from "../assets/Toy-Room-2-225x300.jpg";
import art from "../assets/Art-Room.jpeg";
import slab from "../assets/s-lab-2.jpg";
import Infirmary from "../assets/Infirmary.jpg";
import music from "../assets/music-room.jpg";
import auditorium from "../assets/auditorium-2-200x300.jpg";
import Room2 from "../assets/Room2-300x214.jpg";
import library from "../assets/Library-1024x731.jpg";
import computer from "../assets/computer-lab-1.jpg";

const facilities = [
  {
    title: "Football Turf",
    description:
      "On June 21, 2023, the school unveiled its brand-new, cutting-edge football turf. This state-of-the-art facility promises to be a game-changer, providing an unparalleled avenue for students to sharpen their football skills and ignite their passion for the beautiful game. Beyond its shimmering green surface, the football turf at St. Gregorios High School represents the institution's unwavering dedication to providing a well-rounded education that encompasses academic excellence, character development, and physical fitness.",
    image: TurfImg,
  },
  {
    title: "Basketball Court",
    description:
      "The state-of-the-art Basketball Court has been made with the aim of providing students with a better sports environment and world class sports facilities..",
    image: Basketball,
  },
  {
    title: "The C. V. Thampi Memorial Park",
    description:
      "The recently renovated Memorial Park, fondly termed as the Play Park by the preschoolers was built in memory of our Founder Chairman, Late Shri C.V. Thampi. Children wait for their turn to visit the park which is a happy, rambunctious arena, filled with fun and laughter. The walls of this park have been painted by the Art students of Grade 9 as a part of their SUPW activity under the watchful gaze of their Art teachers. The park has a solid rubber surface which is slip resistant and protects children from injuries. The equipment includes a multi play station, merry-go-rounds, swings and a seesaw.",
    image: MemorialParkImg,
  },
  {
    title: "Toy Room",
    description:
      "Our vibrant Toy Room is a wonderland designed specifically for our youngest learners. This colorful and safe environment is equipped with age-appropriate educational toys, building blocks, puzzles, and interactive learning materials that stimulate creativity and cognitive development. The room provides a perfect setting for play-based learning, where children can explore, discover, and develop their motor skills while having fun. Our trained staff ensures that playtime is both enjoyable and educational, fostering social interaction and imaginative play among preschoolers.",
    image: toy,
  },
  {
    title: "Art Room",
    description:
      "The Art Room at St. Gregorios High School is a creative sanctuary where imagination comes to life. This well-lit, spacious studio is equipped with professional art supplies, easels, pottery wheels, and various mediums including watercolors, oils, and acrylics. Students explore different artistic techniques from traditional painting and sculpture to modern digital art. The room features excellent ventilation and storage facilities, allowing students to work on long-term projects. Our art program encourages self-expression, cultural appreciation, and develops fine motor skills while nurturing the next generation of artists.",
    image: art,
  },
  {
    title: "Science Laboratory",
    description:
      "Our state-of-the-art Science Laboratory is designed to bring theoretical concepts to life through hands-on experimentation. Equipped with modern apparatus, safety equipment, and digital microscopes, the lab provides students with opportunities to conduct experiments in physics, chemistry, and biology. The facility features individual workstations, chemical storage areas, and emergency safety systems. Students develop scientific thinking, analytical skills, and gain practical experience that complements their theoretical knowledge, preparing them for advanced scientific studies.",
    image: slab,
  },
  {
    title: "Infirmary",
    description:
      "The school places great emphasis on the physical well-being of students. Both campuses have spacious infirmaries to cater to students who may take ill after reporting to school. Only basic first aid is administered in the infirmaries which are manned by trained nurses. There is a doctor parent on call who visits the premises, if required, till the parent can come across. The school also has a tie-up with a local hospital for any emergencies.",
    image: Infirmary,
  },
  {
    title: "Music Room",
    description:
      "The newly renovated music room has taken into account both aesthetic and educational needs. Music is offered to all students of Classes 1-7 and talented singers are picked for the student choir whose vocal techniques are polished to perfection in school. The students of Grades 9-12 have their own band and make use of the plethora of musical instruments to conduct jam sessions.",
    image: music,
  },
  {
    title: "Auditorium",
    description:
      "The auditorium is a very important space in our school. Its multipurpose usage for functions, parent orientations, workshops etc. makes good utility of space. The acoustical design of the auditorium is state-of-the-art. The stage in the auditorium has provided our students their first exposure to performing arts, both as audiences and as performers.",
    image: auditorium,
  },
  {
    title: "Classroom Facilities",
    description:
      "Our modern classrooms are designed to create an optimal learning environment with comfortable seating, excellent lighting, and advanced audio-visual equipment. Each classroom features interactive whiteboards, projectors, and technology integration to support various teaching methodologies. The rooms are spacious, well-ventilated, and designed to accommodate different learning styles. With ergonomic furniture and thoughtful layout, these spaces promote active learning, collaboration, and student engagement while maintaining a conducive atmosphere for academic excellence.",
    image: Room2,
  },
  {
    title: "Library",
    description:
      "From its inception, we have believed that ‘A school is as good as its library’ and we have made sure that the school takes a no-expense spared approach to stock the library. The school library in both school buildings is well equipped with books of different genres which are relevant to the changing times. The calm and tranquil atmosphere prevailing in the library makes it a most visited room in the school where students are encouraged to inculcate a love for reading. Interaction with eminent authors, book reviews and reading sessions are conducted regularly.",
    image: library,
  },
  {
    title: "Computer Laboratory",
    description:
      "Technology plays a major role in twenty-first century education. The new model of integrating technology into the curriculum means that computers are on demand throughout the school day. Technology teachers and administrators face the task of developing a technology plan that makes the most effective and efficient use of the computer hardware available to them. The Computer Lab remains the favourite destination for our students with them getting to use their own desktop during computer classes",
    image: computer,
  },
];

const FacilitySection = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center my-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Half-circle background and image */}
      <div className="relative w-full md:w-1/2 p-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full -z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl shadow-lg relative z-10"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 px-6">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
    </div>
  );
};

const FacilitiesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-16">Our Facilities</h1>
      {/* <BreadCrumb paths={breadcrumbPaths} /> */}

      {facilities.map((facility, idx) => (
        <FacilitySection key={idx} {...facility} reverse={idx % 2 !== 0} />
      ))}
    </div>
  );
};

export default FacilitiesPage;
