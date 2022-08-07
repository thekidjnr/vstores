import React from "react";
import Featured from "../../components/Theme-1/Featured";
import Hero from "../../components/Theme-1/Hero";
import Navbar from "../../components/Theme-1/Navbar";

const Theme1 = () => {
  return (
    <div className="bg-[#FFFBF9] h-[10000px]">
      <Navbar />
      <Hero />
      <Featured />
    </div>
  );
};

export default Theme1;
