import React from "react";
import "./slider.css";

export default class  Slider extends React.Component {

  render(){
  return (
    <section className="  sm:py-10 sm:px-10 select-none ">
      {/* title contaienr */}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:justify-between">
        <h1 className="text-4xl text-stone-900 font-bold">{this.props.title} </h1>
        {/* nav */}
        <ul className="flex space-x-4 font-bold text-stone-700">
          <li className="nav-item text-red-600 after:w-full">
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
      </div>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto mt-4 sm:gap-x-6   px
      -4">
        {this.props.children}
      </div>

    </section>
  );}
}
