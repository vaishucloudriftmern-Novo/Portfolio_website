import React from "react";
function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center  px-6 py-3 text-blue-500 font-bold bg-grey">
      <div>
        <h1>🚀My Website</h1>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
