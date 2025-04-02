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

const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 flex flex-col-reverse md:flex-row items-center bg-gray-50 justify-center text-center md:text-left">
        
      </main>

    </div>
  );
};

export default Gallery;
