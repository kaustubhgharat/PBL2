import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    fetch(`${BACKEND_URL}/awards`)
      .then((res) => res.json())
      .then((data) => setAwards(data))
      .catch((err) => console.error("Error fetching awards:", err));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${BACKEND_URL}/awards/${id}`, {
      method: "DELETE",
    });
    setAwards(awards.filter((item) => item._id !== id));
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">HONORS AND AWARDS</h2>

          <Link to="/awards/new" className="text-blue-500 hover:underline mb-4 block">
            Add New Award
          </Link>

          <ul className="text-gray-700 space-y-3">
            {awards.map((award) => (
              <li key={award._id} className="flex justify-between items-center">
                <span><span className="text-blue-500">★</span> {award.description}</span>
                <button
                  onClick={() => handleDelete(award._id)}
                  className="text-red-500 hover:text-red-700 ml-4"
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

export default Awards;
