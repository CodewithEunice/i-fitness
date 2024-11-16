import Image from "next/image";
import Card from "../card/Card";
import React from "react";
import { CgGym } from "react-icons/cg";
import { PiBicycleBold } from "react-icons/pi";
import { RiBoxingFill } from "react-icons/ri";
import { GrYoga } from "react-icons/gr";
import { MdAssuredWorkload } from "react-icons/md";
import { TbTreadmill } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import Button from "../button/Button";
import { title } from "process";

const Benefits = () => {
  const cards = [
    {
      id: 1,
      icon: <RiBoxingFill size={40} />,
      title: "LES MILLS GRIT",
      desc: `With a few short sessions a week,you can improve fitness and 
      increase Athleiticism.`,
    },
    {
      id: 2,
      icon: <GrYoga size={40} />,
      title: " YOGA",
      desc: `Our Yoga Classes keeps you Centered
      Mentally and Physically.`,
    },
    {
      id: 3,
      icon: <PiBicycleBold size={40} />,
      title: "SPINNING",
      desc: `Our Spinning Class is a low -impact exercise that is ideal for
      all fitness enthusists.`,
    },
    {
      id: 4,
      icon: <CgGym size={40} />,
      title: "CORE CARDIO",
      desc: `Our Core Cardio Classes Are Essentially
      Designed To Help You Reach Your Fitness Goals.`,
    },
  ];
  return (
    <section className="w-full  bg-gray-100 py-10">
      <h2 className="uppercase text-center text-2xl font-bold text-black">
        Explore our All Inclusive Classes
      </h2>
      <p className=" mt-3 text-center text-black">
        We have world best fitness equipments, instructors and we provide
        amazing and affordable fitness classes for everyone.
      </p>
      <div className="flex flex-col px-10 md:flex-row gap-5 mt-5">
        {cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>

      <div className="flex flex-col px-3 md:flex-row gap-5 mt-14">
        <div className="flex-1 relative min-h-[300px]">
          <Image
            fill
            src="/images/iheroGraphic.png"
            alt="benefits"
            className="object-cover"
          />
        </div>
        <div className="flex-[1]">
          <h3 className="px-4  text-black font-bold mb-2 text-2xl">
            WHY I-FITNESS
          </h3>
          <h2 className=" px-4  text-2xl text-black font-bold pt-1 py-2">
            Unique Experiences Tailored To Your Lifestyle
          </h2>

          <MdAssuredWorkload size={70} />
          <h3 className="pt-2 px-4 font-sem text-red-600 text-xl">
            Wide Range of Fitness Programs
          </h3>
          <p className=" w-[85%] px-4 font-16px pt-2 py-1 text-black">
            Our time Table offers a wide range of low to high intensity fitness
            programmes to suit your fitness lifestyle. {`There's`}
            something for everyone!
          </p>
          <IoIosPeople size={70} />
          <h3 className="px-4  pt-2 font-semibold text-xl  text-red-600 ">
            Supportive Community
          </h3>
          <p className=" px-4 font-16px pt-2 text-black py-1">
            Enjoy a sense of belonging in a community that supports your fitness
            goals and reminds you that you are not alone!
          </p>
          <TbTreadmill size={70} />
          <h3 className="  px-4 pt-2 font-semibold text-xl  text-red-600">
            Ultra-Modern Facilities
          </h3>
          <p className=" px-2  py-5 text-black">
            We have over 200 professionally certified personal trainers and
            ultra-modern facilities across all our branches in Lagos, Port
            Harcourt, Abuja and Ibadan.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};
export default Benefits;
