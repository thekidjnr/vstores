import React from "react";
import comma from "../../data/comma.png";
import person from "../../data/person.png";

const Review = () => {
  return (
    <div className="bg-[#fff3ea]">
      <section className="section mt-20 py-20">
        <div className="flex items-center gap-5">
          <div className="bg-black w-[130px] h-[1px]"></div>
          <h1 className="text-[40px] font-semibold font-Garamond ">
            Our Customers Reviews
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <div className="flex flex-col items-center">
            <img src={comma} alt="" className="w-[100px] mb-8" />
            <p className="text-center mb-4 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <img
              src={person}
              alt=""
              className=" object-fit rounded-full w-[120px] mb-2"
            />
            <h2 className="text-xl font-semibold">Michael Odjidja</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={comma} alt="" className="w-[100px] mb-8" />
            <p className="text-center mb-4 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <img
              src={person}
              alt=""
              className=" object-fit rounded-full w-[120px] mb-2"
            />
            <h2 className="text-xl font-semibold">Michael Odjidja</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={comma} alt="" className="w-[100px] mb-8" />
            <p className="text-center mb-4 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <img
              src={person}
              alt=""
              className=" object-fit rounded-full w-[120px] mb-2"
            />
            <h2 className="text-xl font-semibold">Michael Odjidja</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
