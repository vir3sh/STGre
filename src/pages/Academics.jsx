import React from "react";
import Curriculum from "../components/Curriculum";
import SingleCurriculum from "../components/SingleCurriculum";
import preprimary from "../assets/preprimary.jpg"; // Import the image for Pre-Primary curriculum
import primary from "../assets/primary.jpg"; // Import the image for Pre-Primary curriculum
import secondary from "../assets/secondary.jpeg"; // Import the image for Pre-Primary curriculum
import isc from "../assets/isc.jpeg"; // Import the image for Pre-Primary curriculum
import SecondCurriculum from "../components/SecondCurriculum";
import SubjectSelection from "../components/SubjectSelection";
import StreamSubjectsTable from "../components/StreamSubjectsTable";
const Academics = () => {
  return (
    <>
      <Curriculum />

      <div id="pre-primary">
        <SingleCurriculum
          title={"Pre-Primary"}
          text1={
            "Through intentional teaching strategies, a thoughtfully designed learning environment, and engaging, age-appropriate activities, pre-schoolers are provided with joyful and meaningful learning experiences. A strong emphasis is placed on developing oral and aural skills—namely, speaking and listening—while basic writing exercises are introduced to strengthen fine motor skills"
          }
          text2={
            "The celebration of various festivals fosters an appreciation for the rich cultural diversity of our country and promotes values of unity and harmony. Additionally, the curriculum for Senior KG students includes Computer Education and Physical Education, supporting their holistic development"
          }
          image={preprimary}
        />
      </div>
      <div id="primary">
        <SecondCurriculum
          title={"Primary"}
          text1={
            "During the Primary years, students develop greater independence and begin to take ownership of their learning journey. The curriculum emphasizes experiential, hands-on activities that foster curiosity and engagement. Co-curricular programs are seamlessly integrated with academics, creating a vibrant and holistic learning environment"
          }
          text2={
            "Aligned with the guidelines of CISCE, the syllabus is designed to build strong conceptual foundations in the early years, paving the way for deeper understanding and lifelong learning"
          }
          image={primary}
        />
      </div>
      <div id="secondary">
        <SingleCurriculum
          title={"Secondary"}
          text1={
            "The school environment is thoughtfully structured to guide senior students in cultivating effective study habits and a strong work ethic. To support holistic development, the school has implemented a comprehensive curriculum framework that enhances the teaching-learning experience. Projects are an essential part of this framework, fostering critical thinking and analytical skills"
          }
          text2={
            "Both curricular and co-curricular activities are purposefully designed to impart knowledge, build essential skills, and nurture a positive attitude—equipping students to face real-world challenges with confidence"
          }
          image={secondary}
        />
        <p className="text-center text-lg text-gray-700 my-2">
          The subjects offered at the ICSE level are –
        </p>
        <SubjectSelection />
      </div>
      <div id="isc">
        <SecondCurriculum
          title={"ISC"}
          text1={
            "The School offers three primary academic streams — Science, Commerce, and Humanities. Students are provided with a range of elective subjects tailored to align with their individual interests and career aspirations. In addition, students are required to complete 50 hours of Socially Useful Productive Work (SUPW) and Community Service, which is a mandatory component of the curriculum"
          }
          text2={
            "Our mission through the ISC curriculum is to provide career-focused educational programs and deliver high-quality learning experiences within a dynamic and engaging environment"
          }
          image={isc}
        />
        <p className="text-center text-lg text-gray-700 my-2">
          The subjects offered for these streams are as follows –
        </p>
        <StreamSubjectsTable />
      </div>
    </>
  );
};

export default Academics;
