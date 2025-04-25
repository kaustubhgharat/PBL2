import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";

const PhdStudents = () => {
  const [students, setStudents] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleDelete = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/phdstudents/${id}`, {
        method: "DELETE",
      });
      setStudents((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete student:", err);
    }
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/phdstudents`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched students:", data);
        setStudents(data);
      })
      .catch((err) => console.error("Failed to fetch students", err));
  }, []);

  return (
    <div className="flex">
      <Navbar />

      {/* Main Content */}
      <main className="w-full min-h-screen p-8 md:ml-64 bg-white">
        <div className="max-w-5xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">Ph.D. Students</h2>

          {/* Add New Student Link */}
          <SignedIn>
            <Link to="/phdstudents/new" className="text-blue-500 hover:underline mb-6 block">
              Add New Ph.D. Student
            </Link>
          </SignedIn>

          {/* Student List */}
          <ul className="text-gray-700 space-y-5 mt-4">
            {students.map((student, index) => (
              <li key={student._id} className="border p-4 rounded-lg bg-white shadow-sm">
                <p><span className="font-semibold">Sr. No:</span> {index + 1}</p>
                <p><span className="font-semibold">Ph.D. Scholar:</span> {student.name}</p>
                <p><span className="font-semibold">Topic:</span> {student.topic}</p>
                <p><span className="font-semibold">Guide Name:</span> {student.guide}</p>
                <p><span className="font-semibold">Academic Year:</span> {student.academicYear}</p>

                {/* Delete Button */}
                <SignedIn>
                  <button
                    onClick={() => handleDelete(student._id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    Delete
                  </button>
                </SignedIn>
              </li>
            ))}
          </ul>

        </div>
      </main>
    </div>
  );
};

export default PhdStudents;
