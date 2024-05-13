import Image from "next/image";
import React from "react";
import dayOne from "../public/DayOne.png";
import { motion } from "framer-motion";

const Day1 = () => {
  return (
    <div className="w-full h-[560px]">
      <div className="w-full h-full">
        <div className="relative">
          <Image
            src={dayOne}
            alt="Day One Banner"
            width={2000}
            height={2000}
            className="w-full h-[560px] lg:h-full object-right object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="bg-black/75 lg:bg-transparent p-4 lg:p-0 lg:rounded-none rounded-xl absolute flex flex-col top-[30px] lg:top-[100px] left-0 justify-center items-center md:items-start mx-4 lg:mx-0 lg:ml-20"
          >
            <div className=" font-bold text-[32px] md:text-[48px] text-[#5e54ef] mb-5 md:mb-10">
              [ DAY ONE ]
            </div>

            <p className="font-bold text-[26px] md:text-[36px] text-center md:text-left mb-5 md:mb-10 leading-[20px] text-white">
              Innovative Nexus - Forging Digital Realm
            </p>
            <p className=" font-normal text-[22px] md:text-[20px] lg:w-[620px] leading-[20px] text-white">
              Explores the integration of NFTs, web3 gaming, AI, VR/AR, digital
              art, and blockchain technologies. Discussions delve into
              innovative applications, collaborative opportunities, and the
              transformative potential of these technologies in shaping the
              digital landscape. Experts showcase how these tools are
              revolutionizing industries, fostering creativity, and driving
              forward-thinking initiatives in the digital realm.
            </p>

            <p className="font-bold lg:mt-10">
              <span className="text-[#5e54ef] text-[40px] md:text-[64px]">
                100+
              </span>
              <span className="text-white text-[28px] md:text-[48px]">
                {" "}
                SPEAKERS
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Day1;
