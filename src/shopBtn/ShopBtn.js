import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { ImCart } from "react-icons/im";

export default class ShopBtn extends React.Component {
  constructor(props) {
    super(props);
    this.func = this.func.bind(this);
    this.state = {};
  }
  func() {
    this.props.modalOpen();
  }
  render() {
    return (
      <>
        <div
          className={` fixed py-1 md:rounded-bl-full text-white text-sm  top-0 right-10 md:right-0 md:w-[120px] z-30 select-none `}
        >
          <div className="w-full flex justify-end px-1 space-x-1 relative">
            <button className="flex flex-col justify-center w-10 h-10 group items-center bg-red-200/60 hover:bg-red-200 rounded-full duration-150">

              <BsFillHeartFill className="text-red-600 group-hover:scale-110 text-lg duration-150 relative top-[1px] left-[1px]" />
  
            </button>
            <button
              className="flex flex-col justify-center w-10 h-10 group  items-center bg-black/40 hover:bg-black/80 p-1 rounded-full  duration-150 group"
              onClick={this.func}
            >
              {this.props.cart ? (
                <span></span>
              ) : (
                <span className="absolute w-4 h-4 top-[1px] right-[22px] flex-center rounded-full bg-white/10 text-[13px] text-slate-300 font-semibold">
                  {this.props.cart.length || 2}
                </span>
              )}
              <ImCart className="text-whitegroup-hover:scale-110  duration-150 text-lg group-hover:scale-110" />
       
            </button>
          </div>
        </div>
      </>
    );
  }
}
ShopBtn.defaultProps = {
  cart: [],
};
