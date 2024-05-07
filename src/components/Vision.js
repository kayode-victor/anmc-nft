import Image from "next/image";
import { motion } from "framer-motion";
import visionimg from "../public/vision.png";

const Vision = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-20 md:mt-32">
        <div className=" md:w-5/12 w-full h-[360px] md:h-[480px] lg:h-[720px]  bg-[#001E2C] flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <Image
              src={visionimg}
              alt="Vision Image"
              width={250}
              height={150}
              className="object-cover w-full h-full py-12 lg:py-28 lg:pl-20 pl-0"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-7/12 h-[500px] md:h-[540px] lg:h-[720px] flex flex-col lg:px-32 px-2 lg:py-16 py-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-3xl md:text-4xl font-semibold">OUR VISION</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="lg:pr-28"
          >
            <p className="mt-3 text-md lg:text-lg leading-snug tracking-tight font-normal">
              NFTs and the Metaverse stand as potent drivers for economic
              prosperity, cultural preservation, and technological excellence,
              poised to elevate our continent to a prominent global position in
              the digital age.
            </p>
            <p className="mt-2 text-md lg:text-lg leading-snug tracking-tight font-normal">
              To achieve these, we aim to create:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="mt-3 text-md lg:text-lg leading-snug tracking-tight font-normal ml-5">
              <ul className="list-disc">
                <li>A vibrant community of digital creators.</li>
                <li>An exquisite community of artists.</li>
                <li>A robust game developers community.</li>
                <li>A community of VR, AR & MR developers.</li>
                <li>A robust community of blockchain developers.</li>
                <li>An excellent community of metaverse investors.</li>
                <li>
                  A refined ecosystem of Web3 - blockchain services providers.
                </li>
                <li>Space for a safe transition into Tech.</li>
                <li>Train individuals into the Web3 ecosystem.</li>
                <li>AI-driven Web3 ecosystem that automates the future.</li>
                <li>Realization of an inclusive digital Africa.</li>
                <li>
                  An investors-creators community for NFT, VR, AR, MR & game dev
                  projects.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Vision;
