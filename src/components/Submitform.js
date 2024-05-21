"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFileImage } from "react-icons/fa";

async function addDataToFireStore(
  name,
  email,
  company,
  websiteLink,
  imageLink
) {
  try {
    const docRef = await addDoc(collection(db, "WorkSubmissions"), {
      name,
      email,
      company,
      websiteLink,
      imageLink, // Store the image link directly
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
  const [websiteLink, setWebsiteLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

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

    const added = await addDataToFireStore(
      name,
      email,
      company,
      websiteLink,
      imageLink
    );

    if (added) {
      // Clear the form fields
      setEmail("");
      setName("");
      setCompany("");
      setWebsiteLink("");
      setImageLink("");

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
          className="text-[24px] md:text-[32px] lg:text-[44px] font-semibold"
        >
          Submit Your Work
        </motion.h1>
        <div className="flex w-full my-4">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center lg:gap-10 lg:mx-24 mx-4">
              <div className="flex flex-col w-full md:w-1/2">
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
                    Website Link (URL)
                  </motion.p>
                  <input
                    type="text"
                    id="websiteLink"
                    value={websiteLink}
                    onChange={(e) => setWebsiteLink(e.target.value)}
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
                    Image Link (URL)
                  </motion.p>
                  <input
                    type="text"
                    id="imageLink"
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
              </div>
              {/* Improved Image Viewer */}
              <div className="mt-4 border-2 rounded-xl md:h-[520px] w-full md:w-1/2 flex items-center justify-center">
                {imageLink ? (
                  <div className="h-full w-full p-4 overflow-hidden">
                    <Image
                      src={imageLink}
                      alt="Uploaded Image"
                      width={520}
                      height={520}
                      className="object-cover object-center rounded-lg !h-full !w-full"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <FaFileImage className="text-6xl text-gray-400" />
                    <p className="text-gray-500">Awaiting Image.....</p>
                  </div>
                )}
              </div>
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
