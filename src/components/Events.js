import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ngImg from "../public/ng-img.png";
import saImg from "../public/sa-img.png";
import kyImg from "../public/ky-img.png";
import vsImg from "../public/vs-img.png";

const Events = () => {
  // Sample Event Data
  const eventData = [
    {
      title: "Nigeria",
      color: "#078A4E",
      src: ngImg,
      message: `Theme: Unlocking Africa's Digital Future
Date: 28-30th, November 2024
Venue: University of Lagos
Orange: NFT, WEB3 GAMING, VR/AR-XR, ,AI, ART, METAVERSE And Blockchain
Carpet: Education, Networking, Collaboration and Partnership
Extra: Exhibition, Workshop, Startup Pitches, Presentation`,
    },
    {
      title: "Kenya",
      color: "#F79D7B",
      src: saImg,
      message: `Theme: Accessing Creators  - Developers Economy for Users Experience
Date: 27-29th March, 2025
Venue: Coming soon
Orange: NFT, WEB3 GAMING, VR/AR-XR, ,AI, ART, METAVERSE, BLOCKCHAIN, ANIMATION
Carpet: Education, Networking, Collaboration and Partnership
Extra: Exhibition, Workshop, Startup Pitches, Grant, Presentation`,
    },
    {
      title: "South Africa",
      color: "#F7BA2F",
      src: kyImg,
      message: `Theme: Unveiling Africa's Digital Landscape
Date: 28-30th August, 2025
Venue: Coming Soon
Orange: NFT, WEB3 GAMING, VR/AR-XR, ,AI, ART, METAVERSE, BLOCKCHAIN, ANIMATION
Carpet: Education, Networking, Collaboration and Partnership
Extra: Exhibition, Workshop, Startup Pitches, Grant, Presentation`,
    },
    {
      title: "Varverse Summit",
      color: "#34ADE3",
      src: vsImg,
      message: `UPCOMING SOON`,
    },
  ];

  return (
    <div className="w-full relative py-2 overflow-hidden">
      <div className="my-5 md:mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[32px] lg:text-[44px] text-[#001E2C] font-semibold"
        >
          UPCOMING EVENTS
        </motion.p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 mx-2 md:mx-20 mb-10">
        {eventData.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger
            className="w-full overflow-hidden"
          >
            <div className="w-full relative">
              <Image
                src={event.src}
                alt={event.title}
                width={320} // Set appropriate width
                height={500} // Set appropriate height
                className="w-full object-cover object-center "
              />
              <div className="absolute bottom-1/2 w-full">
                <p className="text-[28px] md:text-[36px] lg:text-[52px] uppercase font-bold leading-[24px] md:leading-[32px] lg:leading-[40px] text-white text-center">
                  {event.title}
                </p>
              </div>
              <div className="group">
                <div
                  className={`absolute flex items-center justify-center inset-0 transition-opacity duration-300 ease-in-out z-10 group-hover:opacity-95 opacity-0 bg-[${event.color}]`}
                >
                  <p className="text-white font-semibold text-[12px] md:text-lg leading-[14px] md:leading-[20px]  px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    {event.message.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
