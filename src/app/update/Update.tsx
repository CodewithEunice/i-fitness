"use client";
import React from "react";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Update = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="w-full p-8  h-[250px]">
      <div class=" flex mt-2 justify-between ">
        <h1 className=" text-3xl font-bold">
          Latest News, Events & Updates <br />
          <span className="font-normal text-lg">
            Never miss a beat! Get all the latest news and events at i-Fitness.
          </span>
        </h1>

        <button
          onClick={() => setShow(!show)}
          className=" px-6 font-bold font-mono uppercase py-2 my-3 rounded-md text-lg cursor-pointer fon-bold text-white
           bg-secondary-100 hover:bg-red-600"
        >
          stay updated
          {show ? <FaRegArrowAltCircleRight size={10} /> : ""}
        </button>
      </div>
    </section>
  );
};

export default Update;
