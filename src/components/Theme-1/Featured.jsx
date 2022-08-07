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
      <main className="flex gap-28 mt-10">
        <div className="flex flex-col gap-4">
          <span>All</span>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
          <span>Accessories</span>
        </div>
        <div className="grid grid-rows-1 grid-cols-3">
          <div className="fle">
            <div>
              <img src={necklace} alt="" />
              <h1>SIlver Necklace</h1>
              <h2>GHC 26.00</h2>
              <button>Buy Now</button>
              <AiOutlineShoppingCart className="text-[30px]" />
            </div>
            <AiOutlineHeart />
          </div>
          <div className="">
            <div>
              <img src={necklace} alt="" />
              <h1>SIlver Necklace</h1>
              <h2>GHC 26.00</h2>
              <button>Buy Now</button>
              <AiOutlineShoppingCart className="text-[30px]" />
            </div>
            <AiOutlineHeart />
          </div>
          <div className="fle">
            <div>
              <img src={necklace} alt="" />
              <h1>SIlver Necklace</h1>
              <h2>GHC 26.00</h2>
              <button>Buy Now</button>
              <AiOutlineShoppingCart className="text-[30px]" />
            </div>
            <AiOutlineHeart />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Featured;
