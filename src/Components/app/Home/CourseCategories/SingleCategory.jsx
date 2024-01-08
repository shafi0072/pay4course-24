import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SingleCategory = () => {
  return (
    <div className="bg-[#0B1926]">
      <img
        className="rounded-t-lg"
        src="https://www.reliablesoft.net/wp-content/uploads/2022/07/video-editing-courses.webp"
        alt=""
      />
      <div className="flex justify-between items-center py-10 px-6">
        <h3 className="text-xl font-semibold">Video Editing</h3>
        <button className="opacity-20">
          Explore Now
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default SingleCategory;
