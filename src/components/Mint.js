import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import creator from "../public/creator.png";
import inventor from "../public/inventor.png";
import innovator from "../public/innovator.png";

const contents = [
  {
    title: "CREATOR",
    img: creator,
    price: "$500",
    text: `Access Conferences
Creator After Party
Access to ANMC KENYA
Workshops and Masterclasses
Mentorship Programs
Incubator and Accelerator Programs`,
  },
  {
    title: "INVESTOR",
    img: inventor,
    price: "$1500",
    text: `VVIP Pass
    Access to After party
    All  in Creator
Lanuch break
Investor Reports and Insights
Deal Flow Pipeline Access`,
  },
  {
    title: "INNOVATOR",
    img: innovator,
    price: "free",
    text: `ACCESS TO ANMC NIGERIA
ACCESS TO ANMC KENYA`,
  },
];

const Mint = () => {
  return (
    <div className="flex flex-col py-10 md:py-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mx-4 md:mx-8 lg:mx-20 mb-10">
        {contents.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger
            className="w-full overflow-hidden relative"
          >
            <div className="w-full h-[600px]">
              <div className="w-full h-full ">
                <Image
                  src={content.img}
                  alt={content.title}
                  className="h-full w-full object-cover object-top rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/70 rounded-2xl z-10"></div>
                <div className="absolute top-0 py-4 w-full z-20">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className=" text-white text-2xl lg:text-4xl font-bold">
                      {content.title}
                    </div>
                    <div className="w-full px-8 lg:px-10 mt-2 lg:mt-5">
                      <Image
                        src={content.img}
                        alt={content.title}
                        className=" w-full object-contain border border-white rounded-2xl"
                      />
                    </div>
                    <div className="w-full flex items-center justify-between px-6 lg:px-10 mt-10">
                      <div className=" text-white text-sm leading-[16px] font-medium">
                        {content.text.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </div>
                      <div className="absolute text-white text-4xl lg:right-[50px] right-[40px] font-bold">
                        {content.price}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full z-20">
                  <Link
                    href="/register"
                    className="flex bg-[#564CD9] text-white hover:animate-pulse hover:text-[#5E54EF] hover:bg-white  font-bold py-5 md:py-8 text-xl items-center rounded-b-2xl justify-center"
                  >
                    <p>MINT PASS</p>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between py-10 md:py-20 px-2 md:px-10 lg:px-32 gap-2 md:gap-10">
        <div className="w-full md:w-1/2">
          <Link
            href="/partner"
            className="flex w-full bg-[#564CD9]  text-white hover:animate-pulse hover:text-[#5E54EF] hover:bg-white  font-bold py-2 md:py-4 text-xl items-center  border-2 border-[#5E54EF] rounded-xl justify-center"
          >
            BECOME A PARTNER
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <Link
            href="https://forms.gle/MF6RMMjxmJgNkHio8"
            className="flex w-full bg-[#564CD9]  text-white hover:animate-pulse hover:text-[#5E54EF] hover:bg-white  font-bold py-2 md:py-4 text-xl items-center  border-2 border-[#5E54EF] rounded-xl justify-center"
          >
            BECOME A VOLUNTEER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mint;
