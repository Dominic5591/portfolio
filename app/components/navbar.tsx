'use client';

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="w-full h-20 bg-black sticky top-0 z-10">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <p className="p-14 text-white text-xl">Dominic Cashiola</p>
          <ul className="flex gap-x-10 p-4 text-white">
            <div className="relative">
              <button
                onMouseEnter={toggleDropdown}
                // 
                onClick={toggleDropdown}
                className=" text-white hover:text-gray-300 focus:outline-none"
              >
                Resume
              </button>
              {showDropdown && (
                <div onMouseLeave={toggleDropdown} className="z-0 absolute top-full mt-2 mr- bg-white rounded-lg shadow-lg">
                  <ul className="flex flex-col gap-y-2 p-2">
                    <li>
                      <a
                        href="https://docs.google.com/document/d/1jcUv_kukAblHYjTmR0I2g2mVSHlQUssUMS3rV3ADUyE/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        View
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.google.com/document/d/1jcUv_kukAblHYjTmR0I2g2mVSHlQUssUMS3rV3ADUyE/export?format=pdf"
                        download="resume.pdf"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Download
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <li className="ml-14">
              <Link href={`https://github.com/Dominic5591`} className="text-white hover:text-gray-300">Github</Link>
            </li>
            <li className="mr-14 ml-14">
              <Link href={`https://www.linkedin.com/in/dominic-c-1076322a8/`} className="text-white hover:text-gray-300">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
