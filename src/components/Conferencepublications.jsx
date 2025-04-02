import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import AdminImg from "../assets/adminimg.jpg";
import Navbar from "./Navbar";
const Conferencepublications = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">CONFERENCE PUBLICATION</h2>
          <ul className="text-gray-700 space-y-3">
            <li><span className="text-blue-500">★</span>Kale, Geetanjali, and Varsha Patil, Bharatnatyam Adavu Recognition from Depth Data, Third International Conference on Image Information Processing (ICIIP). ieee, 2015.</li>
            <li><span className="text-blue-500">★</span>Kale, Geetanjali, and Varsha Patil. "Motion Correction in Physical Action of Human Body Applied to Yogasana." Advances in Computing and Information Technology. Springer, Berlin, Heidelberg, 2013. 675-680.</li>
            <li><span className="text-blue-500">★</span> Ashutosh Kanitkar, Rutwik Kulkarni, Varun Joshi, Yash Karwa, Sanjyot Gindi and Geetanjali Kale, Automatic Detection of Cervical Region from VIA and VILI Images using Machine Learning, 22nd IEEE International Conference on Computational Science and Engineering, New York.</li>
            <li><span className="text-blue-500">★</span> Kanitkar, A., Joshi, V., Karwa, Y., Gindi, S., & Kale, G. V., Comparison of Machine Learning Algorithms for Cervical Abnormality Detection, 12th International Conference on Contemporary Computing, 8-10 August, Noida, India</li>
            <li><span className="text-blue-500">★</span> Khairnar, D. P., Karad, R. B., Kapse, A., Kale, G., & Jadhav, P. (2020, April). PARTHA: A Visually Impaired Assistance System. In 2020 3rd International Conference on Communication System, Computing and IT Applications (CSCITA) (pp. 32-37). IEEE.</li>
            <li><span className="text-blue-500">★</span>V. Wagh, S. Khandve, I. Joshi, A. Wani, G. Kale and R. Joshi, "Comparative Study of Long Document Classification," TENCON 2021 - 2021 IEEE Region 10 Conference (TENCON), 2021, pp. 732-737, doi: 10.1109/TENCON54134.2021.9707465.</li>
            <li><span className="text-blue-500">★</span> Rutuja Taware, Shraddha Varat, Gaurav Salunke, Chaitanya Gawande, Geetanjali Kale, Rahul Khengare, Raviraj Joshi,  ShufText: A Simple Black Box Approach to Evaluate the Fragility of Text Classification Models, Machine Learning, Optimization, and Data Science. LOD 2021. Lecture Notes in Computer Science(), vol 13163. Springer, Cham. https://doi.org/10.1007/978-3-030-95467-3_18 .</li>
            <li><span className="text-blue-500">★</span> Kale, G., Patil, A., Jain, P., Memon, S., Kulkarni, A., & Marathe, A. (2022, April). Mars Imagery Classification: A Galactic Battle between Knowledge Transfer Networks and their Dual-Attention Armed Adversaries. In 2022 IEEE 7th International conference for Convergence in Technology (I2CT) (pp. 1-8). IEEE</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Conferencepublications;
