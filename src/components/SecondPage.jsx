import React from "react";

const SecondPage = () => {
  return (
    <div className=" w-full h-full bg-[#F5F5F5] px-6 py-4">
      <div className=" w-full ">
        <div className="md: md:flex md:items-start md:justify-around">
          <div className=" my-10 md:w-1/5">
            <h6 className="text-sm font-light lg:text-xl">
              We are the next gen <br /> coworking platform
            </h6>
          </div>
          <div>
            <h2 className="my-10 text-2xl font-medium ">
              Premier provider of office <br />
              rental solutions for business <br />
              of all sizes flexibles plans and <br />
              competative rates.
            </h2>
          </div>
        </div>
        <div className="h-full w-full mt-10 md:flex md:items-center md:justify-center md:gap-4 lg:justify-evenly">
          <div className="w-full h-full mb-10 lg:w-[2/6]">
            <div className="w-full h-48 lg:h-60">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src="https://images.unsplash.com/photo-1693625700727-b548ca8f5679?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="mt-3 ">
              <h3 className="text-lg font-semibold">Marjet Street</h3>
              <p className="text-sm opacity-80">San Francisco</p>
            </div>
          </div>
          <div className="w-full h-full mb-10 lg:w-[2/6] ">
            <div className="w-full h-48 lg:h-60">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="mt-3 ">
              <h3 className="text-lg font-semibold">Marjet Street</h3>
              <p className="text-sm opacity-80">San Francisco</p>
            </div>
          </div>
          <div className="w-full h-full mb-10 lg:w-[2/6]">
            <div className="w-full h-48 lg:h-60">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src="https://images.unsplash.com/photo-1564540574859-0dfb63985953?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="mt-3 ">
              <h3 className="text-lg font-semibold">Marjet Street</h3>
              <p className="text-sm opacity-80">San Francisco</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-400 rounded-full mt-10 mb-5">
        <div className="w-1/4 h-[1px] bg-black rounded-full lg:w-1/6"></div>
      </div>
      <div className="my-10 flex items-center justify-center ">
        <button className="bg-[#000000] px-6 py-3 text-white text-lg font-light rounded-full">
          Browse All
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
