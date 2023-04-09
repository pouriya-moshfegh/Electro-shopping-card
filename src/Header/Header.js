import { React, Component } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPersonFill, } from "react-icons/bs";
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
        <header className="bg-[#15161D] pb-4 select-none ">
          {/* ==============    header nav   ================ */}
          <div className="flex justify-between bg-white/10 px-4  py-2 sm:px-10 ">
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
         
          </div>

          {/* =============================== */}
          {/* container of logo search box and shoplist icon */}
          <div className="flex flex-col items-center
          space-y-4
          sm:space-x-4
           h-[80%] md:flex-row md:justify-between px-4 sm:px-10">
            {/* header logo */}
            <div className="mt-8 md:mt-3  md:w-1/3">
              <img
                src="./image/header/logo.png.webp"
                className=""
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
            <div className="w-2/5"></div>
          </div>
        </header>

      </>

    );
  }
}
