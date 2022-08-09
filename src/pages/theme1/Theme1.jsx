import React from "react";
import Featured from "../../components/Theme-1/Featured";
import Hero from "../../components/Theme-1/Hero";
import Navbar from "../../components/Theme-1/Navbar";
import Newsletters from "../../components/Theme-1/Newsletters";
import Review from "../../components/Theme-1/Review";

const Theme1 = () => {
  return (
    <div className="bg-[#FFFBF9]">
      <Navbar />
      <Hero />
      <Featured />
      <Review />
      <Newsletters />
    </div>
  );
};

export default Theme1;

