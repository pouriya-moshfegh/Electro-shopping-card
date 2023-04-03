import React, { Component } from "react";
import { MdCompareArrows } from "react-icons/md";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

export default class PBox extends Component {
  render() {
    return (
      <article className=" mx-auto w-[80%] sm:w-full text-center p-2 items-center border  hover:border-red-600 duration-200 hover:shadow-xl relative">
        {/* product img */}
        <a href="h#" className="h-[60%]  block">
          <img
            src="./image/items/camera-1.png"
            alt="camera"
            className="h-[95%] mx-auto object-contain"
          />
        </a>
        {/* ============================= */}
        {/* product details */}
        <a href="h#" className=" text-black/50 text-sm mt-2 uppercase">
          category
        </a>
        <div className="text-black/80 text-xl uppercase">Product name</div>
        {/* price */}
        <span className=" text-red-700 font-bold text-xl mt-[-5px]">$980</span>
        {/* price without discount */}
        <span className="inline-block text-black/60 line-through  text-lg ml-[5px]">
          $1000
        </span>
        <hr className="mt-2" />
        {/* ============================= */}
        {/* icons */}
        <div className="flex justify-center space-x-3 mt-8 text-xl">
          {/* compare */}
          <div className=" relative ">
            <a href="h#" className=" icon-hover group">
              <MdCompareArrows className="" />
            <span className="icon-detail">Compare</span>
            </a>
          </div>
          {/* heart */}
          <div className=" relative">
            <a href="h#" className=" icon-hover group">
              <AiOutlineHeart className="realtive " />
              <span className="icon-detail">Add to Wishlist</span>
            </a>
          </div>
          {/* eye */}
          <div className=" relative">
            <a href="h#" className=" icon-hover group">
              <AiOutlineEye className="" />
              <span className="icon-detail">Quick view</span>
            </a>
          </div>
        </div>
          {/* ============================= */}
          {/* add to cart */}
      </article>
    );
  }
}
