import React from "react";
import {
  BookOpen,
  GraduationCap,
  LayoutList,
  ChevronRight,
} from "lucide-react";

const SubjectSelection = () => {
  const groups = [
    {
      title: "Group I (Compulsory)",
      icon: <GraduationCap className="h-6 w-6 text-[#fcb900]" />,
      subjects: ["English", "Hindi", "History & Civics", "Geography"],
    },
    {
      title: "Group II (Any TWO)",
      icon: <BookOpen className="h-6 w-6 text-[#fcb900]" />,
      subjects: ["Mathematics OR Commercial Studies", "Science OR Economics"],
    },
    {
      title: "Group III (Any ONE)",
      icon: <LayoutList className="h-6 w-6 text-[#fcb900]" />,
      subjects: [
        "Computer Applications",
        "Commercial Applications",
        "Technical Drawing Applications",
        "Physical Education",
        "Yoga",
        "Art (Nature & Composition)",
      ],
    },
  ];

  return (
    <div
      className="p-6 mx-auto bg-white  rounded-xl"
      style={{ maxWidth: "1200px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              {group.icon}
              <h2 className="text-xl  font-semibold">{group.title}</h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-base">
              {group.subjects.map((subject, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#fcb900] mt-1" />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelection;
