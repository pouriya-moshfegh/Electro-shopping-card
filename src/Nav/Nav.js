import React from "react";

export default function Nav() {
  return (
    <nav className="hidden md:block ">
      <ul
        className="px-8 py-4
    border-t-[3px]
    border-t-red-600 border-b flex space-x-6 font-semibold text-black"
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
    </nav>
  );
}
