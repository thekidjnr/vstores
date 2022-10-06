import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex items-center mt-16 gap-8 section">
      <main className="flex-1">
        <h2 className="bg-auxiliary/30 max-w-fit py-2 px-4 text-primary font-bold text-lg ">
          DASHBOARD
        </h2>
        <h1 className="text-6xl font-Nunito font-bold text-primary mt-6 leading-[65px]">
          Manage your store with an all-in-one Dashboard
        </h1>
        <p className="font-light text-lg w-11/12 mt-6 text-[#737272]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
          consectetur adipiscing vitae condimentum rhoncus ullamcorper et. Ipsum
          elit, vel dui eu mattis et
        </p>
        <div className="border-2 py-3 px-4 border-primary flex items-center gap-2 text-primary w-fit mt-6">
          <Link to="/">Dashboard</Link>
          <MdOutlineDashboard />
        </div>
      </main>
      <aside>
        <div className="w-[633px] h-[479px] bg-gray-200 flex-none"></div>
      </aside>
    </div>
  );
};

export default Dashboard;
