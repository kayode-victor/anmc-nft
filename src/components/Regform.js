"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

async function addDataToFireStore(name, email, phone, country, role) {
  try {
    await addDoc(collection(db, "Registrations"), {
      name,
      email,
      phone,
      country,
      role,
    });
    return true;
  } catch (error) {
    return false;
  }
}

const Regform = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors([]); // Reset errors on each submit

    if (!email || !email.includes("@")) {
      setValidationErrors(["Please enter a valid email address."]);
      return;
    }

    // Name validation
    if (name.length < 3 || name.length > 50) {
      setValidationErrors(["Full name should be between 3 and 50 characters."]);
      return;
    }
    // company validation
    if (country.length < 3 || name.length > 50) {
      setValidationErrors(["country should be between 3 and 50 characters."]);
      return;
    }

    const added = await addDataToFireStore(name, email, phone, country, role);
    if (added) {
      // Clear the form fields
      setName("");
      setEmail("");
      setPhone("");
      setCountry("");
      setRole("");

      // Show success toast
      toast.success(
        "Registration step 1 complete! Please wait while we redirect you to finish the process.",
        {
          position: "top-center",
          autoClose: 5000, // Close after 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Redirect after 10 seconds
      setTimeout(() => {
        window.location.href =
          "https://app.moongate.id/e/africa-nft-metaverse-investors";
      }, 10000); // 10000 milliseconds = 10 seconds
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
          ANMC Conference
        </motion.h1>
        <div className="w-full my-4">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="">
              <div className="flex flex-col lg:flex-row lg:mx-32 mx-8 lg:gap-24">
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
              <div className="flex flex-col lg:flex-row lg:mx-32 mx-8 lg:gap-24">
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
                    Country
                  </motion.p>
                  <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                    Phone number
                  </motion.p>
                  <input
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-black text-lg font-medium bg-transparent border-2  rounded-xl  focus:outline-none w-full py-4 pl-5"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:mx-32 my-5 mx-8 lg:gap-24">
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="text-black text-lg font-medium bg-transparent border-2 rounded-xl focus:outline-none w-full py-4 pl-5"
                >
                  <option value="">Select Role</option>
                  <option value="Creator">Creator</option>
                  <option value="Innovator">Innovator</option>
                  <option value="Investor">Investor</option>
                </select>
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
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Regform;
