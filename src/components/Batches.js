import React from "react";
import sponsor1 from "../public/sponsor1.png";
import sponsor2 from "../public/sponsor2.png";
import sponsor3 from "../public/sponsor3.png";
import sponsor4 from "../public/sponsor4.png";
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
  {
    title: "Sponsor 4",
    img: sponsor4,
  },
];

const Batches = () => {
  return (
    <div className="relative bg-[#232323] justify-center items-center w-full px-4 md:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center  gap-5 w-full">
        {sponsors.map((item, index) => (
          <div key={index} className="">
            <Image
              src={item.img}
              alt={item.title}
              className="object-contain w-[200px] md:w-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Batches;
