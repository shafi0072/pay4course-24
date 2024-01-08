import React from "react";

const Subscribe = () => {
  // bg-gradient-to-r from-[#1A4DBE] to-[#1A4DBE]
  return (
    <section className="absolute w-full mx-auto -top-[230px] px-3 bg-[#7B07BE] rounded-md">
      <div className=" rounded-lg ">
        <div className="">
          <div className="text-white p-5 py-10 md:flex justify-between items-center">
            <h3 className="text-3xl font-bold">Get notified about the event! <br /> Subscribe today</h3>
           <div className="items-center relative">
           <input
              type="text"
              placeholder="Enter your Email"
              className="outline-none placeholder-black w-full py-4 ps-4 pr-48 rounded-xl text-black text-bold  "
            />
            <button className="bg-[#7B07BE] font-bold text-xl rounded-md py-2 px-4 text-white absolute right-4 top-1.5">Subscribe</button>
            
           </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
