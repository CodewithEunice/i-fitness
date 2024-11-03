import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import React from "react";
import Icons from "../icons/Icons";
import path from "path";
import { link } from "fs";
import Button from "../button/Button";
import { MdOutlineCopyright } from "react-icons/md";

const links = [
  { id: 1, name: "locations", path: "#" },
  { id: 2, name: "contact us", path: "#" },
  { id: 3, name: "lannual dues faq", path: "#" },
  { id: 4, name: "news and events", path: "#" },
  { id: 5, name: "corporate plans", path: "#" },
  { id: 6, name: "membership plans", path: "#" },
];
const Footer = () => {
  return (
    <footer className="w-full h-full py-10 bg-black px-4 ">
      <div className="">
        <div
          className=" grid-flow-row flex flex-col items-center
       md:flex-row gap-7 md:items-start"
        >
          <div className="flex-1 flex flex-col items-center gap-5">
            <Image
              width={200}
              height={80}
              src="/images/Logo/iilogoGraphic.png"
              alt="footerLogo"
            />

            <p
              className=" text-justify leading-tight font-semibold
            font-sans text-slate-300  text-sm md:text-xs"
            >
              We are a 360-health and wellness company and the leading and
              fastest-growing fitness chain.With over 200 professionally
              certified personal trainers, ultra-modern gym facilities and over
              40 free fitnessclasses weekly, we give our members a holistic
              experience to suit and support their fitness lifestyle.
            </p>

            <div className=" flex justify-center items-center md:flex-col">
              <Icons />
            </div>
            <div className="text-slate-300 flex  justify-center items-center gap-1">
              <MdOutlineCopyright size={20} />
              <p className="text-slate-300 text-xs">
                2024 I-FITNESS CENTRE LTD.ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          <div
            className="flex-1 flex uppercase pl-10 w-12%
           text-white flex-col"
          >
            <h1 className="  mt-4 underline text-2xl py-3 font-bold">
              QUICK LINKS
            </h1>
            <ul className="text-sm flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.path} className=" hover:text-red">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="  text-sm  gap-3 uppercase
         text-white "
          >
            <h1 className="font-bold text-2xl py-3 mt-4 underline">
              working hours
            </h1>

            <p className=" py-1">monday - friday ( 6am -9pm )</p>
            <p className="py-1">saturday ( 7am - 8pm )</p>
            <p className="py-1">public holiday ( 7am - 8pm )</p>
            <p className="py-1">deep cleaning ( 2pm - 3pm daily )</p>
            <p className="py-1">closed jan 1, dec 25 & 26</p>
          </div>
          <form>
            <div className="text-white text-center">
              <h1 className=" text-left pl-5 pt-4 text-red-500  py-1 text-sm">
                FOR LATEST NEWS AND UPDATES
              </h1>
              <p className=" text-2xl font-bold">SUBSCRIBE TO OUR NEWLETTER</p>
              <div
                className=" flex flex-col w-[300px] md:w-auto mb-2 cursor-pointer duration-200
               gap-3 pr-5 flex-1 tracking-[3px] relative md:flex-row"
              >
                <div className=" border-slate-500">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                 border-r-[1px] w-[100%] md:w-auto mb-1 text-black transform translate-x-[20px]
                  translate-y-[10px] outline-none 
                   bg-white py-4 my-5 px-1"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="example@email.com
                "
                    className="border-r-[1px] text-black outline-none 
                    transform translate-x-[20px] w-[100%] md:w-auto mb-1
                  translate-y-[10px] bg-white py-4 my-5 px-1"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-sm px-10 mt-5 pt-4 pb-4 text-center  w-[100%]
             text-white bg-red-700 cursor-pointer font-sans"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
