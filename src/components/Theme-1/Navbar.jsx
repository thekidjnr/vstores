import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <section className=" section pt-3 flex justify-between items-center  ">
      <h1 className="font-Rossans font-normal text-[30px] leading-[40.49px]">
        VStores
      </h1>
      <nav className="text-[18px] font-Poppins jusity-around flex gap-12 ml-28">
        <Link to="#home">Home</Link>
        <Link to="#products">Products</Link>
        <Link to="#reviews">Reviews</Link>
        <Link to="#newsletters">Newsletters</Link>
        <Link to="#contact">Contact</Link>
      </nav>
      <div className="flex gap-2 items-center justify-center font-Poppins">
        <div className="flex jusitfy-center gap-1 items-center border-2 rounded-xl border-[#828282] px-2 py-1">
          <BiSearch className="text-[22px] color-[#828282]" />
          <input type="text" className="outline-0 text-[18px]" />
        </div>
        <div className="flex items-center gap-4 ">
          <AiOutlineShoppingCart className="text-[30px]" />
          <button className="text-white bg-black px-5 py-1 rounded-xl text-lg">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
