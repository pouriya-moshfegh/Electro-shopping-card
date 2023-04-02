import { React, Component } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPersonFill, BsFillHeartFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { ImCart } from "react-icons/im";
import { CiSearch } from "react-icons/ci";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchBox: "",
      shopingCart: [],
      wishList: [],
    };
  }
  render() {
    return (
      <>
        <header className="bg-[#15161D] pb-4">
          {/* ==============    header nav   ================ */}
          <div className="flex justify-between bg-white/10  py-2 px-8 ">
            <ul className="flex space-x-6 items-center ">
              {/* number */}
              <li className="header-nav__title">
                <a href="h#">
                  {" "}
                  <AiOutlinePhone className="inline mx-[2px] text-2xl md:text-lg mb-1 text-red-700 hover:scale-110 duration-200" />
                </a>
                <a href="h# " className="hidden md:inline-block">
                  +021-95-51-84
                </a>
              </li>
              {/* email */}
              <li className="header-nav__title">
                <a href="h#">
                  <AiOutlineMail className="inline mx-[2px] text-[23px] md:text-lg mb-[2px] text-red-700 hover:scale-110 duration-200" />
                </a>
                <a href="h#" className="hidden  md:inline-block">
                  email@email.com
                </a>
              </li>
              {/* location */}
              <li className="header-nav__title">
                <a href="h#">
                  <FaLocationArrow className="inline mx-[3px] text-[18px] md:text-md mb-[1px] text-red-700 hover:scale-110 duration-200" />
                </a>
                <a href="h#" className="hidden md:inline-block">
                  1734 Stonecoal Road
                </a>
              </li>
              {/* Account */}
              <li className="header-nav__title">
                <a href="h#">
                  <BsFillPersonFill className="inline mx-[2px] text-[23px] md:text-lg mb-[1px] text-red-700 hover:scale-110 duration-200" />
                </a>
                <a href="h#" className="hidden md:inline-block">
                  My Account
                </a>
              </li>
            </ul>
            {/* nav logo */}
            <BiMenu className="md:hidden text-3xl text-white/90 relative bottom-[1px] hover:bg-slate-100/20 cursor-pointer duration-200 rounded-xl" />
          </div>

          {/* =============================== */}
          {/* container of logo search box and shoplist icon */}
          <div className="flex flex-col items-center h-[80%] space-y-4 space-x-6 md:flex-row md:justify-between px-6">
            {/* header logo */}
            <div className="mt-8 md:mt-3 md:w-1/3">
              <img
                src="./image/header/logo.png.webp"
                className="mx-auto"
                alt="header-logo"
              />
            </div>
            {/* header searchbox */}
            <form className=" w-full flex" onSubmit={() => alert("hi")}>
              {/* selection box  */}

              <select className="bg-white
           border w-1/5 rounded-l-full p-1 outline-none text-sm font-semibold text-center cursor-pointer hover:bg-slate-200 duration-200 ">
                <option value="All categories ">All </option>
                <option value="All categories ">Category 01</option>
                <option value="All categories ">Category 02</option>
              </select>
              {/* input */}
              <input
                type="text"
                placeholder="Search ..."
                value={this.state.searchBox}
                onChange={(e) => {
                  this.setState({ searchBox: e.target.value });
                }}
                className="bg-white flex-1 p-1 outline-none"
              />
              {/* submit */}
              <button
                type="submit"
                className="bg-red-600  w-1/5 p-1 rounded-r-full text-white hover:bg-red-700 duration-200"
              >
                <CiSearch className=" text-xl hidden lg:inline lg:text-lg" />
                search
              </button>
            </form>
            {/* =========================== */}
            {/* cart icons */}
            <div className=" md:w-2/5 text-white text-sm flex space-x-4 ">
              <a
                href="h#"
                className="flex flex-col  space-y-1 w-24 group items-center bg-white/10 hover:bg-white/20 p-1 rounded duration-150"
              >
                <span></span>
                <BsFillHeartFill className="text-red-600 group-hover:scale-110 text-lg duration-150" />
                Your wishlist
              </a>
              <a
                href="h#"
                className="flex flex-col space-y-1 w-24 group  items-center bg-white/10 relative hover:bg-white/20 p-1 rounded duration-150"
              >
                {!this.state.shopingCart.length && <span></span>}
                {this.state.shopingCart.length > 0 && (
                  <span className="absolute w-4 h-4 top-[1px] right-[22px] flex-center rounded-full bg-white/10 text-[13px] text-slate-300 font-semibold">
                    {this.state.shopingCart.length}
                  </span>
                )}
                <ImCart className="text-slate-300 group-hover:scale-110  duration-150 text-lg" />
                Your cart
              </a>
            </div>
          </div>
        </header>
      </>
    );
  }
}
