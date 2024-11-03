import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import React from "react";

const Icons = () => {
  return (
    <div className="flex gap-5">
      <div
        className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center
             cursor-pointer bg-red-700"
      >
        <FaFacebook size={25} color="white" />
      </div>
      <div
        className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center
             cursor-pointer bg-red-700"
      >
        <GrTwitter size={25} color="white" />
      </div>
      <div
        className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center
             cursor-pointer bg-red-700"
      >
        <FaSquareInstagram size={25} color="white" />
      </div>
      <div
        className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center
             cursor-pointer bg-red-700"
      >
        <FaLinkedinIn size={25} color="white" />
      </div>
    </div>
  );
};

export default Icons;
