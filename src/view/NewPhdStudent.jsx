import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewPhdStudent = () => {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [guide, setGuide] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${BACKEND_URL}/phdstudents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        listing: { name, topic, guide, academicYear },
      }),
    });
    setName("");
    setTopic("");
    setGuide("");
    setAcademicYear("");
    navigate("/phdstudents");
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">
            Add a New Ph.D. Student
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Student Name"
              className="w-full p-2 border rounded-md"
              required
            />

            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter Research Topic"
              className="w-full h-24 p-2 border rounded-md"
              required
            />

            <input
              type="text"
              value={guide}
              onChange={(e) => setGuide(e.target.value)}
              placeholder="Enter Guide Name"
              className="w-full p-2 border rounded-md"
              required
            />

            <input
              type="text"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              placeholder="Enter Academic Year (e.g., In Progress)"
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

export default NewPhdStudent;
