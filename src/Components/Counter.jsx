import React from "react";

function Counter() {
  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity:
        <div className="ml-5 shadow-md flex ">
          <button className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md outline: none">
            -
            </button>
          <input name="num"  min="1" max="100" type="number" className=" text-center flex items-center justify-center border-[1px] border-[#f92e9e] outline-none w-[120px]" />
          <button className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md
            outline: none">
            +
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Counter;
