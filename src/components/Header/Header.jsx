import React from "react";

export const Header = () => {
  return (
    <div className="bg-header bg-cover h-screen ">
      <div className="flex pt-[20px] justify-center items-center w-11/12 m-auto max-w-[1400px]">
        <div className="flex justify-between w-full items-center gap-10">
          <h1 className="font-Rossans font-normal text-[30px] leading-[40.49px] text-[#FFCE6F] ml-[23px]">
            VStores
          </h1>
          <div className=" flex gap-20 text-white font-Poppins font-normal text-[18px] leading-[27px] hover:cursor-pointer ">
            <h1 className="">How it works</h1>
            <h1 className="">Benefits</h1>
            <h1 className="">Reviews</h1>
            <h1 className="">Features</h1>
            <h1 className="">FAQs</h1>
          </div>
          <div className="flex  items-center">
            <h1 className="hover:cursor-pointer mr-[40px] text-white font-Poppins font-normal text-[15px] leading-[22.5px]">
              Log in
            </h1>
            <div className="hover:cursor-pointer rounded-[7px] bg-white text-[#966507] font-Poppins font-normal text-[15px] leading-[22px] py-[12px] px-[22px]">
              Start Selling
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "-webkit-center" }} className="mt-[186px]">
        <h1 className="font-Open font-bold text-[20px] leading-[27.24px] text-white">
          MONOPOLIZE YOUR ONLINE STORE
        </h1>
        <h1 className="text-white font-Poppins font-semibold text-[45px] leading-[67.5px]">
          Together, let’s setup your peronalized <br></br>Virtual Online Store{" "}
        </h1>
        <h1 className="font-Poppins font-light text-[20px] leading-[30px] text-white">
          We connect you directly to your customers
        </h1>
        <div className="hover:cursor-pointer mt-[44px] w-[193px] h-[60px] bg-gradient-to-r from-white to-[#FFF6D8] rounded-[14px] py-[17px] px-[39px] font-bold font-Open text-[20px] leading-[27.24px] ">
          Get Started
        </div>
      </div>
    </div>
  );
};
