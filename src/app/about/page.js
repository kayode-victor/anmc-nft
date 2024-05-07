"use client";
import Contact from "@/components/Contact";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import React from "react";

const page = () => {
  return (
    <main className="w-full overflow-hidden font-firaSansCondensed">
      <Header />
      <div>
        <Vision />
      </div>
      <div>
        <Mission />
      </div>
      <div>
        <Ecosystem />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default page;
