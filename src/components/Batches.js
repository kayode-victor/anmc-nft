import React from "react";
import sponsor1 from "../public/sponsor1.png";
import sponsor2 from "../public/sponsor2.png";
import sponsor3 from "../public/sponsor3.png";
import Image from "next/image";

const sponsors = [
  {
    title: "Sponsor 1",
    img: sponsor1,
  },
  {
    title: "Sponsor 2",
    img: sponsor2,
  },
  {
    title: "Sponsor 3",
    img: sponsor3,
  },
];

const Batches = () => {
  return (
    <div className="flex bg-[#232323] justify-center items-center w-full">
      <div className="flex items-center justify-center pt-5 md:pt-10 gap-5 md:gap-16 w-full">
        {sponsors.map((item, index) => (
          <div key={index} className="">
            <Image
              src={item.img}
              alt={item.title}
              className="object-contain w-[200px] md:w-[360px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Batches;
