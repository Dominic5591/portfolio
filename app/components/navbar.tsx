import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-black sticky top-0 z-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <p className="p-14 text-white text-xl">Dominic Cashiola</p>
          <ul className="flex gap-x-10 p-4 text-white">
            <li>
              <Link href={`https://github.com/Dominic5591`} className="p-14 text-white">Github</Link>
            </li>
            <li>
              <Link href={`https://www.linkedin.com/in/dominic-c-1076322a8/`} className="text-white">LinkedIn</Link>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1gyhEulqfbnCDSmE5jL7Fp4ZGGwWthNEl1DSQCxnZm_A/edit?usp=sharing" download="resume.pdf" className="p-14 text-white">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
