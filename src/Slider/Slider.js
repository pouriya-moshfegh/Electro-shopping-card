import React, { Component } from "react";
import PBox from "../ProductBox/PBox";

export default class Slider extends Component {
  render() {
    return (
      <section className="sm:py-10 sm:px-10">
        {/* title contaienr */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:justify-between">
          <h1 className="text-4xl text-stone-900 font-bold">
            {this.props.title}
          </h1>
          {/* nav */}
          <ul className="flex space-x-4 font-bold text-stone-700">
            <li className="nav-item text-red-600 after:w-full">
              <a href="h#">Laptops</a>
            </li>
            <li className="nav-item">
              <a href="h#">Smartphoned</a>
            </li>
            <li className="nav-item">
              <a href="h#">Cameras</a>
            </li>
            <li className="nav-item">
              <a href="h#">accessories</a>
            </li>
          </ul>
        </div>
        <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl h-[50svh]  mt-4 sm:gap-4 px-4 ">
          <PBox></PBox>
        </div>
      </section>
    );
  }
}

// {/* red beats */}
//     {/* <div className="">red Beats by Dr. Dre wireless headphones, Headphones Beats Electronics Microphone Sound Disc jockey, Headphone, electronics, recording Studio, musician png</div>
//     {/* black sony
//     <div className="">Microphone Noise-cancelling headphones Bluetooth Headset, Sony Headphones, industrial, bluetooth, stereophonic Sound png</div>
//     {/* blue beats *
//     <div className="">blue Beats by Dr. Dre Beats Studio, Noise-cancelling headphones Beats Electronics Wireless Bluetooth, Headphone, blue, electronics, product png</div>
//     Slider */}
