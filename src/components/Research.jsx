import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";

const Research = () => {
  const [listings, setListings] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/research/${id}`, {
        method: 'DELETE',
      });

      setListings((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete research item:", err);
    }
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/research`)
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
          <SignedIn><Link to="/research/new" className="text-blue-500 hover:underline">
              Add New Research
            </Link></SignedIn>
            
          </form>

          <ul className="text-gray-700 space-y-3">
          <li><span className="text-blue-500">★</span> Google Scolar : <a href="https://scholar.google.com/citations?user=rJpGXxoAAAAJ&hl=en&oi=ao" className=" text-blue-500" target="_blank" rel="noopener noreferrer">Google Scolar</a></li>
          <li><span className="text-blue-500">★</span> Scopus : <a href="https://www.scopus.com/authid/detail.uri?authorId=55446294200" className=" text-blue-500" target="_blank" rel="noopener noreferrer">Scopus </a></li>

            {listings.map((item) => (
              <li key={item._id} className="flex justify-between items-center">
                <span>
                  <span className="text-blue-500">★</span> {item.description}
                </span>
                <SignedIn> <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:text-red-700 pl-3"
                >
                  Delete
                </button></SignedIn>
               
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Research;
