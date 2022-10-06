import React from "react";
import { Link } from "react-router-dom";
import { BsBroadcast } from "react-icons/bs";
import HeroImg from "./assets/Hero.png";

const Hero = () => {
  return (
    <div className="flex items-center mt-16 gap-28">
      <main className="ml-16 flex-1">
        <h2 className="bg-auxiliary/30 max-w-fit py-2 px-4 text-primary font-bold text-lg ">
          GO DIGITAL
        </h2>
        <h1 className="text-6xl font-bold text-primary mt-6 leading-[80px]">
          Strategically Monopolize your Store Virtually.
        </h1>
        <p className="font-light text-lg w-11/12 mt-6 text-[#737272]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
          consectetur adipiscing vitae condimentum rhoncus ullamcorper et. Ipsum
          elit, vel dui eu mattis et
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            to="/"
            className="bg-primary py-2 px-4  text-white flex items-center"
          >
            Get Started
          </Link>

          <div className="border-2 py-3 px-4 border-primary flex items-center gap-2 text-primary ">
            <Link to="/">Live Demo</Link>
            <BsBroadcast />
          </div>
        </div>
      </main>
      <aside>
        <img src={HeroImg} alt="" />
      </aside>
    </div>
  );
};

export default Hero;
