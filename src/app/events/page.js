"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Ecosystem from "@/components/Ecosystem";
import Events from "@/components/Events";
const page = () => {
  return (
    <main className="w-full overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="pt-16">
        <Events />
      </div>
      <div>
        <Ecosystem />
      </div>
      <Footer />
    </main>
  );
};

export default page;
