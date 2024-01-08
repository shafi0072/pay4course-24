import React from "react";
import Featured from "./Featured";
import Courses from "./Courses";
import CourseCategories from "./CourseCategories";
import Chart from "../Home/Chart/Chart";
const index = () => {
  return (
    <div>
      <Featured />
      <Courses />
      <CourseCategories />
      {/* <Chart/> */}
    </div>
  );
};

export default index;
