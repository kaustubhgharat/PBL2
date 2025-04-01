import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaPlus, FaTrash, FaUsers, FaBars, FaTimes, FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase, FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher, FaEnvelope } from "react-icons/fa";

const Patents = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [patents, setPatents] = useState([]);
  const [newPatent, setNewPatent] = useState("");

  useEffect(() => {
    axios.get("https://vercel.link/unused-build-settings")
      .then(response => setPatents(response.data))
      .catch(error => console.error("Error fetching patents:", error));
  }, []);

  const handleAddPatent = () => {
    if (!newPatent.trim()) return;
    axios.post("https://vercel.link/unused-build-settings", { text: newPatent })
      .then(response => {
        setPatents([...patents, response.data]);
        setNewPatent("");
      })
      .catch(error => console.error("Error adding patent:", error));
  };

  const handleDeletePatent = (id) => {
    axios.delete(`https://vercel.link/unused-build-settings/${id}`)
      .then(() => {
        setPatents(patents.filter(p => p.id !== id));
      })
      .catch(error => console.error("Error deleting patent:", error));
  };

  return (
    <div className="flex">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-600 p-2 rounded-lg text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-6 border-r border-gray-300 transform ${menuOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 transition-transform duration-300 ease-in-out`}
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
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">Patents</h2>

          {/* Input for adding new patent */}
          <div className="flex mb-4">
            <input
              type="text"
              value={newPatent}
              onChange={(e) => setNewPatent(e.target.value)}
              placeholder="Enter new patent..."
              className="border p-2 flex-grow rounded"
            />
            <button
              onClick={handleAddPatent}
              className="bg-green-500 text-white p-2 rounded ml-2 flex items-center"
            >
              <FaPlus className="mr-1" /> Add
            </button>
          </div>

          {/* Patent List */}
          <ul className="space-y-3">
            {patents.map((patent) => (
              <li key={patent.id} className="bg-gray-100 p-3 rounded flex justify-between">
                <span>{patent.text}</span>
                <button
                  onClick={() => handleDeletePatent(patent.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Patents;