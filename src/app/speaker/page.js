"use client";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Speakerhero from "@/components/Speakerhero";
import React from "react";

const page = () => {
  return (
    <main className="w-full overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="pt-16">
        <Speakerhero />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <Events />
      </div>
      <Footer />
    </main>
  );
};

export default page;
