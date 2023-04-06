import React, { Component } from "react";
import { MdCompareArrows } from "react-icons/md";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import "./PBox.css";

export default class PBox extends Component {

  render() {
    return (
      <article className="box z-20 ">
      <div className=" mx-auto w-[80%] sm:w-full text-center p-2 items-center border bg-white min-h-[60vh] sm:min-h-[50vh]  hover:border-red-600 duration-200 hover:shadow-xl relative group/item h-[90%]  ">
        {/* product img */}
        <a href="h#" className="h-[60%] block">
          <img

        src={ this.props.img || "./image/items/camera-1.png"}
            alt="camera"
            className="h-[95%] mx-auto object-contain"
          />
        </a>
        {/* ============================= */}
        {/* product details */}
        <a href="h#" className=" text-black/50 text-sm mt-2 uppercase">
          {this.props.category || "Category"}
        </a>
        <div className="text-black/80 text-xl uppercase">
        {this.props.name || "Product name"}
        </div>
        {/* price */}
        <span className=" text-red-700 font-bold text-xl mt-[-5px]">
        {this.props.price || "$900"}
          </span>
        {/* price without discount */}
        <span className="inline-block text-black/60 line-through  text-lg ml-[5px]">
          $1000
        </span>
        <hr className="mt-2" />
        {/* ============================= */}
        {/* icons */}
        <div className="flex h-16 justify-center items-center space-x-3  text-xl z-10">
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
        <div className="item-cart w-full absolute opacity-0 duration-300 bottom-2 left-0 item:bg-white bg-slate-900 h-16 z-[-1] px-6 py-2">
          <button onClick={(e)=>{
            console.log(e.target.parentElement.dataset)
          }}
           className="btn-red" data-id={this.props.id}>
           <ImCart className="cart-icon opacity-0 mb-[5px]"/> <div className="cart-title absolute inline-block"> Add to cart</div>
          </button>
        </div>
      </div>
      </article>
    );
  }
}
// absolute left-[90px] top-[25px] opacity-0
