import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dayTwo from "../public/DayTwo.png";

const Day2 = () => {
  return (
    <div className="w-full h-[560px]">
      <div className="w-full h-full">
        <div className="relative">
          <Image
            src={dayTwo}
            alt="Day One Banner"
            width={2000}
            height={2000}
            className="w-full h-[560px] lg:h-full object-center object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="bg-white/75 lg:bg-transparent p-4 lg:p-0 lg:rounded-none rounded-xl absolute flex flex-col top-[30px] lg:top-[100px] right-0 justify-center items-center md:items-end mx-4 lg:mx-0 lg:mr-20"
          >
            <div className=" font-bold text-[32px] md:text-[48px] text-[#5e54ef] md:mb-10">
              [ DAY TWO ]
            </div>

            <p className="font-bold text-[26px] md:text-[36px] text-center md:text-right mb-5 md:mb-10 leading-[32px] text-black">
              Convergence Gala - Shaping the Digital{" "}
              <br className="hidden lg:block" />
              <span> Landscape</span>
            </p>
            <div className="">
              <p className=" font-normal text-[22px] md:text-[20px] lg:w-[520px] lg:text-right leading-[20px] text-black">
                We will explore the impact of NFTs, web3 gaming, AI, VR/AR,
                digital art, and blockchain. Analyzing adaptation strategies for
                businesses, cybersecurity measures, and efforts for digital
                inclusion. Anticipating future trends like IoT and augmented
                reality experiences, fostering innovation and equitable access.
              </p>
            </div>
            <p className="font-bold lg:mt-10">
              <span className="text-[#5e54ef] text-[40px] md:text-[64px]">
                5000+
              </span>
              <span className="text-black text-[28px] md:text-[44px]">
                PARTICIPANTS
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Day2;
