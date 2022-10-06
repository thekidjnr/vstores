import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Benefits = () => {
  return (
    <div className="w-9/12 mx-auto max-w-[1400px] my-28">
      <div className="flex flex-col items-center ">
        <h2 className="bg-auxiliary/30 max-w-fit py-2 px-4 text-primary font-bold text-lg ">
          BENEFITS
        </h2>
        <h1 className="text-5xl font-Nunito font-extrabold text-primary mt-4 w-2/3 text-center leading-[55px]">
          Why should you build a virtual store with us?
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-8">
        <div className="flex flex-col items-center bg-auxiliary/5 h-[300px] justify-center px-4">
          <div className="p-4  bg-primary rounded-tr-3xl">
            <BsArrowUpRight className="text-white " size={30} />
          </div>
          <h1 className="text-2xl mt-4 mb-2 font-medium">Lorem Ipsum</h1>
          <p className="text-center text-lg font-light">
            ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit
            amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className="flex flex-col items-center bg-auxiliary/5 h-[300px] justify-center px-4">
          <div className="p-4  bg-primary rounded-tr-3xl">
            <BsArrowUpRight className="text-white " size={30} />
          </div>
          <h1 className="text-2xl mt-4 mb-2 font-medium">Lorem Ipsum</h1>
          <p className="text-center text-lg font-light">
            ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit
            amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className="flex flex-col items-center bg-auxiliary/5 h-[300px] justify-center px-4">
          <div className="p-4  bg-primary rounded-tr-3xl">
            <BsArrowUpRight className="text-white " size={30} />
          </div>
          <h1 className="text-2xl mt-4 mb-2 font-medium">Lorem Ipsum</h1>
          <p className="text-center text-lg font-light">
            ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit
            amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className="flex flex-col items-center bg-auxiliary/5 h-[300px] justify-center px-4">
          <div className="p-4  bg-primary rounded-tr-3xl">
            <BsArrowUpRight className="text-white " size={30} />
          </div>
          <h1 className="text-2xl mt-4 mb-2 font-medium">Lorem Ipsum</h1>
          <p className="text-center text-lg font-light">
            ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit
            amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
