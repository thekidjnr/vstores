import React from "react";

const Plans = () => {
  return (
    <div className="section my-28">
      <div className="flex flex-col items-center">
        <h2 className="bg-auxiliary/30 max-w-fit py-2 px-4 text-primary font-bold text-lg ">
          PLANS
        </h2>
        <h1 className="text-5xl font-Nunito font-extrabold text-primary mt-4 w-2/3 text-center leading-[55px]">
          Choose a plan that suits your store best
        </h1>
        <p className="font-light text-center w-9/12 mt-2 text-[#737272]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
          consectetur adipiscing vitae condimentum rhoncus ullamcorper et. Ipsum
          elit, vel dui eu mattis et
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-6">
        <div className="bg-[#C1D1D4] h-[629px] relative">
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-2xl">Basic</h1>
            <h2 className="text-lg text-white bg-black px-6 py-1">Free</h2>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-xl text-[#C1D1D4] bg-secondary  py-3 w-9/12 m-auto text-center">
            Select
          </div>
        </div>
        <div className="bg-[#0F2027] h-[629px]"></div>
        <div className="bg-[#2C5364] h-[629px]"></div>
      </div>
    </div>
  );
};

export default Plans;
