"use client";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Submitform from "@/components/Submitform";
import React from "react";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-0 overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="pt-10">
        <Submitform />
      </div>
      <div>
        <Ecosystem />
      </div>
      <Footer />
    </main>
  );
};

export default page;
