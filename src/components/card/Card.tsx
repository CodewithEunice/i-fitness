import Link from "next/link";
import React from "react";

interface cardProps {
  icon: JSX.Element;
  title: string;
  desc: string;
}
const Card = ({ icon, title, desc }: cardProps) => {
  return (
    <div className=" hover:shadow-2xl px-3 bg-white rounded-2xl flex flex-1 flex-col items-center gap-5 py-10 border-2">
      <div
        className=" w-[60px] h-[60px] rounded-[50%] flex justify-center
       items-center text-white bg-red-600"
      >
        {icon}
      </div>
      <h3 className="font-bold text-black">{title}</h3>
      <p className="text-black  text-center">{desc}</p>
    </div>
  );
};

export default Card;
