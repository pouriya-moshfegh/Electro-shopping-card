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
          className={`bg-[#15161D]/90 rounded-r-full  sticky px-4 py-2 sm:px-10 text-white text-sm top-0 right-2 mb-2  w-[180px] sm:w-1/3 z-30 select-none `}
        >
          <div className="w-full flex flex-col space-y-2 relative">
            <button className="flex flex-col space-y-1 w-24 group items-center bg-white/10 hover:bg-white/20 p-1 rounded duration-150">
              <div className=""></div>
              <span></span>
              <BsFillHeartFill className="text-red-600 group-hover:scale-110 text-lg duration-150" />
              Your wishlist
            </button>
            <button
              className="flex flex-col space-y-2  justify-center w-24 group  items-center bg-white/10 hover:bg-white/20 p-1 rounded duration-150"
              onClick={this.func}
            >
              {this.props.cart ? (
                <span></span>
              ) : (
                <span className="absolute w-4 h-4 top-[1px] right-[22px] flex-center rounded-full bg-white/10 text-[13px] text-slate-300 font-semibold">
                  {this.props.cart.length || 2}
                </span>
              )}
              <ImCart className="text-slate-300 mt-1 group-hover:scale-110  duration-150 text-lg" />
              Your cart
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
