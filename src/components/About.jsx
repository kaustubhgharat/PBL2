import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";

const About = () => {
  const [entries, setEntries] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const fetchAboutItems = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/about`);
      const data = await res.json();
      setEntries(data);
    } catch (err) {
      console.error("Failed to fetch about items", err);
    }
  };

  const handleDelete = async (id) => {
    await fetch(`${BACKEND_URL}/about/${id}`, {
      method: "DELETE",
    });
    setEntries(entries.filter((entry) => entry._id !== id));
  };

  useEffect(() => {
    fetchAboutItems();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 bg-gray-50 text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">ABOUT</h2>

          <SignedIn>
          <Link
            to="/about/new"
            className="text-blue-500 hover:underline mb-4 inline-block"
          >
            Add New About Item
          </Link>
          </SignedIn>

          <ul className="text-gray-700 space-y-3">
            {entries.map((item) => (
              <li key={item._id} className="flex justify-between items-start">
                <span><span className="text-blue-500">★</span> {item.description}</span>
                
                <SignedIn><button
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

export default About;
