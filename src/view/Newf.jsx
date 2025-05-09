import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Newf = () => {
  const [description, setDescription] = useState("");
  const navigate = useNavigate(); // hook for navigation
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URL}/patents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listing: { description } }),
      });
      const data = await res.json();
      console.log("Created:", data);
      setDescription(""); // Clear form
      navigate("/patents"); // Navigate AFTER successful POST
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex">
      <Navbar />

      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4 ">Add New Patent</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Talk Description"
              className="w-full h-24 p-2 border rounded-md"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Newf;
