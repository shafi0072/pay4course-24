import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// import required modules
import { Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  return (
    <div className="mt-16">
      <p className="text-[#D830BB]">CLIENT TESTIMONIALS</p>
      <h2 className="uppercase text-2xl">
        Unleashing the power of your business
      </h2>

      <div className="mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex gap-4">
              <img
                className="w-48 h-[300px] rounded"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
              <div>
                <Rating
                  className="mb-4"
                  style={{ maxWidth: 140 }}
                  value={4}
                  readOnly
                />
                <p className="my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  animi modi distinctio quod provident rem ex nostrum quasi ab
                  voluptates.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <h1 className="text-2xl">Mehedi Hasan</h1>
                    <p>Student</p>
                  </div>
                  <FormatQuoteIcon fontSize="large" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4">
              <img
                className="w-48 h-[300px] rounded"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
              <div>
                <Rating
                  className="mb-4"
                  style={{ maxWidth: 140 }}
                  value={4}
                  readOnly
                />
                <p className="my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  animi modi distinctio quod provident rem ex nostrum quasi ab
                  voluptates.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <h1 className="text-2xl">Mehedi Hasan</h1>
                    <p>Student</p>
                  </div>
                  <FormatQuoteIcon fontSize="large" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4">
              <img
                className="w-48 h-[300px] rounded"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt=""
              />
              <div>
                <Rating
                  className="mb-4"
                  style={{ maxWidth: 140 }}
                  value={4}
                  readOnly
                />
                <p className="my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  animi modi distinctio quod provident rem ex nostrum quasi ab
                  voluptates.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <h1 className="text-2xl">Mehedi Hasan</h1>
                    <p>Student</p>
                  </div>
                  <FormatQuoteIcon fontSize="large" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
