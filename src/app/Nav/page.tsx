"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-10">
        <div className="ml-4 md:ml-28 text-lg md:text-xl font-bold">Logo</div>

        <div className="relative">
          <div className="md:hidden" onClick={toggleMenu}>
            <RxHamburgerMenu className="text-2xl cursor-pointer" />
          </div>

          {isOpen && (
            <ul className="flex flex-col md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4">
              <Link href="/"><li className="text-lg hover:text-gray-700">Home</li></Link>
              <Link href="/"><li className="text-lg hover:text-gray-700">Blog</li></Link>
              <Link href="/"><li className="text-lg hover:text-gray-700">About</li></Link>
              <Link href="/"><li className="text-lg hover:text-gray-700">Contact</li></Link>
            </ul>
          )}

          <ul className="hidden md:flex md:justify-end gap-6 md:gap-10 items-center">
            <Link href="/"><li className="text-lg hover:text-gray-700">Home</li></Link>
            <Link href="/"><li className="text-lg hover:text-gray-700">Blog</li></Link>
            <Link href="/"><li className="text-lg hover:text-gray-700">About</li></Link>
            <Link href="/"><li className="text-lg hover:text-gray-700">Contact</li></Link>
          </ul>
        </div>
      </div>

      <hr className="border-b-1 border-gray-400 w-full mt-4 md:mt-10 mx-auto" />

      <div className="uppercase flex justify-center text-6xl md:text-9xl font-bold p-4">
        The Blog
      </div>

      <hr className="border-b-1 border-gray-400 w-full mt-4 md:mt-10 mx-auto" />
    </main>
  );
};

export default Nav;
