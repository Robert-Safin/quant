"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className="flex flex-col mx-auto fixed w-full z-50">
      <nav
        className={`transition-all bg-bgBlack flex justify-between px-5 py-4 ${
          menuClicked ? "border-b border-gray" : ""
        }`}
      >
        <div className="relative">
          <p className="text-white text-2xl tracking-[2px] w-full h-full overflow-hidden">
            QUANT
          </p>
          <div
            className={`transition-all absolute w-full h-[1px] bg-blobMiddle top-0 z-50 animate-fade-right animate-delay-100`}
          />
          <div
            className={`transition-all absolute w-full h-[1px] bg-blobRight top-1/2 z-50 animate-fade-left animate-delay-300`}
          />
          <div
            className={`transition-all absolute w-full h-[1px] bg-blobLeft bottom-0 z-50 animate-fade-right animate-delay-500`}
          />
        </div>

        {!menuClicked && (
          <div
            className="flex flex-col justify-center space-y-[7px] py-1 px-2 animate-fade"
            onClick={() => {
              setMenuClicked(!menuClicked);
            }}
          >
            <div className="w-6 h-[2px] bg-white rounded-3xl" />
            <div className="w-6 h-[2px] bg-white rounded-3xl" />
            <div className="w-6 h-[2px] bg-white rounded-3xl" />
          </div>
        )}
        {menuClicked && (
          <div
            className="relative flex  animate-fade"
            onClick={() => {
              setMenuClicked(!menuClicked);
            }}
          >
            <div className="absolute w-[2px] h-8 bg-white rounded-3xl -rotate-45 right-[18px]" />
            <div className="absolute w-[2px] h-8 bg-white rounded-3xl rotate-45 right-[18px]" />
          </div>
        )}
      </nav>
      {menuClicked && (
        <div className="md:w-full md:flex md:justify-end ">
          <div className="bg-bgBlack animate-fade-left animate-duration-1000 flex flex-col justify-between px-4 py-8 h-[calc(100vh-65px)] md:w-[400px] md:border-l border-gray ">
            <div>
              <div className="relative w-fit secondaryHeader my-2 group ">
                <p> About Us</p>
                <div className=" transition-all absolute w-full h-1 opacity-0 gradient group-hover:opacity-100 group-hover:animate-pulse" />
              </div>
              <div className="relative w-fit secondaryHeader my-2 group ">
                <p>Our Services</p>
                <div className=" transition-all absolute w-full h-1 opacity-0 gradient group-hover:opacity-100 group-hover:animate-pulse" />
              </div>
              <div className="relative w-fit secondaryHeader my-2 group ">
                <p>Work with Us</p>
                <div className=" transition-all absolute w-full h-1 opacity-0 gradient group-hover:opacity-100 group-hover:animate-pulse" />
              </div>
              <div className="relative w-fit secondaryHeader my-2 group ">
                <p>Blog</p>
                <div className=" transition-all absolute w-full h-1 opacity-0 gradient group-hover:opacity-100 group-hover:animate-pulse" />
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              <FaTwitterSquare className="text-white text-3xl hover:text-bgBlack hover:gradient" />
              <FaLinkedin className="text-white text-3xl hover:text-bgBlack hover:gradient" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
