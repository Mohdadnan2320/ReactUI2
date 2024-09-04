import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="w-full h-screen px-6 md:mt-10 lg:mt-5">
      <div className=" w-full h-full flex items-center justify-center md:inline md:h-screen">
        <div>
          <h1 className="text-[#fffffffd] font-bold text-8xl md:text-9xl md:mb-10 lg:text-[17vw]">
            Officex
          </h1>
          <h3 className="text-[#fffffffd] text-lg capitalize mt-5 md:text-2xl font-semibold ">
            Find your next coworking{" "}
          </h3>
          <h3 className="text-[#fffffffd] text-lg capitalize md:text-2xl md:mb-10 font-semibold ">
            coworking office
          </h3>

          <div className="mt-5">
            <p className="text-[#fffffffd] text-sm mb-10 md:text-xl">
              Find & Make you interior really stand out from the box.
            </p>

            <div className="overflow-hidden md:w-3/5 md:bg-[#fffffffd] md:rounded-full md:flex md:items-center md:justify-between md:px-3 md:py-2">
              <div className="bg-white w-full flex items-center px-2 rounded-md mb-6 md:mb-0">
                <input
                  className="w-full px-3 py-2 text-black outline-none"
                  type="text"
                  placeholder="Location"
                />
                <RiArrowDropDownLine className=" size-5 rounded-md" />
              </div>
              <div className="bg-white w-full flex items-center px-2 rounded-md mb-6 md:mb-0">
                <input
                  className="w-full px-3 py-2 text-black outline-none"
                  type="text"
                  placeholder="Size"
                />
                <RiArrowDropDownLine className="size-5 rounded-md" />
              </div>
              <div className="bg-white w-full flex items-center px-2 rounded-md mb-6 md:mb-0">
                <input
                  className="w-full px-3 py-2 text-black outline-none "
                  type="text"
                  placeholder="City"
                />
                <RiArrowDropDownLine className=" size-5 rounded-md" />
              </div>
              <div className="bg-[#000000] w-max rounded-full whitespace-nowrap mb-8 md:mb-0">
                <button className="text-[#fffffffd] px-8 py-4 border-none">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
