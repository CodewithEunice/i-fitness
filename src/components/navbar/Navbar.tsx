"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { title } from "process";
import { link } from "fs";

const itemstyles = "hover:text-accent-300 transition-all duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      path: "#homeSection",
    },
    {
      id: 2,
      title: "Membership",
      path: "#membership",
    },
    {
      id: 3,
      title: "About Us",
      path: "#about",
    },

    {
      id: 4,
      title: "Newsletter",
      path: "#news",
    },
  ];

  return (
    <header
      className="w-full h-[12%]  flex items-center fixed bg-black
       z-50 font-semibold  text-white"
    >
      <div className="container justify-between flex items-center">
        <div className=" ">
          <Image
            width={180}
            height={48}
            src="/images/Logo/iilogoGraphic.png"
            alt="Logo"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? <IoIosClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>

        <nav
          className={` ${
            open ? "right-0" : "right-[-100%]"
          } w-[70%] md:w-auto absolute top-0 
          h-screen md:static md:h-auto 
        md:bg-transparent flex items-center duration-500 ease-in
         bg-black px-5  md:px-0 pt-20 md:pt-0`}
        >
          <ul
            className="flex flex-col text-white 
            md:font-semibold 
          md:flex-row gap-6 justify-center items-center"
          >
            {links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.id}>
                <Link href={link.path} className="hover:text-red-500">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" hidden md:flex px-5 justify-center items-center gap-6">
            <Link
              href="#"
              className={`${itemstyles}  
             `}
            >
              <button
                className=" px-5 py-1 my-2 rounded-full cursor-pointer fon-bold text-white
           bg-red-700 hover:bg-red-600"
              >
                Book Now
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
