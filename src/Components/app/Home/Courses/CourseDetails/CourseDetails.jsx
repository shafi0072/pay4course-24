import React, { useEffect, useState } from "react";
import { courses } from "../../../../../constant/course";
import Accordian from "./Accordian";
import Testimonial from "./Testimonial";
import AddToCartButton from "./AddToCartButton";

const CourseDetails = ({ id }) => {
  const course = courses.find((course) => course.id === parseInt(id));

  return (
    <div className="container pt-16 px-4">
      <div className=" lg:w-2/3  mx-auto ">
        <video
          className="h-[300px] lg:h-[500px] w-full"
          controls
          width="full"
          height="360"
        >
          <source
            src="https://www.youtube.com/watch?v=ThOGtDDHTMQ"
            type="video/mp4"
          />
        </video>
        {/* <iframe
        className="w-full h-[500px] rounded"
        src="https://youtu.be/F4Zu5ZZAG7I"
        title="Embedded Video"
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
        <div className="lg:flex justify-between gap-4 items-center">
          <div className="w-full lg:w-8/12">
            <h2 className="text-2xl font-semibold my-4">{course?.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              libero id aperiam nemo eos accusamus hic odio corrupti amet
              officia, rerum reiciendis veritatis. Officiis aut eos minus soluta
              quos accusantium ad officia fuga architecto, veniam molestiae
              delectus id iure deserunt distinctio at esse incidunt in vero eum
              expedita! Perferendis, quaerat!
            </p>
          </div>
          <AddToCartButton course={course} />
        </div>

        {/* accordian ---------- */}
        <Accordian />
        {/* testimonial  */}
        <Testimonial />
      </div>
    </div>
  );
};

export default CourseDetails;
