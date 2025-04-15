import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewBookChapter = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [chapter, setChapter] = useState("");
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newChapter = { title, authors, chapter };
    try {
      await fetch(`${BACKEND_URL}/book-chapters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newChapter),
      });
      // Clear form
      setTitle("");
      setAuthors("");
      setChapter("");
      navigate("/book-chapters");
    } catch (err) {
      console.error("Failed to add book chapter", err);
    }
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 bg-gray-50">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">
            Add a New Book Chapter
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              placeholder="Authors"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              placeholder="Chapter"
              className="w-full p-2 border rounded-md"
              required
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NewBookChapter;
