import React from "react";

export default function Modal(props) {
  return (
    // container of page
    <div className="hidden h-[100vh] w-screen fixed top-0 backdrop-blur z-[99] flex justify-center items-center ">
      {/* cart */}
      <div className=" w-[90%] sm:w-1/2 max-w-lg h-1/2 bg-slate-900 shadow-xl rounded-xl text-white flex flex-col items-center py-4 px-4 overflow-y-auto">
        {/* title */}
        <h1 className="title w-full text-center">Your shopping cart</h1>
        {/* item container */}
        <div className="flex flex-col w-full bg-white rounded-sm">
          {/* each item */}
          <div className="w-full border-b flex justify-between items-center px-2">
            <img
              className="w-1/4 h-[100px] object-contain "
              src="./image/items/headphone-1.png"
              alt="phot"
            />
            <div className="text-black flex flex-col items-center">
              <div className="">Quantity </div> {props.quantity || 1}
            </div>
            <div className="text-black flex flex-col  font-bold items-center">
              <div className=""> Price</div> {props.price || 1000}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
