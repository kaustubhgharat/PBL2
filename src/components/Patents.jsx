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

const Patents = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>

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