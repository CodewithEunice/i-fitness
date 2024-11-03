import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className=" w-full h-screen mt-[4px] pt-[10px]   bg-hero bg-no-repeat
       bg-cover  "
    >
      <div className=" p-24"></div>
      <div className="  flex-col align-top container">
        <h1 className=" text-4xl font-bold font-serif leading-tight text-white">
          Welcome
          <br />
          To i-fitness
          <br className="hidden md:block" /> where Fitness{" "}
          <br className="hidden md:block" /> Becomes Your Lifestyle
        </h1>

        <div className="mt-7 flex items-center flex-col gap-5">
          <button
            className=" px-10 py-2 my-2 rounded-full cursor-pointer fon-bold text-white
           bg-red-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
