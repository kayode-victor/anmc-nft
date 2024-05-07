"use client";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partnerform from "@/components/Partnerform";
import Partnerhero from "@/components/Partnerhero";
import React from "react";

const page = () => {
  return (
    <main className="w-full overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="pt-16">
        <Partnerhero />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Partnerform />
      </div>
      <Footer />
    </main>
  );
};

export default page;
