import React from "react";
import { motion } from "framer-motion";
import missionimg from "../public/mission.png";
import Image from "next/image";
const Mission = () => {
  return (
    <div className="relative flex flex-col md:flex-row lg:mt-10">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="w-full lg:w-6/12 h-[360px] lg:h-[520px] px-2 bg-white"
      >
        <div className="w-full lg:w-3/4 flex flex-col md:items-start lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className=" flex flex-col items-center justify-center py-4"
          >
            <p className="text-3xl md:text-4xl font-semibold">OUR MISSION</p>
          </motion.div>
          <div className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-md lg:text-lg"
            >
              <ul className="list-disc">
                <li>Empowering Africa’s digital potential.</li>
                <li>Uniting Minds and Fostering Innovation.</li>
                <li>
                  Pushing Creativity and Collaboration in NFTs and Metaverse
                  Web3 - Gaming Ecosystems.
                </li>
                <li>Unveiling Use Cases and Other Industry Applications.</li>
                <li>
                  Empowering Developers in Web3 Ecosystems such as NFTs, Gaming,
                  Blockchain, and Web.
                </li>
                <li>
                  Providing training, education, and experience for the Africa
                  Web3 Ecosystem.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="w-full lg:w-6/12 h-[360px] lg:h-[520px] bg-[#001E2C]"
      >
        <div className="flex justify-center lg:justify-start  lg:w-3/4 p-10 lg:p-0 h-full">
          <div className="h-full lg:py-20">
            <Image
              src={missionimg}
              alt="mission"
              className="object-fill w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
