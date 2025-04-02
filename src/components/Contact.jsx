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
const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>

      {/* Main Content */}

      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">CONTACT</h2>
          <ul className="text-gray-700 space-y-3">
            <li><span className="text-blue-500">★</span> Dr. Geetanjali Kale Head & Associate Professor, Dept. of Computer Engineering, PICT <br />
              Secretary, ACM India Woman | Senior Member ACM & IEEE <br />
              Chair ACMW Pune Professional Chap. | Former BoS CE SPPU <br />
              Core member of AnitaB.org</li>

            
            <li><span className="text-blue-500">★</span> Likedin : <a href="https://www.linkedin.com/in/dr-geetanjali-kale-17148922/" className=" text-blue-500" target="_blank" rel="noopener noreferrer">Likedin</a></li>
            <li><span className="text-blue-500">★</span>📞 <span className="ml-2">+91 98 22 477645</span></li>
            <li><span className="text-blue-500">★</span>✉️ <span className="ml-2">gvkale@pict.edu</span></li>
            <li><span className="text-blue-500">★</span>✉️ <span className="ml-2">gilkale@gmail.com</span></li>

          </ul>
        </div>
      </main>
    </div>
  );
};

export default Contact;
