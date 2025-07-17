import React from "react";

const StreamSubjectsTable = () => {
  return (
    <div className="overflow-x-auto px-4 my-6">
      <div className="mx-auto w-full" style={{ maxWidth: "1200px" }}>
        <table className="min-w-full border border-black text-center text-sm md:text-base">
          <thead>
            <tr className="bg-[#541418] text-white font-bold">
              <th className="border border-black py-2 px-4">SCIENCE</th>
              <th className="border border-black py-2 px-4">COMMERCE</th>
              <th className="border border-black py-2 px-4">HUMANITIES</th>
            </tr>
          </thead>

          <tbody>
            {/* Compulsory Subjects Label */}
            <tr className="bg-[#fcb900] font-semibold">
              <td colSpan="3" className="border border-black py-2 px-4">
                COMPULSORY SUBJECTS
              </td>
            </tr>

            {/* Compulsory Subjects */}
            <tr>
              <td className="border border-black py-2 px-4">
                Literature in English
              </td>
              <td className="border border-black py-2 px-4">
                Literature in English
              </td>
              <td className="border border-black py-2 px-4">
                Literature in English
              </td>
            </tr>
            <tr>
              <td className="border border-black py-2 px-4">
                English Language
              </td>
              <td className="border border-black py-2 px-4">
                English Language
              </td>
              <td className="border border-black py-2 px-4">
                English Language
              </td>
            </tr>
            <tr>
              <td className="border border-black py-2 px-4">Physics</td>
              <td className="border border-black py-2 px-4">Commerce</td>
              <td className="border border-black py-2 px-4">Psychology</td>
            </tr>
            <tr>
              <td className="border border-black py-2 px-4">Chemistry</td>
              <td className="border border-black py-2 px-4">Accounts</td>
              <td className="border border-black py-2 px-4">Sociology</td>
            </tr>

            {/* Elective Subjects Label */}
            <tr className="bg-[#fcb900] font-semibold">
              <td colSpan="3" className="border border-black py-2 px-4">
                ELECTIVE SUBJECTS
              </td>
            </tr>

            {/* Elective Subjects */}
            <tr>
              <td className="border border-black py-2 px-4">
                Mathematics / Business Studies / Physical Education
              </td>
              <td className="border border-black py-2 px-4">
                Mathematics / Business Studies / Physical Education
              </td>
              <td className="border border-black py-2 px-4">
                Mathematics / Business Studies / Physical Education
              </td>
            </tr>
            <tr>
              <td className="border border-black py-2 px-4">
                Biology / Economics / Art / Computer Science
              </td>
              <td className="border border-black py-2 px-4">
                Economics / Art / Computer Science
              </td>
              <td className="border border-black py-2 px-4">
                Economics / Art / Computer Science / Biology / Political Science
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StreamSubjectsTable;
