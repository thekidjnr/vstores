import React from "react";
import Benefits from "../../components/Home/Benefits";
import Dashboard from "../../components/Home/Dashboard";
import Hero from "../../components/Home/Hero";
import Plans from "../../components/Home/Plans";
import Setup from "../../components/Home/Setup";
import Navbar from "../../components/Navbar";

export const Home = () => {
  return (
    <div className="bg-[#F8FFFE]">
      <Navbar />
      <Hero />
      <Benefits />
      <Setup />
      <Dashboard />
      <Plans />
    </div>
  );
};
