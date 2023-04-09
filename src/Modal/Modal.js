import React from "react";

export default class Modal extends React.Component {
  remover(id) {
    this.props.onClickRm(id);
  }
  render() {
    return (
      // container of page
      <div className={ `${this.props.display} h-[100vh] w-screen fixed top-0 backdrop-blur z-[99]  justify-center items-center` }>
        {/* cart */}
        <div className=" w-[90%] sm:w-1/2 max-w-lg h-1/2 bg-slate-900 shadow-xl rounded-xl text-white flex flex-col items-center py-4 px-4 overflow-y-auto">
          {/* title */}
          <h1 className="title w-full text-center">
            {this.props.title || "title"}
          </h1>
          {/* item container */}
          <div className="flex flex-col w-full bg-white rounded-sm">
            {/* each item */}
            {this.props.inCart.length > 0 &&
              this.props.inCart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full border-b flex justify-between items-center px-2 text-black"
                  >
                    
                    <img
                      className="w-1/4 h-[100px] object-contain "
                      src={item.img}
                      alt="phot"
                    />
                    <div className=" flex flex-col items-center">
                      <div className="">Quantity</div>
                      {item.quantity || 1}
                    </div>
                    <div className=" flex flex-col font-bold items-center">
                      <div className="">Price</div>
                      {item.price || 1000}
                    </div>
                    <button onClick={this.remover.bind(this, item.id)}>
                      Remove
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
