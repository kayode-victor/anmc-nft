"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

async function addDataToFireStore(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "Contact"), {
      name: name,
      email: email,
      message: message,
    });
    return true;
  } catch (error) {
    return false;
  }
}

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset validation errors on each submit attempt
    setValidationErrors([]);

    // Basic email validation
    if (!email || !email.includes("@")) {
      setValidationErrors(["Please enter a valid email address."]);
      return;
    }

    // Name validation
    if (name.length < 3 || name.length > 50) {
      setValidationErrors(["Full name should be between 3 and 50 characters."]);
      return;
    }
    const added = await addDataToFireStore(name, email, message);
    if (added) {
      setEmail("");
      setName("");
      setMessage("");
      // Show success toast
      toast.success("Message successfully sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Refresh the webpage after 10 seconds
      setTimeout(() => {
        window.location.reload();
      }, 5000); // 10 seconds delay
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:my-16 my-10">
        <div className="my-5 md:mb-10 text-black text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-[24px] md:text-[32px] lg:text-[44px] font-semibold"
          >
            CONTACT US
          </motion.p>
        </div>
        <div className="w-full my-4">
          <form onSubmit={handleSubmit} className="w-full ">
            <div className="">
              <div className="flex flex-col lg:flex-row lg:mx-32 md:mx-10 mx-4 lg:gap-24">
                <div className="flex flex-col my-5 w-full lg:w-1/2">
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
                <div className="flex flex-col my-5 w-full lg:w-1/2">
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
              </div>
              <div className="flex flex-col mx-4 md:mx-10 lg:mx-auto lg:px-32">
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
                  Message
                </motion.p>
                <textarea
                  type="text"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-72 w-full border rounded-xl  focus:outline-none pl-4 md:pl-10 pt-5 text-xl"
                />
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
                className="flex items-center justify-center bg-[#34ADE3] text-white gap-2 py-3 rounded-lg w-[160px] hover:animate-pulse hover:text-[#34ADE3] border-4 border-[#34ADE3] hover:bg-white "
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
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
