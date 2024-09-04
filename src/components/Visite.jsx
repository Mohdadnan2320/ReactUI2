import React from 'react';

const Visite = () => {
  return (
    <div className='w-full h-auto bg-[#F5F5F5] '>
        <div className='w-full h-[50vh] md:bg-slate-400 md:h-[40vh] lg:h-[90vh]'>
            <div className="flex items-end justify-center mt-10 h-full 
             bg-cover bg-center bg-no-repeat w-full 
             bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
              lg:mt-0 ">
                <button className=" text-black bg-white rounded-full px-6 py-2 mb-10 lg:px-8 lg:py-4">
              Browse All
            </button>
            </div>
        </div>

      
    </div>
  );
}

export default Visite;
