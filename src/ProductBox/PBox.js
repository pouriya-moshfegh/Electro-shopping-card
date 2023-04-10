import React, { Component } from "react";
import { MdCompareArrows } from "react-icons/md";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import "./PBox.css";

export default class PBox extends Component {


    btnClickHandler(id){
      this.props.onClickAdd(id)
    }
    btnLikeClickHandler(id){
      this.props.onClickLike(id)
    }

  render() {
    let {img,category,name,price,id} =this.props
    return (
      <article className="box z-20 select-none">
      <div className=" mx-auto w-[80%] sm:w-full text-center p-2 flex flex-col  justify-between  border bg-white max-h-[60vh] lg:max-h-[70vh]  hover:border-red-600 duration-200 hover:shadow-xl relative group/item h-full  ">
        {/* product img */}
        <a href="h#" className="h-[50%] block">
          <img

        src={ img || "./image/items/camera-1.png"}
            alt="camera"
            className="h-[95%] mx-auto object-contain"
          />
        </a>
        {/* ============================= */}
        {/* product details */}
       <div className="">
       <a href="h#" className=" text-black/50 text-sm mt-2 uppercase">
          {category || "Category"}
        </a>
        <div className="text-black/80 text-xl uppercase">
        { name || "Product name"}
        </div>
        {/* price */}
        <span className=" text-red-700 font-bold text-xl mt-[-5px]">
        { price || "$900"}
          </span>
        {/* price without discount */}
        <span className="inline-block text-black/60 line-through  text-lg ml-[5px]">
          $1000
        </span>
       </div>

        {/* ============================= */}
        {/* icons */}
        <div className="flex border-t  justify-center items-center space-x-3  text-xl z-10">
          {/* compare */}
          <div className=" relative ">
            <a href="h#" className=" icon-hover group">
              <MdCompareArrows className="" />
              <span className="icon-detail">Compare</span>
            </a>
          </div>
          {/* heart */}
          <div className=" relative">
            <button href="h#" className=" icon-hover group" onClick={this.btnLikeClickHandler.bind(this,id)}>
              <AiOutlineHeart className="realtive " />
              <span className="icon-detail">Add to Wishlist</span>
            </button>
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
        <div className="item-cart w-full absolute opacity-0 duration-300 bottom-2 left-0 item:bg-white bg-slate-900 h-16 z-[-1] px-6 py-4 ">
          <button onClick={this.btnClickHandler.bind(this,id)}
           className="btn-red" data-id={id}>
           <ImCart className="cart-icon opacity-0 mb-[5px]"/> <div className="cart-title absolute inline-block"> Add to cart</div>
          </button>
        </div>
      </div>
      </article>
    );
  }
}
// absolute left-[90px] top-[25px] opacity-0
