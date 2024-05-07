"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Events from "@/components/Events";
import Attend from "@/components/Attend";
import Banner from "@/components/Banner";
import Mint from "@/components/Mint";
const page = () => {
  return (
    <main className="w-full overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="pt-16">
        <Banner />
      </div>
      <div>
        <Mint />
      </div>
      <div>
        <Attend />
      </div>
      <div>
        <Events />
      </div>
      <Footer />
    </main>
  );
};

export default page;
