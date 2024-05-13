import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import attend01 from "../public/attend01.png";
import attend02 from "../public/attend02.png";
import attend03 from "../public/attend03.png";
import attend04 from "../public/attend04.png";
import attend05 from "../public/attend05.png";
import attend06 from "../public/attend06.png";
import attend07 from "../public/attend07.png";
import attend08 from "../public/attend08.png";
import attend09 from "../public/attend09.png";
import attend10 from "../public/attend10.png";
import attend11 from "../public/attend11.png";
import attend12 from "../public/attend12.png";

const Attend = () => {
  const attendbox = [
    {
      title: "Digital Artists & Creators",
      image: attend01,
    },
    {
      title: "Museums",
      image: attend02,
    },
    {
      title: "Game Developers",
      image: attend03,
    },
    {
      title: "Investors",
      image: attend04,
    },
    {
      title: "Virtual World Owners",
      image: attend05,
    },
    {
      title: "Web3 Enthusiasts",
      image: attend06,
    },
    {
      title: "Blockchain/Web3 Companies",
      image: attend07,
    },
    {
      title: "Gamers",
      image: attend08,
    },
    {
      title: "VR/AR Providers",
      image: attend09,
    },
    {
      title: "Gaming Companies",
      image: attend10,
    },
    {
      title: "Tech Enthusiasts",
      image: attend11,
    },
    {
      title: "Cryptocurrency Enthusiasts",
      image: attend12,
    },
  ];

  return (
    <div className="mb-10 md:mb-16">
      <div className="mb-10">
        <p className="text-[28px] md:text-[32px] lg:text-[44px] font-semibold text-center">
          WHERE INNOVATION MEET CREATIVITY...
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mx-32 mx-3 gap-x-5 gap-y-5 lg:gap-x-20 lg:gap-y-10">
        {attendbox.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1, duration: 0.5 },
            }}
            viewport={{ once: true }}
            key={index}
            className="relative overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-md cursor-pointer hover:-translate-y-2 group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={250}
              height={160}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            <p className="absolute inset-0 flex items-center justify-center text-center text-white font-light text-[20px] md:text-[24px] lg:text-[26px] pointer-events-none">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Attend;
