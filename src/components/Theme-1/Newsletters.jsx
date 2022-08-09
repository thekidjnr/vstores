import React from "react";

const Newsletters = () => {
  return (
    <section className="section flex flex-col items-center mt-10">
      <h1 className="text-[40px] font-semibold font-Garamond">
        Our Customers Reviews
      </h1>
      <h2 className="text-[20px] ">
        Receive latest product updates from my store by adding your mail for
        newsletters
      </h2>
      <div className="border border-black rounded-lg mt-4 py-4 w-[60%] flex justify-between">
        <input type="mail" className="outline-none ml-3 text-[18px]" />
        <button className="bg-black text-white rounded-md py-3 px-4 mr-3">
          Get Listed
        </button>
      </div>
    </section>
  );
};

export default Newsletters;
