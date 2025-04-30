import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

const EditPatent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`${BACKEND_URL}/patents`)
      .then((res) => res.json())
      .then((data) => {
        const patent = data.find((p) => p._id === id);
        if (patent) setDescription(patent.description);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${BACKEND_URL}/patents/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listing: { description } }),
      });
      navigate("/patents");
    } catch (err) {
      console.error("Failed to update listing:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start px-4 pt-10 md:pt-20">
        <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Edit Patent</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <input
                type="text"
                placeholder="Enter updated patent description"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditPatent;
