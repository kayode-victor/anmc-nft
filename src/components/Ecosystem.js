import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import map from "../public/Africa.svg";

const Ecosystem = () => {
  return (
    <div className="relative bg-[#001E2C] lg:px-5 px-2 lg:pt-20 pt-4 py-2 lg:h-[720px] overflow-hidden">
      <div className="my-5 md:mb-10 text-white text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[32px] lg:text-[44px]  font-semibold"
        >
          COMMUNITY ECOSYSTEM
        </motion.p>
      </div>
      <div className="flex items-center justify-center">
        <Image src={map} alt="World Map" height={450} />
      </div>
      <div className="relative z-10 text-center text-white lg:bottom-48">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:gap-x-8 my-5 "
        >
          {/* Row 1 */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start items-center md:gap-4 gap-2">
            {/* Span 2 columns on larger screens */}
            <div className="flex flex-col rounded-2xl py-2 px-1 h-[100px] w-[170px] bg-[#078A4E]">
              <h2 className="text-white mb-2 text-lg  font-semibold underline underline-offset-8">
                Western Africa
              </h2>
              <ul className="text-gray-200 text-sm text-center grid grid-cols-2 gap-2">
                <li>Nigeria</li>
                <li>Ghana</li>
                <li>Benin</li>
                <li>Niger</li>
              </ul>
            </div>
            <div className="flex flex-col rounded-2xl py-2 px-1 h-[100px] w-[170px] bg-[#F7BA2F]">
              <h2 className="text-white mb-2 text-lg font-semibold underline underline-offset-8">
                Southern Africa
              </h2>
              <ul className="text-gray-200 text-sm grid grid-cols-2 gap-2">
                <li>South Africa</li>
                <li>Malawi</li>
                <li>Zambia</li>
                <li>Zimbabwe</li>
              </ul>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row md:gap-4 justify-center lg:justify-start items-center gap-2 gap-y-4 md:gap-y-0">
            <div className="lg:col-span-2 flex justify-center lg:justify-start items-center md:gap-4 gap-2">
              {/* Span 2 columns on larger screens */}
              <div className=" rounded-2xl py-2 px-1 h-[100px] w-[170px] bg-[#A8CF45]">
                <h2 className="text-white mb-2 text-lg  font-semibold underline underline-offset-8">
                  Eastern Africa
                </h2>
                <ul className="text-gray-200 text-sm text-center grid grid-cols-2 gap-2">
                  <li>Madagascar</li>
                  <li>Kenya</li>
                  <li>Rwanda</li>
                  <li>Ethiopia</li>
                </ul>
              </div>
              <div className="rounded-2xl py-2 px-1 h-[100px] w-[170px] bg-[#34ADE3]">
                <h2 className="text-white mb-2 text-lg font-semibold underline underline-offset-8">
                  Northern Africa
                </h2>
                <ul className="text-gray-200 text-sm grid grid-cols-2 gap-2">
                  <li>Egypt</li>
                  <li>Morocco</li>
                  <li>Algeria</li>
                  <li>Tunisia</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="rounded-2xl py-2 px-1 h-[100px] w-[170px] bg-[#F79D7B]">
                <h2 className="text-white mb-2 text-lg font-semibold underline underline-offset-8">
                  Central Africa
                </h2>
                <ul className="text-gray-200 text-sm grid grid-cols-2 gap-2">
                  <li>Angola</li>
                  <li>Chad</li>
                  <li>Congo</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ecosystem;
