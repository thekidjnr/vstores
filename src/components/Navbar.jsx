import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="section flex justify-between items-center pt-5">
        <h1 className="text-2xl font-bold">VeinStores</h1>
        <div className="font-Nunito font-semibold  flex gap-10 ">
          <Link to="/" className="hover:font-bold">
            How it Works
          </Link>
          <Link to="/" className="hover:font-bold">
            Platform
          </Link>
          <Link to="/" className="hover:font-bold">
            Plans
          </Link>
          <Link to="/" className="hover:font-bold">
            FAQs
          </Link>
          <Link to="/" className="hover:font-bold">
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="border-2 py-2 px-6 border-primary">
            Log in
          </Link>
          <Link
            to="/"
            className="bg-secondary py-2 px-4 border-secondary border-2 text-white"
          >
            Start Selling
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
