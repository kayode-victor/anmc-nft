"use client";
import Attend from "@/components/Attend";
import Batches from "@/components/Batches";
import Day1 from "@/components/Day1";
import Day2 from "@/components/Day2";
import Day3 from "@/components/Day3";
import Ecosystem from "@/components/Ecosystem";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import VideoLink from "@/components/VideoLink";
import React from "react";

const page = () => {
  return (
    <main className="w-full flex flex-col gap-0 overflow-hidden font-firaSansCondensed">
      <Header />
      <div className="pt-16">
        <Hero />
      </div>
      <div className="py-8">
        <Logos />
      </div>
      <div>
        <Attend />
      </div>
      <div>
        <Day1 />
      </div>
      <div>
        <Day2 />
      </div>
      <div>
        <Batches />
      </div>
      <div>
        <Day3 />
      </div>
      <div>
        <VideoLink />
      </div>
      <div>
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
