import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
function Navbar() {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full font-bold bg-gray-400  text-black">
      <div className="flex items-center justify-between">
        <h1>🚀My Website</h1>
        <ul className="flex text-black">
          <li>
            <a href="#" className="flex items-center gap-2 p-4 hover:text-blue">
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 p-4">
              <FaInfoCircle />
              About
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 p-4">
              <FaEnvelope />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
