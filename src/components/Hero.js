//component/Hero.js
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import heroimg1 from "../public/Hero-Image-1.png";
import heroimg2 from "../public/Hero-Image-2.png";
import heroimg3 from "../public/Hero-Image-3.png";
import heroimg4 from "../public/Hero-Image-4.png";
import heroimg5 from "../public/Hero-Image-5.png";
import heroimg6 from "../public/Hero-Image-6.png";
import heroimg7 from "../public/Hero-Image-7.png";
import heroimg8 from "../public/Hero-Image-8.png";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    heroimg1,
    heroimg2,
    heroimg3,
    heroimg4,
    heroimg5,
    heroimg6,
    heroimg7,
    heroimg8,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Slider */}
      <div className="h-screen md:h-[640px] w-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            width={2000}
            height={2000}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ))}
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
          className="absolute md:top-[60px] md:left-16 lg:left-20 px-2 text-white"
        >
          <div className="flex flex-col">
            <p className="text-[72px] md:text-[100px] font-bold mb-2">Africa</p>
            <p className="relative text-[32px] md:text-[40px] font-bold bottom-10">
              NFT Metaverse Conference
            </p>
          </div>
          <p className="flex relative bottom-6 flex-col text-[20px] gap-0 mb-4">
            <span>Unlocking Africa&apos;s Digital Future:</span>
            <span> showcasing Creativity. The Biggest Africa Web3 Events</span>
          </p>
          <Link
            href="/register"
            className="flex items-center justify-center bg-[#5E54EF] text-white gap-2 py-4 rounded-lg w-[160px] hover:animate-pulse hover:text-[#5E54EF] hover:bg-white text-[14px] text-semibold"
          >
            Register Here
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
