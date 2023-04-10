import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default class Modal extends React.Component {

  remover(id) {
    this.props.onClickRm(id);
  }
    render() {
    
    return (
      // container of page
      <div
        className={`${this.props.display} h-[100vh] w-screen fixed top-0 backdrop-blur z-[99]  justify-center items-center select-none`}
      >
        {/* ======================================== */}

        {/* cart */}
        <div className=" w-[90%] sm:w-1/2 max-w-lg h-1/2 bg-slate-900 shadow-xl rounded-xl text-white flex flex-col items-center pt-2  overflow-y-auto  relative ">
          {/* ============    close icon     ============= */}
          <AiFillCloseCircle
            onClick={() => {
              this.props.closeModal();
            }}
            className="absolute right-5 top-2 text-4xl text-white hover:text-red-600 duration-200 cursor-pointer"
          />
          {/* ===================================== */}

          {/* title */}
          <h1 className="title w-full text-center">
            {this.props.title || "title"}
          </h1>
          {/* item container */}
          <div className=" mt-4 flex flex-col items-center w-full rounded-sm">
            {/* ================   each item   =============== */}

            {this.props.inCart.length > 0 &&
              this.props.inCart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" border-b flex justify-between items-center px-2 w-[90%] bg-white rounded-xl mb-1  text-black"
                  >
                    {/* img */}
                    <img
                      className="w-1/4 h-[100px] object-contain "
                      src={item.img}
                      alt="phot"
                    />
                    {/* quantity */}
                    <div className=" flex flex-col items-center">
                      <div className="">Quantity</div>
                      {item.quantity || 1}
                    </div>
                    {/* price */}
                    <div className=" flex flex-col font-bold items-center">
                      <div className="">Price</div>
                      {item.price || 1000}
                    </div>
                    {/* remover */}
                    <button className="bg-black/20 hover:bg-red-100 duration-150 p-2 rounded-full" onClick={this.remover.bind(this, item.id)}>
                      Remove
                    </button>
                  </div>
                );
              })}
          </div>
          {/* =================================== */}
          <div className="mt-auto w-full h-16 flex justify-between">
            <button
            onClick={()=>this.props.countTotalPrice()}
             className="bg-white/10 hover:bg-blue-500/10 w-3/4 duration-150 text-white text-center py-4 text-xl">
           Total price :    {this.props.totalPrice || 0}
               </button>
            <button className="w-1/4 bg-red-400/80 hover:bg-red-500 duration-150 text-black text-center py-4 text-xl">Clear cart</button>
          </div>
        </div>
      </div>
    );
  }
}
