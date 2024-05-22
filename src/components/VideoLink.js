import React from "react";
import { CldVideoPlayer, getCldImageUrl } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
const VideoLink = () => {
  return (
    <div className="w-full flex items-center justify-center lg:mt-20 my-5">
      <div className="w-full max-w-screen-lg lg:mx-20 md:mx-10 mx-0">
        <CldVideoPlayer
          controls // Add controls for user interaction
          width="100%" // Make it take full width of its container
          height="100%"
          aspectRatio="4:3" // Maintain the aspect ratio (optional)
          muted={true}
          autoPlay={true}
          src="https://res.cloudinary.com/dikzx4eyh/video/upload/v1716218938/pepperlyl/anmc-2_enuiqz.mp4"
          logo={{
            imageUrl: getCldImageUrl({
              src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1716221817/anmc-logo_jv6jga.png",
            }),
            // imageUrl: '<Your Image URL',
            onClickUrl: "www.africaanmc.com",
          }}
        />
      </div>
    </div>
  );
};

export default VideoLink;
