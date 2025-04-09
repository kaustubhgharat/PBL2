import React, { useState } from "react";
import Navbar from "./Navbar";

const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 flex flex-col-reverse md:flex-row items-center bg-gray-50 justify-center text-center md:text-left">
        
      </main>

    </div>
  );
};

export default Gallery;
