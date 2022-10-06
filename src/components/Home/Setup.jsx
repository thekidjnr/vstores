import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Setup = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="section grid grid-cols-4 gap-10">
        <div className="w-[434px] h-[447px] bg-gray-200 flex-none"></div>
        <div className="col-start-3 col-span-2 mt-20">
          <div className="flex-auto flex justify-between ">
            <h1 className="text-5xl font-Nunito font-extrabold text-[#F8FFFE] w-1/2 leading-[55px]">
              Relatively Easy to Setup
            </h1>
            <div className="p-4  bg-[#F8FFFE] rounded-tr-3xl w-fit h-fit">
              <BsArrowUpRight className="text-secondary " size={30} />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-4">
            <div className="text-[#F8FFFE] mt-6 flex flex-col gap-2">
              <h1 className="text-4xl font-semibold">01</h1>
              <h2 className="text-3xl">Lorem Ipsum</h2>
              <h3 className="font-light">
                ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="text-[#F8FFFE] mt-6 flex flex-col gap-2">
              <h1 className="text-4xl font-semibold">02</h1>
              <h2 className="text-3xl">Lorem Ipsum</h2>
              <h3 className="font-light">
                ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="text-[#F8FFFE] mt-6 flex flex-col gap-2">
              <h1 className="text-4xl font-semibold">03</h1>
              <h2 className="text-3xl">Lorem Ipsum</h2>
              <h3 className="font-light">
                ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
            <div className="text-[#F8FFFE] mt-6 flex flex-col gap-2">
              <h1 className="text-4xl font-semibold">04</h1>
              <h2 className="text-3xl">Lorem Ipsum</h2>
              <h3 className="font-light">
                ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
