import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewConferencePublication = () => {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${BACKEND_URL}/conferencepublications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ listing: { description } }),
    });
    setDescription("");
    navigate("/conferencepublications");
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">
            Add a New Conference Publication
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Conference Publication Description"
              className="w-full h-24 p-2 border rounded-md"
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

export default NewConferencePublication;
