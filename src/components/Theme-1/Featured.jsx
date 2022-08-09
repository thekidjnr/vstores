import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import necklace from "../../data/necklace.png";

const Featured = () => {
  return (
    <section className="section">
      <div className="flex justify-between">
        <div className="flex items-center gap-28">
          <h1 className="bg-[#D8AA90] w-[10%] text-[30px] font-semibold font-Garamond leading-4 p-3">
            Featured <br /> &nbsp; &nbsp; Products
          </h1>
          <div className="flex items-center gap-2">
            <div className="bg-black w-[130px] h-[1px]"></div>
            <p className="text-[18px] w-[400px] z-[100000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              consectetur
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-2xl">
          <Link to="/">
            <BsTwitter />
          </Link>
          <Link to="/">
            <AiFillInstagram />
          </Link>
          <Link to="/">
            <FaFacebookF />
          </Link>
        </div>
      </div>
      <main className="flex gap-40 mt-10">
        <div>
          <div className="flex flex-col gap-4 items-start">
            <button>All</button>
            <button>Men</button>
            <button>Women</button>
            <button>Children</button>
            <button>Accessories</button>
          </div>
          <button className="border-2 border-black w-[110px] h-10 text-lg font-semibold mt-8">
            Show All
          </button>
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-4 mr-20">
          <div className="">
            <img src={necklace} alt="" />
            <div className="flex justify-between mt-2">
              <div>
                <h1 className="text-xl ">Silver Necklace</h1>
                <h2 className="font-bold text-lg leading-3">GHC 26.00</h2>
                <div className="flex mt-3 gap-2 items-center">
                  <button className="bg-[#D8AA90] px-2 py-1 font-bold">
                    Buy Now
                  </button>
                  <AiOutlineShoppingCart className="text-[25px]" />
                </div>
              </div>
              <AiOutlineHeart className="text-[28px]" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Featured;
