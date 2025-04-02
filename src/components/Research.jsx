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
const Research = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Navbar/>
       {/* Main Content */}
       <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4"> RESEARCH </h2>
          <ul className="text-gray-700 space-y-3">
          <li><span className="text-blue-500">★</span>A Survey of Motion Prediction for Autonomous Vehicles Using the Lyft Dataset, Medhe, A., Sewatkar, M., Hendre, S., Kale, G., Lecture Notes in Networks and SystemsThis link is disabled., 2024, 819, pp. 429–441 </li>
          <li><span className="text-blue-500">★</span>Evaluating Performances of Attention-Based Merge Architecture Models for Image Captioning in Indian Languages, Tangsali, R., Chhatre, S., Naik, S., Bhagwat, P., Kale, G., Journal of Image and Graphics(United Kingdom)This link is disabled., 2023, 11(3), pp. 294–301 </li>
          <li><span className="text-blue-500">★</span>XAI in human motion recognition and analysis for envisioning society: A systematic review, Chaudhari, P., Kale, G., XAI Based Intelligent Systems for Society 5.0, 2023, pp. 203–222</li>
          <li><span className="text-blue-500">★</span>Comparative Analysis of Weighted Ensemble and Majority Voting Algorithms for Intrusion Detection in OpenStack Cloud Environments, Patil, P., Kale, G., Bivalkar, N., Kolhatkar, A., International Journal of Advanced Computer Science and ApplicationsThis link is disabled., 2023, 14(12), pp. 741–747. </li>
          <li><span className="text-blue-500">★</span>Kiran N. Girase, Dr. Geetanjali V. Kale, Kimaya R. Urane” Domain Classification for Marathi blog articles using Deep learning” International Journal on Recent and Innovation Trends in Computing and Communication ISSN: 2321-8169 Volume: 11 Issue: 10, pp 1-8,2023.</li>
          <li><span className="text-blue-500">★</span>Hiwarkhedkar, S. et al. (2024). TextGram: Towards a Better Domain-Adaptive Pretraining. In: Chakravarthi, B.R., et al. Speech and Language Technologies for Low-Resource Languages. SPELL 2023. Communications in Computer and Information Science, vol 2046. Springer, Cham. https://doi.org/10.1007/978-3-031-58495-4_12</li>
          <li><span className="text-blue-500">★</span>Geetanjali Kale, Varsha Patil, Mousami Munot, “A novel and intelligent vision-based tutor for Yogāsana: e-YogaGuru” Machine Vision and Applications ( MVPA), Vol.  32, Issue1, 2020, pp. 1-17</li>
          <li><span className="text-blue-500">★</span>Kale, Geetanjali Vinayak, and Varsha Hemant Patil, A study of vision based human motion recognition and analysis, International Journal of Ambient Computing and Intelligence (IJACI) 7.2 (2016): 75-92. (Scopus, UGC approved)</li>
          <li><span className="text-blue-500">★</span>Khankari, Nilesh, and Geetanjali Kale. "Survey on one time password." International Journal of Computer Engineering and Applications 9.3 (2015). (UGC Approved, Thomson Reuters) </li>
          <li><span className="text-blue-500">★</span>Shreyas R Chim, Geetanjali V Kale, A Survey of Methods for Automatic Question Paper Generation System, The International journal of analytical and experimental modal analysis Volume XI, Issue VII, pp 9-12, July/2019 ISSN NO: 0886-9367 (Scopus UGC Care list) </li>
          <li><span className="text-blue-500">★</span>Priyanka Kukade, Geetanjali Kale, Survey of Load Balancing and Scaling approaches in cloud, International Journal of Emerging Trends & Technology in Computer Science (IJETTCS), January – February 2015 (Scopus, UGC approved)</li>
          <li><span className="text-blue-500">★</span>Deshmukh Puja, Kale Geetanjali Vinayak, A survey of music recommendation system, Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol 3.3 (2018): 1721-1729. (Impact Factor: 4.7 SCOPUS) </li>
          <li><span className="text-blue-500">★</span>Chim, Mr Shreyas R., and Geetanjali V. Kale. Automatic Question Paper Generation using Parametric Randomization, Journal of the Gujarat Research Society 21, no. 2 (2019): 444-451. (UGC-CARE List Group: Group D, Impact Factor: 4.3) </li>
          <li><span className="text-blue-500">★</span>Shete, Ruchika, and Geetanjali Kale. "Smart Evaluation System." Journal of the Gujarat Research Society 21, no. 1 (2019): 148-150. (UGC-CARE List Group: Group D, Impact Factor: 4.3)</li>
          <li><span className="text-blue-500">★</span>Ruchika Shete, Geetanjali Kale, Study of Document Segmentation and English Character Recognition techniques, Journal of Emerging Technologies and Innovative Research (JETIR), Volume 6, Issue 3, March 2019, pp 143-148. ISSN-2349-5162 (UGC Approved & 5.87 Impact Factor) </li>
          <li><span className="text-blue-500">★</span>Gupta, Yash, Akanksha Joshi, and Geetanjali Kale, Healthcare Analytics Systems: An Overview, International Journal of Engineering Science 18898 (2018). </li>
          <li><span className="text-blue-500">★</span>Geetanjali V. Kale and Varsha H. Patil, Real Time Human Action Recognition using Kinematic State Model. Advances in Image and Video Processing, Volume 2 No 6, Dec (2014); pp: 17-22 (Open Access) </li>
          <li><span className="text-blue-500">★</span>Khankari Nilesh B., and G. V. Kale, One Time Password Generation for Multi Factor Authentication using Graphical Password, International Journal of Engineering Research and General Science Volume 3, Issue 5, September-October 2015, ISSN 2091-2730</li>
          <li><span className="text-blue-500">★</span>Patil Snehal, and Geetanjali Kale, Survey on GPU based Linear Solver, IJSTE - International Journal of Science Technology & Engineering, Volume 2, Issue 11, May 2016 ISSN (online): 2349-784X (peer-reviewed) </li>
          <li><span className="text-blue-500">★</span>Priyanka Kukade, Geetanjali Kale, Auto-Scaling of Micro-Services Using Containerization, International Journal of Science and Research (IJSR), 9, September 2015. </li>
          <li><span className="text-blue-500">★</span>Y. Thakur & G.V. Kale, IOT based health alliance help desk, International Journal of Engineering Technology Science and Research IJETSR, Academic Science, pp 2394-3386, 2017. </li>
          <li><span className="text-blue-500">★</span>V. H. Patil and G. V. Kale, Vision Based Monitoring System for Old Age Homes, IJCTA, 10(9), 2017, pp. 687-691, International Science Press, 2017. </li>
          <li><span className="text-blue-500">★</span>Kale Geetanjali Vinayak, Human Activity Recognition on Real Time and Offline Dataset, International Journal of Intelligent Systems and Applications in Engineering 7.1 (2019): 60-65. (Web of Science, Peer reviewed open source with no publishing fee) </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Research;