import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import Navbar from "./Navbar";


const bookChapters = [
  {
    title: "Research Methodology: A Practical and Scientific Approach.",
    authors: "Geetanjali V. Kale and J. Jayanath",
    chapter: "Introduction to research (Chapter No. 1)",
    links: { pdf: "#" },
  },
  {
    title: "Artificial Intelligence for Internet of Things.",
    authors: "Geetanjali V. Kale, Kalyani Waghmare",
    chapter: "Heterogeneous data management in IoT-based health care systems",
    links: { pdf: "#" },
  },
  {
    title: "XAI Based Intelligent Systems for Society 5.0.",
    authors: "Geetanjali V. Kale, Priyanka Chaudhari",
    chapter: "XAI in human motion recognition and analysis for envisioning society: A systematic review",
    links: { pdf: "#" },
  },
];

const BookChapters = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
       <Navbar/>
      {/* Main Content */}
      <main className="w-full md:ml-64 p-8 bg-white min-h-screen">
        <h2 className="text-2xl font-bold pt-7 text-black-700 mb-4">BOOK CHAPTERS</h2>
        <div className="space-y-4">
          {bookChapters.map((book, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-600"><strong>Authors:</strong> {book.authors}</p>
              <p className="text-sm text-gray-600"><strong>Chapter:</strong> {book.chapter}</p>
              <a href={book.links.pdf} className="text-blue-500 hover:underline mt-2 inline-block">
                View PDF
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BookChapters;
