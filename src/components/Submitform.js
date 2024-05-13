"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

async function addDataToFireStore(name, email, company, mediaLinks) {
  try {
    const docRef = await addDoc(collection(db, "WorkSubmissions"), {
      name: name,
      email: email,
      company: company,
      mediaLinks: mediaLinks,
    });
    return true;
  } catch (error) {
    return false;
  }
}
const SubmitWorkForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [mediaAssets, setMediaAssets] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleUpload = (result) => {
    if (result.event === "success" && result.info.resource_type === "image") {
      setMediaAssets((prevAssets) => [...prevAssets, result.info]);
    } else {
      toast.error("Please upload only image files."); // Show error for non-image uploads
    }
  };
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors([]);

    // Input Validation (similar to your Regform logic)
    if (!validateEmail(email)) {
      setValidationErrors((prevErrors) => [
        ...prevErrors,
        "Please enter a valid email address.",
      ]);
      return;
    }

    if (name.trim() === "" || company.trim() === "") {
      setValidationErrors((prevErrors) => [
        ...prevErrors,
        "Name and company are required.",
      ]);
      return;
    }

    const mediaLinks = mediaAssets.map((asset) => asset.secure_url);
    const added = await addDataToFireStore(name, email, company, mediaLinks);

    if (added) {
      // Clear the form fields
      setEmail("");
      setName("");
      setCompany("");
      setMediaAssets([]);

      // Show success toast
      toast.success("Work submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reload the page
      setTimeout(() => {
        window.location.reload();
      }, 5000); // 5 seconds delay
    } else {
      toast.error("Failed to submit work. Please try again.");
    }
  };
  return (
    <div className="lg:my-16 my-10 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-[24px] md:text-[32px] lg:text-[44px]  font-semibold"
        >
          Submit Your Work
        </motion.h1>
        <div className="w-full my-4">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="">
              <div className="flex flex-col lg:mx-32 mx-8">
                <div className="flex flex-col my-5 w-full ">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold mb-4"
                  >
                    Full Name
                  </motion.p>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
                <div className="flex flex-col my-5 w-full ">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold mb-4"
                  >
                    Email Address
                  </motion.p>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
                <div className="flex flex-col my-5 w-full">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold mb-4"
                  >
                    Name of Company / Brand
                  </motion.p>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center items-center">
              <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onUpload={handleUpload}
                options={{
                  // Restrict uploads to images only
                  sources: ["local"], // Allow only local uploads
                  allowedFormats: ["jpg", "png", "jpeg"],
                }}
              >
                {({ open }) => (
                  <motion.button
                    // ... your existing button styles
                    onClick={open}
                  >
                    Upload Images
                  </motion.button>
                )}
              </CldUploadWidget>
            </div>
            {/* Display uploaded images */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {mediaAssets.map((asset) => (
                <Image
                  key={asset.public_id}
                  src={asset.secure_url}
                  alt="Uploaded Image"
                  width={200} // Adjust as needed
                  height={200}
                  className="rounded-md" // Optional styling
                />
              ))}
            </div>
            <div className="flex items-center justify-center mt-5">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true }}
                type="submit"
                className="flex items-center justify-center bg-[#5E54EF] text-white gap-2 py-3 rounded-lg w-[160px] hover:animate-pulse hover:text-[#5E54EF] border-4 border-[#5E54EF] hover:bg-white "
              >
                Submit
              </motion.button>
            </div>
            <div className=" mt-2 flex justify-center">
              {/*validation Error messages*/}
              {validationErrors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm font-bold">
                  {error}
                </p>
              ))}
            </div>{" "}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SubmitWorkForm;
