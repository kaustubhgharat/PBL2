import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Talks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    fetch("https://pbl-2-backend.vercel.app/talks")
      .then(res => res.json())
      .then(data => setTalks(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://pbl-2-backend.vercel.app/talks/${id}`, { method: 'DELETE' });
    setTalks((prev) => prev.filter(t => t._id !== id));
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">INVITED TALKS / SESSIONS</h2>
          <Link to="/talks/new" className="text-blue-500 hover:underline mb-4">Add New Talk</Link>
          <ul className="text-gray-700 space-y-3">
            {talks.map((t) => (
              <li key={t._id} className="flex justify-between items-center">
                <span><span className="text-blue-500">★</span> {t.description}</span>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="text-red-500 hover:text-red-700 pl-3"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Talks;
