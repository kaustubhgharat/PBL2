import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";

const BookChapters = () => {
  const [chapters, setChapters] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Fetch chapters
  const fetchChapters = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/Bookchapters`);
      const data = await res.json();
      setChapters(data);
    } catch (err) {
      console.error("Failed to fetch chapters", err);
    }
  };

  // Delete chapter
  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/Bookchapters/${id}`, {
        method: "DELETE",
      });
      setChapters(chapters.filter((ch) => ch._id !== id));
    } catch (err) {
      console.error("Failed to delete chapter", err);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen p-8 md:ml-64 bg-white">
        <h2 className="text-2xl font-bold text-black-700 pt-7 mb-4">BOOK CHAPTERS</h2>

        <SignedIn>
          <Link
            to="/Bookchapters/new"
            className="text-blue-500 hover:underline mb-4 inline-block"
          >
            Add New Chapter
          </Link>
        </SignedIn>

        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div
              key={chapter._id}
              className="p-4 bg-white rounded-lg shadow-md border border-gray-300"
            >
              <h2 className="text-lg font-semibold">{chapter.title}</h2>
              <p className="text-sm text-gray-600"><strong>Authors:</strong> {chapter.authors}</p>
              <p className="text-sm text-gray-600"><strong>Chapter:</strong> {chapter.chapter}</p>

              <SignedIn>
                <button
                  onClick={() => handleDelete(chapter._id)}
                  className="text-red-500 hover:text-red-700 mt-2 inline-block"
                >
                  Delete
                </button>
              </SignedIn>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BookChapters;
