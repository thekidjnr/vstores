import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import themePng from "../../data/theme/homepage.png";
import themePng2 from "../../data/theme/homepage2.png";

const Hero = () => {
  return (
    <section className="section flex ">
      <aside className="absolute ml-[180px] mt-[200px] w-[40%] z-[999999]">
        <h1 className="font-Garamond text-[75px] font-semibold">
          Slay with Style
        </h1>
        <div className="flex items-center gap-3">
          <div className="bg-black w-[160px] h-[1px]"></div>
          <p className="text-[18px] w-[300px] z-[100000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            consectetur
          </p>
        </div>
        <div className="flex items-center ml-[25%] mt-[25px]">
          <Link to="/" className="text-[18px] font-semibold w-[138px] ">
            View Collection
          </Link>
          <BiArrowBack className="transform rotate-180 text-xl " />
        </div>
      </aside>
      <div className="ml-[550px] mt-[60px]">
        <img src={themePng2} alt="" className="w-[30%] relative left-[290px]" />
        <img src={themePng} alt="" className="w-[50%] relative -top-32" />
      </div>
    </section>
  );
};

export default Hero;
