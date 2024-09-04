import React from "react";

const Features = () => {
  return (
    <div className=" w-full bg-[#000000] px-6 py-2 md:h-full">
      <div className="md:h-full md:flex md:justify-between md:items-center lg:gap-2 lg:h-screen">
        <div className="md:w-3/5 lg:w-3/5">
          <div className="my-5">
            <h3 className="text-white text-sm lg:text-base">Any size & location</h3>
          </div>
          <div>
            <h2 className="text-white font-medium text-3xl capitalize lg:text-6xl lg:mt-14">
              We have offices <br /> for any team size
            </h2>
            <p className="text-white  text-sm my-5 lg:text-base lg:my-14">
              No matter how many people you need to <br />
              accomodate, we have offices that are <br />
              perfect for any team size, ranging from two to <br />
              2000+ people or more.
            </p>

            <button className="text-black bg-white rounded-full px-6 py-2 mb-10 lg:px-8 lg:py-4">
              Browse All
            </button>
          </div>
        </div>

        <div className="h-96 md:w-2/5 md:h-80 lg:w-2/5 lg:h-[80vh] lg:p-2">
          <img
            className="w-full h-full object-bottom object-cover rounded-3xl "
            src="https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
