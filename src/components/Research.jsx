import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Research = () => {
  const [listings, setListings] = useState([]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/research/${id}`, {
        method: 'DELETE',
      });

      setListings((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete research item:", err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/research")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched research listings:", data);
        setListings(data);
      })
      .catch((err) => console.error("Failed to fetch research items", err));
  }, []);

  return (
    <div className="flex">
      <Navbar />

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">
            RESEARCH
          </h2>

          <form method="GET" action="/research/new">
            <Link to="/research/new" className="text-blue-500 hover:underline">
              Add New Research
            </Link>
          </form>

          <ul className="text-gray-700 space-y-3">
            {listings.map((item) => (
              <li key={item._id} className="flex justify-between items-center">
                <span>
                  <span className="text-blue-500">★</span> {item.description}
                </span>
                <button
                  onClick={() => handleDelete(item._id)}
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

export default Research;
