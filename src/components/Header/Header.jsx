import React from "react";
import { useState } from "react";
import { SingIn } from "../SingIn/SingIn";
import { SingUp } from "../SingUp/SingUp";
export const Header = () => {
  let [state, setState] = useState();
  const handleState = () => {
    if (state !== 1) {
      setState((state = 1));
    }
  };

  if (state === 1 || state === 2) {
    document.getElementById("get").style.display = "none";
  }
  if (state === 0) {
    document.getElementById("get").style.display = "block";
  }
  return (
    <div className="bg-header bg-cover h-[720px] z-0">
      <div className="flex pt-[20px] justify-center items-center w-11/12 m-auto max-w-[1400px]">
        <div className="flex justify-between w-full items-center gap-10">
          <h1 className="font-Rossans font-normal text-[30px] leading-[40.49px] text-[#FFCE6F] ml-[23px]">
            VStores
          </h1>
          <div className=" flex ">
            <h1 className="text-white mr-[48px] font-Poppins font-normal text-[18px] leading-[27px] hover:cursor-pointer">
              How it works
            </h1>
            <h1 className="text-white mr-[48px] font-Poppins font-normal text-[18px] leading-[27px] hover:cursor-pointer">
              Benefits
            </h1>
            <h1 className="text-white mr-[48px] font-Poppins font-normal text-[18px] leading-[27px] hover:cursor-pointer">
              Reviews
            </h1>
            <h1 className="text-white mr-[48px] font-Poppins font-normal text-[18px] leading-[27px] hover:cursor-pointer">
              Features
            </h1>
            <h1 className="text-white mr-[48px] font-Poppins font-normal text-[18px] leading-[27px] hover:cursor-pointer">
              FAQs
            </h1>
          </div>
        </div>

        <div className="flex  items-center">
          <h1
            className="hover:cursor-pointer mr-[40px] text-white font-Poppins font-normal text-[15px] leading-[22.5px]"
            onClick={handleState}
          >
            Log in
          </h1>
          <div className="hover:cursor-pointer rounded-[7px] bg-white text-[#966507] font-Poppins font-normal text-[15px] leading-[22px] py-[12px] px-[22px]">
            Start Selling
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
          <div
            id="get"
            className="hover:cursor-pointer mt-[44px] w-[193px] h-[60px] bg-gradient-to-r from-white to-[#FFF6D8] rounded-[14px] py-[17px] px-[39px] font-bold font-Open text-[20px] leading-[27.24px] "
          >
            Get Started
          </div>
        </div>
        {state === 1 ? <SingIn setState={setState} state={state} /> : ""}
        {state === 2 ? <SingUp setState={setState} state={state} /> : ""}
      </div>
    </div>
  );
};
