"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function addDataToFireStore(email) {
  try {
    const docRef = await addDoc(collection(db, "Subscribe User"), {
      email: email,
    });
    return true;
  } catch (error) {
    return false;
  }
}
const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const added = await addDataToFireStore(email);
    if (added) {
      setEmail("");
      // Show success toast
      toast.success("You have successfully subscribed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex border border-white rounded-xl">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email*"
            className="text-white placeholder:text-white text-lg font-medium bg-transparent border-none focus:outline-none w-full py-2 pl-5"
          />

          <button
            type="submit"
            className="w-64 h-14 text-black bg-white rounded-xl text-[20px] font-bold"
          >
            Subscribe
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Subscribe;
