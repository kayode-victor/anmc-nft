import React from "react";
import videoImg from "../public/videoImg.png";
import playBtn from "../public/PlayBtn.svg";
import Image from "next/image";

const VideoLink = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex m-4 md:m-10 lg:mx-28 lg:my-10 relative">
        <div className="w-full overflow-hidden">
          <Image
            className="w-full h-[420px] object-center object-cover hover:scale-110 transition-transform"
            alt="Rectangle"
            src={videoImg}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image className="w-[78px] h-[78px]" alt="Vector" src={playBtn} />
        </div>
      </div>
    </div>
  );
};

export default VideoLink;
