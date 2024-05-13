"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Regform from "@/components/Regform";
import React from "react";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-0 overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="pt-20">
        <Regform />
      </div>
      <Footer />
    </main>
  );
};

export default page;
