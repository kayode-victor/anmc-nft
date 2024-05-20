import React from "react";
import Image from "next/image";
import heroimg from "../public/partner.png";
import { motion } from "framer-motion";
import inbolt from "../public/in-bolt.png";
import ingame from "../public/in-game.png";
import inbitcion from "../public/in-bitcion.png";
import ininvention from "../public/in-invention.png";
import inpallet from "../public/in-pallet.png";
import inblockchain from "../public/in-blockchain.png";
import ininfinite from "../public/in-infinite.png";
import inbrush from "../public/in-brush.png";
import inchain from "../public/in-chain.png";
import incompany from "../public/in-company.png";
import inmoney from "../public/in-money.png";
import inlaw from "../public/in-law.png";
import inidea from "../public/in-idea.png";
import instats from "../public/in-stats.png";

const info = [
  {
    img: inbolt,
    title: "Web3 Companies",
  },
  {
    img: ingame,
    title: "Game dev companies and studios",
  },
  {
    img: inbitcion,
    title: "NFT projects actively offering value",
  },
  {
    img: ininvention,
    title: "Talent as a service in web3",
  },
  {
    img: inpallet,
    title: "Museums and art galleries",
  },
  {
    img: inblockchain,
    title: "Blockchain companies",
  },
  {
    img: ininfinite,
    title: "VR/AR-XR Companies",
  },
  {
    img: inbrush,
    title: "Animation companies",
  },
  {
    img: inchain,
    title: "Metaverse offering companies",
  },
  {
    img: incompany,
    title: "AI Companies",
  },
  {
    img: inmoney,
    title: "FinTech",
  },
  {
    img: inlaw,
    title: "Policies and Law Regulations",
  },
  {
    img: inidea,
    title: "Web2 Tech companies",
  },
  {
    img: instats,
    title:
      "Companies actively trying to be a part of Web3, blockchain, NFT,  AI, VR/AR-XR, AI, Art ",
  },
];

const Partnerhero = () => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Hero Slider */}
      <div className="h-screen md:h-[640px] w-full flex items-center justify-center">
        <Image
          src={heroimg}
          alt="hero"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 object-cover object-center"
        />
        {/* Hero Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l to-[#051A38] from-[#0458D7] opacity-80"></div>
      </div>
      {/* Hero Content */}
      <div className="flex flex-col absolute top-[40px] md:top-[30px] w-full justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className=" flex flex-col px-2 py-5 md:py-2 text-center text-white"
        >
          <div className="flex flex-col">
            <p className="text-[36px] md:text-[56px] font-semibold">
              Become Our Partner
            </p>
          </div>
          <p className="text-[16px] gap-0">
            Brand partnership with ANMC is a careful selection of brands
            <br className="hidden md:block" /> in the web3 ecosystem
          </p>
        </motion.div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full bg-white opacity-65 justify-items-center my-2 md:my-8 lg:my-10 p-2 md:p-5 gap-2 md:gap-3 lg:gap-8 mx-4 md:mx-14 lg:mx-40 pb-5 md:pb-8 lg:pb-10 rounded-xl md:rounded-3xl">
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger
                className={`overflow-hidden relative flex items-center gap-5  ${
                  index === info.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  className="h-8 w-8 object-contain"
                />
                <p className="font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerhero;
