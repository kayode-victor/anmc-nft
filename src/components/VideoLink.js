"use client"; // Use Client Component

import React, { useState, useEffect, useRef } from "react";
import { getCldVideoUrl } from "next-cloudinary";
import Logo from "../public/anmc-logo.png"; // Replace with your logo path

const VideoLink = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const url = await getCldVideoUrl("anmc-2_enuiqz", {
        cloudName: "dikzx4eyh",
        deliveryType: "upload",
        transformation: [
          { width: 1280, crop: "scale" }, // Adjust video dimensions as needed
        ],
      });
      setVideoUrl(url);
    };

    fetchVideoUrl();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
        // Handle the error (e.g., display a message to the user)
      });
      videoRef.current.loop = true;
    }
  }, [videoUrl]);

  return (
    <div className="w-full flex items-center justify-center lg:mt-32 my-5">
      <div className="w-full max-w-screen-lg lg:mx-20 md:mx-10 mx-0 relative">
        {videoUrl && (
          <video ref={videoRef} width="100%" height="auto" controls playsInline>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Overlay controls for play/pause */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Add custom play/pause button here if needed */}
        </div>

        {/* Replace Cloudinary Logo with Custom Logo */}
        <div className="absolute top-4 left-4 w-12">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default VideoLink;
