import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const VideoLink = () => {
  return (
    <div className="w-full flex items-center justify-center lg:mt-32 my-5">
      <div className="w-full max-w-screen-lg lg:mx-20 md:mx-10 mx-0">
        <CldVideoPlayer
          controls // Add controls for user interaction
          width="100%" // Make it take full width of its container
          height="100%"
          aspectRatio="16:9" // Maintain the aspect ratio (optional)
          src="https://res.cloudinary.com/dikzx4eyh/video/upload/v1716218938/pepperlyl/anmc-2_enuiqz.mp4"
        />
      </div>
    </div>
  );
};

export default VideoLink;
