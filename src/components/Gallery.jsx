import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { SignedIn } from "@clerk/clerk-react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/gallery`);
      setImages(res.data);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await axios.post(`${BACKEND_URL}/gallery/upload`, formData);
      setImages([...images, res.data]);
      setSelectedFile(null);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/gallery/${id}`);
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  };

  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 bg-gray-50 text-left">
        <div className="max-w-6xl mx-auto py-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Gallery</h1>

          <SignedIn>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border px-4 py-2 rounded-md w-full sm:w-72"
              />
              <button
                onClick={handleUpload}
                className="bg-green-600 text-white px-4 py-2 rounded-md w-full sm:w-auto hover:bg-green-700"
              >
                Upload Image
              </button>
            </div>
          </SignedIn>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image._id} className="relative group bg-white rounded-lg shadow-lg overflow-hidden h-80 flex items-center justify-center">
                <img
                  src={image.url}
                  alt="Gallery item"
                  className="max-w-full max-h-full object-contain"
                />
                <SignedIn>
                  <button
                    onClick={() => handleDeleteImage(image._id)}
                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition"
                  >
                    Delete
                  </button>
                </SignedIn>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
