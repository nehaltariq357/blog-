"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Fade Down
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Animation Preview
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        If you&apos;re seeing this, thank you for trying my project out! - C.J.A
      </motion.div>
    </motion.div>
  );
}

const BLOG_ANIMATION = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

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

      <motion.div
        variants={BLOG_ANIMATION}
        initial="hidden"
        animate="visible"
        className="uppercase flex justify-center text-6xl md:text-9xl font-bold p-4"
      >
        The Blog
      </motion.div>

      <hr className="border-b-1 border-gray-400 w-full mt-4 md:mt-10 mx-auto" />
    </main>
  );
};

export default Nav;
