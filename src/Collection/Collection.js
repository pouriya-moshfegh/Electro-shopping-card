import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function collection() {
  return (
    <section>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 py-10 px-4 sm:px-10 h-[90vh] md:h-[50vh]  text-black/80">
        {/* p 1 */}
        <div className="img-style w-full collection__p1  relative">
          <div className="skewbg">
            <div className="skew-x-[20deg] text-center space-y-8">
              <h1 className="text-xl mdtext-xl md:text-3xl l font-bold mb-6 ">Headphone Collection</h1>
              <a
                href="h#"
                className="btnShop"
              >
                Shop Now
                <AiOutlineArrowRight className="inline-block mb-[3px]" />
              </a>
            </div>
          </div>
        </div>
        {/* p2 */}
        <div className="img-style w-full collection__p2 relative">

          <div className="skewbg bg-red-600/20 ">
            <div className="skew-x-[20deg] text-center space-y-8">
              <h1 className="text-xl md:text-3xl  font-bold mb-6 ">Camera Collection</h1>
              <a
                href="h#"
                className="btnShop"
              >
                Shop Now
                <AiOutlineArrowRight className="inline-block mb-[3px]" />
              </a>
            </div>
          </div>
        </div>
        {/* p3 */}
        <div className="img-style w-full collection__p3 relative">

          <div className="skewbg">
            <div className="skew-x-[20deg] text-center space-y-8">
              <h1 className="text-xl md:text-3xl  font-bold mb-6 ">Laptop Collection</h1>
              <a
                href="h#"
                className="btnShop"
              >
                Shop Now
                <AiOutlineArrowRight className="inline-block mb-[3px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
