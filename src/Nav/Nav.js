import React from "react";

export default function Nav() {
  return (
    <nav >
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
      <div className="md:hidde hidden {this-should-change-to-fixed-when-clicked} right-0 top-0 h-screen w-screen  backdrop-blur-[1px]">
        <ul className="fixed right-0 top-0 h-screen  w-1/3 bg-[#15161dfa] flex flex-col space-y-5 items-center py-5 text-white font-bold">
          <li className="text-3xl">Menu</li>
          <li>
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
  );
}
