import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Conferencepublications = () => {
  const [listings, setListings] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/conferencepublications/${id}`, {
        method: 'DELETE',
      });

      setListings((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete listing:", err);
    }
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/conferencepublications`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched conference publications:");
        setListings(data);
      })
      .catch(err => console.error("Failed to fetch listings", err));
  }, []);

  return (
    <div className="flex">
      <Navbar />

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">
            CONFERENCE PUBLICATIONS
          </h2>

          <form method="GET" action="/conferencepublications/new">
            <Link to="/conferencepublications/new" className="text-blue-500 hover:underline">
              Add New Publication
            </Link>
          </form>

          <ul className="text-gray-700 space-y-3">
            {listings.map((l) => (
              <li key={l._id} className="flex justify-between items-center">
                <span>
                  <span className="text-blue-500">★</span> {l.description}
                </span>
                <button
                  onClick={() => handleDelete(l._id)}
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

export default Conferencepublications;
