import Link from "next/link";
import {
  FaLinkedinIn,
  FaTelegram,
  FaX,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";
import Subscribe from "./Subscribe";
//import Subscribe from "./Subscribe";

const socialLink = [
  {
    title: "whatsapp",
    link: "https://chat.whatsapp.com/HMYf7iKJqAu24n1prFckmQ",
    src: <FaWhatsapp size={30} />,
  },
  {
    title: "x",
    link: "https://x.com/africaanmc",
    src: <FaX size={30} />,
  },
  {
    title: "telegram",
    link: "https://t.me/+IGj_SqtQ6ThiYzk0",
    src: <FaTelegram size={30} />,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/showcase/africa-nft-metaverse-conference-anmc/",
    src: <FaLinkedinIn size={30} />,
  },
  {
    title: "discord",
    link: "https://discord.gg/CYWNk6DhZv",
    src: <FaDiscord size={30} />,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/africaanm",
    src: <FaInstagram size={30} />,
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#34ADE3] lg:pt-20  pt-8 md:px-10 px-5">
        <div className="flex flex-col lg:flex-row lg:gap-12 gap-2">
          <div className="flex flex-col md:flex-row justify-between  md:items-start md:px-10">
            {/*Left side section*/}
            <div className="flex flex-col  md:items-start items-center lg:my-10 mb-4">
              <h1 className="text-white text-2xl md:text-3xl font-semibold  lg:mb-8 mb-4">
                Join The Movement
              </h1>
              <div className="flex flex-col lg:gap-4 ">
                <Link href="/speaker">
                  <p className="text-white text-xl">Become a speaker</p>
                </Link>
                <Link href="/partner">
                  <p className="text-white text-xl">Join us as a partner</p>
                </Link>
                <Link href="https://forms.gle/MF6RMMjxmJgNkHio8">
                  <p className="text-white text-xl">Become a volunteer</p>
                </Link>
                <Link href="/submit-work">
                  <p className="text-white text-xl">Submit your work</p>
                </Link>
              </div>
            </div>
            {/*middle side section*/}
            <div className="flex flex-col  lg:items-start items-center lg:my-10 lg:mx-10 mb-4">
              <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mb-8 mb-4">
                About Us
              </h1>
              <div className="flex flex-col lg:gap-4 ">
                <Link href="/about">
                  <p className="text-white text-xl">About</p>
                </Link>
                <Link href="/about">
                  <p className="text-white text-xl">Contact Us</p>
                </Link>
                <Link href="/terms-and-conditions">
                  <p className="text-white text-xl">Terms of Use</p>
                </Link>
              </div>
            </div>
          </div>
          {/*right side section*/}
          <div className="flex flex-col lg:items-end items-center lg:my-10 mb-5 lg:mb-0 lg:ml-auto">
            <h1 className="text-white text-2xl lg:text-4xl font-semibold  lg:mb-8 mb-4">
              Subscribe To Our Newsletter
            </h1>
            <div className="flex mb-4">
              {" "}
              <Subscribe />
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:gap-5 gap-2">
              <p className="text-white font-medium text-xl">
                Join the community.
              </p>
              <div className="flex gap-4">
                {socialLink.map((social, index) => (
                  <Link key={index} href={social.link}>
                    <div className="text-white hover:scale-125 transition-transform duration-300 ease-in-out">
                      {social.src}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-4">
              <p className="text-center text-white">
                <span className="font-bold">Get in touch:</span> Questions?
                Partnership opportunities? Send us an
                <br className="hidden md:block" /> email at info@africaanmc.com
                and partnership@africaanmc.com.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:py-4 py-2">
          <p className="text-white opacity-80 text-md font-light">
            ©ANMC 2024-2026 — All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
