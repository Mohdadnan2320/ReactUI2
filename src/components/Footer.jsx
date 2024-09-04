import React from "react";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="w-full h-screen px-6 py-2 bg-[#F5F5F5]">
      <div className="my-10">
        <h1 className="text-[#2E2E2E] text-center font-bold text-8xl md:text-9xl md:mb-10 lg:text-[17vw]">
          Officex
        </h1>
        <div className="mt-10 md:my-16  lg:flex lg:items-center lg:justify-between">
          <div className="md:ml-20 lg:w-1/2">
            <h2 className="text-xl font-semibold capitalize mb-5 md:text-2xl">
              Subscribe to our <br /> newsletter
            </h2>
            <div className="flex items-center flex-wrap ">
            <input className="w-3/6 py-4 outline-none bg-transparent border-b border-[#2E2E2E]" type="text" placeholder="Your Email" />
            <GoArrowRight />
            </div>
          </div>
          <div className="flex items-center justify-around mt-10 flex-wrap lg:w-1/2">
            <div>
              <h2 className="opacity-65 mt-10 text-sm md:text-base">About</h2>
              <div className="flex flex-col flex-wrap gap-5 mt-5">
                <a className="text-xs md:text-sm " href="#">Our Story</a>
                <a className="text-xs md:text-sm " href="#">Our Team</a>
                <a className="text-xs md:text-sm " href="#">News</a>
                <a className="text-xs md:text-sm " href="#">Blog</a>
              </div>
            </div>
            <div>
              <h2 className="opacity-65 mt-10 md:text-base">Spaces</h2>
              <div className="flex flex-col flex-wrap gap-5 mt-5">
                <a className="text-xs md:text-sm" href="#">Small Team</a>
                <a className="text-xs md:text-sm" href="#">Medium Team</a>
                <a className="text-xs md:text-sm" href="#">Large Team</a>
                <a className="text-xs md:text-sm" href="#">Corporate</a>
              </div>
            </div>
            <div>
              <h2 className="opacity-65 mt-10 md:text-base">Locations</h2>
              <div className="flex flex-col flex-wrap gap-5 mt-5">
                <a className="text-xs md:text-sm" href="#">New York</a>
                <a className="text-xs md:text-sm" href="#">Chicago</a>
                <a className="text-xs md:text-sm" href="#">Los-Angles</a>
                <a className="text-xs md:text-sm" href="#">San-Francisco</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
