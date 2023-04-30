import React from "react";
import "./Nav.css";
import { BiMenu } from "react-icons/bi";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.displayChanger = this.displayChanger.bind(this);
    this.state = {
      display: "hidden",
    };
  }
  displayChanger() {
    if (this.state.display === "hidden") {
      this.setState({ display: "fixed" });
    }
    else  this.setState({ display: "hidden" });
  }
  render() {
    return (
      <>
        <BiMenu
          onClick={this.displayChanger}
          className="md:hidden fixed text-3xl text-red-600 right-2 top-1 hover:bg-slate-100/20 cursor-pointer duration-200 rounded-xl ml-auto z-40 "
        />
        <nav className="select-none">
          {/* normal nav */}
          <ul
            className="sm:px-10 py-4
        hidden md:flex
    border-t-[3px]
    border-t-red-600 border-b  space-x-6 font-semibold text-black"
          >
            <li className="nav-item text-red-600 after:w-full">
              <a href="h#">Home</a>
            </li>

            <li className="nav-item">
              <a href="h#">Hot Deals</a>
            </li>

            <li className="nav-item">
              <a href="h#">Categories</a>
            </li>

            <li className="nav-item">
              <a href="h#">Laptops</a>
            </li>

            <li className="nav-item">
              <a href="h#">Smartphones</a>
            </li>

            <li className="nav-item">
              <a href="h#">Cameras</a>
            </li>

            <li className="nav-item">
              <a href="h#">Accessories</a>
            </li>
          </ul>
          {/* ================================= */}

          {/* hambergur menu */}
          <div
            className={`md:hidden ${this.state.display} right-0 top-0 h-screen w-screen  backdrop-blur-[1px] z-40 `}
          >
            <ul className="fixed right-0 top-0 h-screen  w-1/3 bg-[#15161dfa] flex flex-col space-y-5 items-center py-5 text-white font-bold">
              <li className="text-3xl">Menu</li>
              <li className="text-red-600">
                <a href="h#">Home</a>
              </li>

              <li className="nav-item">
                <a href="h#">Hot Deals</a>
              </li>

              <li className="nav-item">
                <a href="h#">Categories</a>
              </li>

              <li className="nav-item">
                <a href="h#">Laptops</a>
              </li>

              <li className="nav-item">
                <a href="h#">Smartphones</a>
              </li>

              <li className="nav-item">
                <a href="h#">Cameras</a>
              </li>

              <li className="nav-item">
                <a href="h#">Accessories</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
