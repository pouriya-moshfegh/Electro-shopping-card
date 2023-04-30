import React from "react";
import "./Collection.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function collection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-4 sm:px-10 h-[50vh]  text-white select-none">
        {/* p 1 */}
        <div className="img-style collection__p1 rounded-t-lg md:rounded-t-none md:rounded-l-xl  w-full">
          <div className="skewbg ">
            <div className="skew-x-[20deg] text-center space-y-8">
              <h1 className="text-xl md:text-2xl text-justify lg:text-3xl  mb-6  min-w-[300px]">
             <span className="lg:text-4xl text-3xl"> Headphone </span>  
                <br></br>
              ___ Collection ___
              </h1>
            
            </div>
            <a href="h#" className="btnShop">
               <span className="skew-x-[20deg] block text-center">Shop Now 
               <AiOutlineArrowRight className="inline-block mb-[3px]" /></span> 
              </a>
          </div>
        </div>
        {/* p2 */}
        <div className="img-style w-full collection__p2 relative">
          <div className="skewbg bg-red-600/20 ">
            <div className="skew-x-[20deg] text-center space-y-8">
              <h1 className="text-xl text-justify md:text-2xl lg:text-3xl   mb-6 lg:min-w-[300px] min-w-[200px]">
                <span className="lg:text-4xl text-3xl"> Camera </span>
                <br />
                ___ Collection ___
              </h1>
            </div>
            <a href="h#" className="btnShop">
               <span className="skew-x-[20deg] block text-center">Shop Now 
               <AiOutlineArrowRight className="inline-block mb-[3px]" /></span> 
              </a>
          </div>
        </div>
        {/* p3 */}
        <div className="img-style w-full collection__p3 relative  rounded-b-lg md:rounded-b-none md:rounded-r-xl ">
          <div className="skewbg">
            <div className="skew-x-[20deg] text-center space-y-8">
              <h1 className="text-xl md:text-2xl lg:text-3xl mb-6 lg:min-w-[350px] min-w-[200px] text-justify">
             <span className="lg:text-4xl text-3xl">  Laptop </span>  
                <br /> 
               ___ Collection ___
              </h1>
            </div>
              <a href="h#" className="btnShop">
               <span className="skew-x-[20deg] block text-center">Shop Now 
               <AiOutlineArrowRight className="inline-block mb-[3px]" /></span> 
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
