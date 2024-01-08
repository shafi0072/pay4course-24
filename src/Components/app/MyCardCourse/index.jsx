import React, { useEffect, useState } from "react";

const index = () => {
  const [myCard, setMycard] = useState([]);
  useEffect(() => {
    const myCard = JSON.parse(localStorage.getItem("myCard"));
    setMycard(myCard);
  }, []);
  // console.log(myCard);
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-24 ">
      <p className="text-[#D830BB]">ALL YOUR COURSE</p>
      <h2 className="text-2xl font-semibold">
        WHICH YOU HAVE ADDED TO THE CARD
      </h2>
      <div className="mt-4">
        {myCard?.map((course, index) => (
          <div key={index}>
            <div className="flex justify-between border-2 mb-2 px-2 py-4 border-[#0B1D34] items-center">
              <img className="w-30 h-28" src={course.image} alt="" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi consequatur, nisi
                </p>
              </div>
              <div>
                <span className="font-bold bg-[#112334] text-[#D830BB] px-4 py-2">
                  PRICE
                </span>
                <span className="bg-[#1D3953] text-white ps-4 pe-8 py-2 font-bold">
                  {course?.price} BDT
                </span>
              </div>
              <button className=" bg-[#7B07BE] px-8 rounded-md  py-2">
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
