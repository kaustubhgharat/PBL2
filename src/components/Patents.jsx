import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import AdminImg from "../assets/adminimg.jpg";

const Patents = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-600 p-2 rounded-lg text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
            <aside
              className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-6 border-r border-gray-300 transform ${menuOpen ? "translate-x-0" : "-translate-x-64"
                } md:translate-x-0 transition-transform duration-300 ease-in-out`}
            >
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-green-600 font-bold">
                  <FaHome />
                  <Link to="/" className="hover:text-gray-500">Home</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaUser />
                  <Link to="/about" className="hover:text-gray-500">About</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaImages />
                  <Link to="/gallery" className="hover:text-gray-500">Gallery</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaAward />
                  <Link to="/awards" className="hover:text-gray-500">Awards</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaSearch />
                  <Link to="/research" className="hover:text-gray-500">Research</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaBriefcase />
                  <Link to="/positions" className="hover:text-gray-500">Positions</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaProjectDiagram />
                  <Link to="/projects" className="hover:text-gray-500">Projects</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaBook />
                  <Link to="/resources" className="hover:text-gray-500">Resources</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaFileAlt />
                  <Link to="/publications" className="hover:text-gray-500">Publications</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaChalkboardTeacher />
                  <Link to="/talks" className="hover:text-gray-500">Invited Talks</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaUsers />
                  <Link to="/patents" className="hover:text-gray-500">Patents</Link>
                </li>
                <hr />
                <li className="flex items-center space-x-3">
                  <FaEnvelope />
                  <Link to="/contact" className="hover:text-gray-500">Contact</Link>
                </li>
              </ul>
            </aside>

       {/* Main Content */}
       <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4"> Patents</h2>
          <ul className="text-gray-700 space-y-3">
          <li><span className="text-blue-500">★</span>Granted Patent on 'System and Method for Motion Analysis and Feedback for Amendment of Human Action.' (Patent No.: 201621029482, Registered on: 30/08/2016)</li>
          <li><span className="text-blue-500">★</span>Granted Patent 'System and method for automated evaluation of multimodal content.' (Patent No.: 202221060608, Registered on: 11/11/2022 Granted)</li>
          <li><span className="text-blue-500">★</span>Granted Patent on 'System and method for analysis of human movement and suggestions of amendment if any.' (Patent No.: 2023/05683)</li>
          <li><span className="text-blue-500">★</span>'Personalized physical activity recommendations system using federated learning (FL) and a method.' (Patent No.: 202321029305, Published on: 15/09/2023)</li>
          <li><span className="text-blue-500">★</span>'Hydroponic Nutrient Prediction Device using IoT.' (Patent No.: 202321039419, Published on: 18/08/2023)</li>
          
          
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Patents;