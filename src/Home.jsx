import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import AdminImg from "./assets/adminimg.jpg";
import Navbar from "./components/Navbar";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 flex flex-col-reverse md:flex-row items-center bg-gray-50 justify-center text-center md:text-left">
        {/* Text Section */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">Dr. Geetanjali Kale</h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            Head & Associate Professor, Dept. of Computer Engineering, PICT,
            Secretary, ACM India Woman, Senior Member ACM, Senior Member IEEE,
            Chair ACMW Pune Professional Chap., Former BoS CE SPPU,
            Core member of AnitaB.org
          </p>
          <Link to="/contact"><button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Contact Me
          </button></Link>
        </div>

        {/* Profile Image */}
        <div className="w-40 h-40 md:w-64 md:h-64 mb-6 md:mb-0">
          <img src={AdminImg} alt="Profile" className="rounded-full shadow-lg border-4 border-green-500" />
        </div>
      </main>

    </div>
  );
};

export default Home;
