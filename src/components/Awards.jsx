import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import AdminImg from "../assets/adminimg.jpg";
import Navbar from "./Navbar";
const Awards = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">HONORS AND AWARDS</h2>
          <ul className="text-gray-700 space-y-3">
            <li><span className="text-blue-500">★</span> Council Member ACM India Internal Engagement Committee (2020 - till date)</li>
            <li><span className="text-blue-500">★</span> Secretary/Treasurer ACM India Women Committee (2023-2027)</li>
            <li><span className="text-blue-500">★</span> Secretary ACM Pune Professional Chapter (2019 - till date)</li>
            <li><span className="text-blue-500">★</span> Chair ACM-W Pune Professional Chapter (2022 - Till date)</li>
            <li><span className="text-blue-500">★</span> Received a certificate from ACM for recognition of 8 years of service.</li>
            <li><span className="text-blue-500">★</span> Former Member, BoS, Computer Engineering, SPPU, Pune (2017 to 2022)</li>
            <li><span className="text-blue-500">★</span> Former Member, BoS, B. Voc., SPPU, Pune (2019-2021)</li>
            <li><span className="text-blue-500">★</span> PICT ACM Student Chapter (PASC) Counselor since March 2012; PICT received ACM India Best Student Chapter Award four times in a row (2017 to 2020)</li>
            <li><span className="text-blue-500">★</span> Completed “Cambridge International Certification in Teaching and Training” with Distinction.</li>
            <li><span className="text-blue-500">★</span> Classroom innovations selected for demonstration & nominated as West Zone representative in Experience Zone 2010 at Bangalore. Demonstrations were visited by Honorable Education Minister Mr. Kapil Sibbal, Chairman Wipro Mr. Azim Premji, and other academicians.</li>
            <li><span className="text-blue-500">★</span> Wipro’s Mission 10X Certificate in “Teaching Learning,” with best assignment remark & invited to share experiences at First Mission 10xian Maharashtra Meet.</li>
            <li><span className="text-blue-500">★</span> Completed NITTTR’s staff development program on “Developing Teaching Competencies” (Credits Awarded - 2).</li>
          </ul>
        </div>
      </main>


    </div>
  );
};

export default Awards;
