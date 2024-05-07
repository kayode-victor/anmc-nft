import React from "react";
import sponsor1 from "../public/sponsor1.png";
import sponsor2 from "../public/sponsor2.png";
import sponsor3 from "../public/sponsor3.png";
import Image from "next/image";

const Batches = () => {
  return (
    <div className="w-full bg-[#232323]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mx-5 lg:mx-24 py-4 md:py-0">
        <div className="w-full md:w-1/3">
          <Image
            className="object-cover"
            alt="sponsor png"
            src={sponsor1}
            layout="responsive"
            width={276} // Specify original width
            height={276} // Specify original height
          />
        </div>
        <div className="w-full md:w-1/3 ">
          <Image
            className="object-cover"
            alt="Zerctech consult"
            src={sponsor2}
            layout="responsive"
            width={662}
            height={116}
          />
        </div>
        <div className="w-full md:w-1/3">
          <Image
            className="object-cover"
            alt="Chambers"
            src={sponsor3}
            layout="responsive"
            width={276}
            height={276}
          />
        </div>
      </div>
    </div>
  );
};

export default Batches;
