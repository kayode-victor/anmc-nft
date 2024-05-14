import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import heroimg from "../public/hero.png";
import Link from "next/link";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="relative overflow-hidden">
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
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="absolute md:top-[70px] flex flex-col px-2 text-center items-center justify-center text-white"
        >
          <div className="flex flex-col">
            <p className="text-[72px] md:text-[150px] font-bold">TICKETS</p>
            <p className="relative text-[20px] md:text-[32px] font-bold">
              NFT Metaverse Conference
            </p>
          </div>

          <Link
            href="/https://app.moongate.id/e/africa-nft-metaverse-investors"
            className="flex items-center justify-center bg-[#5E54EF] text-white mt-4 gap-2 py-3 rounded-lg w-[120px] hover:animate-pulse hover:text-[#5E54EF] hover:bg-white text-[14px] text-semibold"
          >
            Early Bird
            <FaArrowRight />
          </Link>
          <p className="text-[14px] md:text-[18px] font-light gap-0 mt-4">
            Ticket prices increase by 60 days before event for VIP. Mint !
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
